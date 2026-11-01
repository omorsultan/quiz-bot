(function(){
  var $=function(i){return document.getElementById(i)};
  var app=$('app'),tide=$('tide'),clock=$('clock'),stateEl=$('state'),hint=$('hint'),go=$('go'),rst=$('reset'),lapBtn=$('lap'),
      lapsEl=$('laps'),presetsEl=$('presets'),dots=$('dots'),snd=$('snd');
  var THEMES=['ocean','sunset','forest','violet'], BG={ocean:'#0B1020',sunset:'#1A0B1E',forest:'#08140E',violet:'#100B24'};
  var mode='timer',theme='ocean',sound=true,ac=null,lock=null,raf=0,endTs=0,startTs=0,lastSec=-1,lastKey='',alarmT=0;
  var D={
    timer:{total:300,rem:300000,st:'idle'},
    stopwatch:{el:0,laps:[],st:'idle'},
    pomodoro:{focus:25,brk:5,phase:'focus',round:1,total:1500,rem:1500000,st:'idle'}
  };
  var day=new Date().toDateString(),sessions=0;

  /* storage */
  try{
    var j=JSON.parse(localStorage.getItem('tide-v2')||'{}');
    if(j.tt){D.timer.total=j.tt;D.timer.rem=j.tt*1000}
    if(j.pf){D.pomodoro.focus=j.pf;D.pomodoro.brk=j.pb;D.pomodoro.total=j.pf*60;D.pomodoro.rem=j.pf*60000}
    if(j.theme&&BG[j.theme])theme=j.theme;
    if(j.sound===false)sound=false;
    if(j.day===day)sessions=j.n||0;
  }catch(e){}
  function save(){try{localStorage.setItem('tide-v2',JSON.stringify({tt:D.timer.total,pf:D.pomodoro.focus,pb:D.pomodoro.brk,theme:theme,sound:sound,day:day,n:sessions}))}catch(e){}}

  /* format */
  function pad(n){return n<10?'0'+n:''+n}
  function fmt(ms,floor){
    var t=floor?Math.floor(ms/1000):Math.ceil(ms/1000),h=Math.floor(t/3600),m=Math.floor(t%3600/60),s=t%60;
    return h?h+':'+pad(m)+':'+pad(s):pad(m)+':'+pad(s);
  }
  function fmtLap(ms){return fmt(ms,true)+'.'+pad(Math.floor(ms%1000/10))}
  function drawClock(str,cs){
    var key=str+'|'+cs; if(key===lastKey)return; lastKey=key;
    var o='';
    for(var i=0;i<str.length;i++){var c=str[i];o+=c===':'?'<span class="c">:</span>':'<span class="d">'+c+'</span>'}
    if(cs)o+='<span class="cs">.'+cs+'</span>';
    clock.innerHTML=o; clock.classList.toggle('long',str.length>5); clock.setAttribute('aria-label',str);
  }

  /* paint */
  function paint(){
    var d=D[mode],lvl;
    if(mode==='stopwatch'){
      drawClock(fmt(d.el,true),pad(Math.floor(d.el%1000/10)));
      lvl=.1+.9*((d.el%60000)/60000);
    }else{
      drawClock(fmt(d.rem));
      lvl=d.total>0?d.rem/(d.total*1000):0;
    }
    tide.style.setProperty('--lvl',Math.max(0,Math.min(1,lvl)));
    app.classList.toggle('empty',lvl<=.001);
    app.classList.toggle('warn',d.st==='run'&&mode!=='stopwatch'&&d.rem<=10000);
    if(d.st==='run')document.title=fmt(mode==='stopwatch'?d.el:d.rem,mode==='stopwatch')+' · Tide';
  }
  function phaseName(d){return d.phase==='focus'?'Focus':d.phase==='short'?'Short break':'Long break'}
  function ui(){
    var d=D[mode],st=d.st;
    app.classList.remove('idle','run','paused','done'); app.classList.add(st);
    app.dataset.mode=mode; app.dataset.theme=theme;
    document.getElementById('tc').content=BG[theme];
    snd.classList.toggle('muted',!sound);
    document.querySelectorAll('#tabs button').forEach(function(b){b.classList.toggle('on',b.dataset.mode===mode)});
    var names={idle:'Ready',run:'Running',paused:'Paused',done:'Finished'};
    stateEl.textContent=mode==='pomodoro'?phaseName(d)+(st==='paused'?' · Paused':''):names[st];
    go.textContent=st==='idle'?'Start':st==='run'?'Pause':st==='paused'?'Resume':'Restart';
    rst.classList.toggle('hide',st==='idle');
    lapBtn.classList.toggle('hide',!(mode==='stopwatch'&&st==='run'));
    var h={idle:'Pick a time, then press Start',run:'Tap the numbers to pause',paused:'Tap Resume to continue',done:'Time’s up. Tap Restart to go again'};
    hint.textContent=mode==='stopwatch'?(st==='idle'?'Press Start. Tap Lap to mark a split':h[st]):
      mode==='pomodoro'?(st==='idle'?sessions+' focus '+(sessions===1?'session':'sessions')+' done today':h[st]):h[st];
    if(mode==='pomodoro'){
      var s='';for(var i=1;i<=4;i++)s+='<i class="'+(i<d.round||(i===d.round&&d.phase!=='focus')?'on':'')+(i===d.round?' now':'')+'"></i>';
      dots.innerHTML=s;
    }
    renderPresets(); renderLaps(); paint();
    if(st!=='run')document.title='Tide';
  }
  function renderPresets(){
    var h='',d=D[mode];
    if(mode==='timer'){
      [1,5,10,15,25,45].forEach(function(m){h+='<button class="chip'+(d.total===m*60?' sel':'')+'" data-m="'+m+'">'+m+' min</button>'});
      h+='<button class="chip" data-m="custom">Custom</button>';
    }else if(mode==='pomodoro'){
      [[25,5],[50,10],[15,3]].forEach(function(p){h+='<button class="chip'+(d.focus===p[0]?' sel':'')+'" data-f="'+p[0]+'" data-b="'+p[1]+'">'+p[0]+' / '+p[1]+'</button>'});
    }
    presetsEl.innerHTML=h;
  }
  function renderLaps(){
    var L=D.stopwatch.laps,h='';
    L.forEach(function(l,i){h+='<li><b>Lap '+(L.length-i)+'</b><span>'+fmtLap(l.split)+'</span><span>'+fmtLap(l.total)+'</span></li>'});
    lapsEl.innerHTML=h; lapsEl.classList.toggle('has',L.length>0);
  }

  /* engine */
  function tick(){
    var d=D[mode],now=Date.now();
    if(mode==='stopwatch'){d.el=now-startTs}
    else{
      d.rem=endTs-now;
      if(d.rem<=0){d.rem=0;complete();return}
      var sec=Math.ceil(d.rem/1000);
      if(sec!==lastSec){lastSec=sec;if(sec<=3&&sound)beep(520,0,.09)}
    }
    paint(); raf=requestAnimationFrame(tick);
  }
  function start(){
    var d=D[mode]; audioInit(); getLock();
    if(mode==='stopwatch')startTs=Date.now()-d.el; else endTs=Date.now()+d.rem;
    d.st='run'; lastSec=-1; ui(); cancelAnimationFrame(raf); raf=requestAnimationFrame(tick);
  }
  function pause(){
    var d=D[mode]; cancelAnimationFrame(raf);
    if(mode!=='stopwatch')d.rem=Math.max(0,endTs-Date.now());
    d.st='paused'; releaseLock(); ui();
  }
  function reset(){
    var d=D[mode]; cancelAnimationFrame(raf); stopAlarm(); releaseLock();
    if(mode==='timer')d.rem=d.total*1000;
    else if(mode==='stopwatch'){d.el=0;d.laps=[]}
    else{d.phase='focus';d.round=1;d.total=d.focus*60;d.rem=d.total*1000}
    d.st='idle'; ui();
  }
  function complete(){
    var d=D[mode];
    if(mode==='pomodoro'){
      if(d.phase==='focus'){sessions++;save();d.phase=d.round%4===0?'long':'short';d.total=(d.phase==='long'?d.brk*3:d.brk)*60}
      else{d.phase='focus';d.round=d.round%4+1;d.total=d.focus*60}
      d.rem=d.total*1000; endTs=Date.now()+d.rem; lastSec=-1; chime(); ui();
      raf=requestAnimationFrame(tick); return;
    }
    d.st='done'; releaseLock(); ui(); alarm();
  }
  function lap(){
    var d=D.stopwatch,prev=d.laps.length?d.laps[0].total:0;
    d.laps.unshift({split:d.el-prev,total:d.el}); renderLaps();
  }

  /* settings */
  function setTimer(s){
    var d=D.timer; if(d.st!=='idle')return;
    d.total=Math.max(5,Math.min(359999,Math.round(s))); d.rem=d.total*1000; save(); ui();
  }
  function setPomo(f,b){
    var d=D.pomodoro; if(d.st!=='idle')return;
    d.focus=f;d.brk=b;d.phase='focus';d.round=1;d.total=f*60;d.rem=d.total*1000; save(); ui();
  }

  /* sound, haptics, wake lock */
  function audioInit(){try{if(!ac)ac=new (window.AudioContext||window.webkitAudioContext)();if(ac.state==='suspended')ac.resume()}catch(e){}}
  function beep(f,w,dur){
    if(!ac)return;
    var o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime+w;
    o.type='sine';o.frequency.value=f;o.connect(g);g.connect(ac.destination);
    g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.5,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
    o.start(t);o.stop(t+dur+.05);
  }
  function chime(){if(sound){beep(784,0,.16);beep(988,.18,.3)}try{navigator.vibrate&&navigator.vibrate([150,80,150])}catch(e){}}
  function alarm(){
    var n=0;
    (function ring(){
      if(sound){beep(880,0,.18);beep(1175,.22,.18);beep(880,.44,.3)}
      try{navigator.vibrate&&navigator.vibrate([200,100,200,100,400])}catch(e){}
      if(++n<6)alarmT=setTimeout(ring,1400);
    })();
  }
  function stopAlarm(){clearTimeout(alarmT);try{navigator.vibrate&&navigator.vibrate(0)}catch(e){}}
  function getLock(){try{navigator.wakeLock&&navigator.wakeLock.request('screen').then(function(l){lock=l}).catch(function(){})}catch(e){}}
  function releaseLock(){try{if(lock){lock.release();lock=null}}catch(e){}}
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible'&&D[mode].st==='run')getLock()});

  /* events */
  function toggle(){
    var d=D[mode];
    if(d.st==='done'){stopAlarm();d.rem=d.total*1000;start();return}
    d.st==='run'?pause():start();
  }
  go.addEventListener('click',toggle);
  rst.addEventListener('click',reset);
  lapBtn.addEventListener('click',lap);
  clock.addEventListener('click',function(){if(D[mode].st!=='idle'&&D[mode].st!=='done')toggle()});
  $('tabs').addEventListener('click',function(e){
    var b=e.target.closest('button');if(!b||b.dataset.mode===mode)return;
    if(D[mode].st==='run')pause();
    mode=b.dataset.mode; lastKey=''; ui();
  });
  presetsEl.addEventListener('click',function(e){
    var b=e.target.closest('.chip');if(!b)return;
    if(mode==='timer'){
      if(b.dataset.m==='custom'){var v=parseFloat(prompt('Minutes?','12'));if(v>0)setTimer(v*60)}
      else setTimer(+b.dataset.m*60);
    }else setPomo(+b.dataset.f,+b.dataset.b);
  });
  $('adjust').addEventListener('click',function(e){var b=e.target.closest('.chip');if(b)setTimer(D.timer.total+(+b.dataset.s))});
  $('theme').addEventListener('click',function(){theme=THEMES[(THEMES.indexOf(theme)+1)%THEMES.length];save();ui()});
  snd.addEventListener('click',function(){sound=!sound;save();ui();if(sound){audioInit();beep(660,0,.12)}});
  var fb=$('full');
  if(document.documentElement.requestFullscreen){
    fb.addEventListener('click',function(){try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}catch(e){}});
  }else fb.style.display='none';
  document.addEventListener('keydown',function(e){
    if(e.code==='Space'){e.preventDefault();toggle()}
    else if(e.key==='r'||e.key==='R')reset();
    else if((e.key==='l'||e.key==='L')&&mode==='stopwatch'&&D.stopwatch.st==='run')lap();
  });

  ui();
})();
