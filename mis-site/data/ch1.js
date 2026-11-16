/* =========================================================
   MIS Chapter 1 — DATA
   All topics, explanations, MCQs, answers, revision facts
   and the 10-question mini test.
   ========================================================= */
(function () {
  // Q(number, question, [A,B,C,D], correctLetter, shortExplanation)
  const Q = (n, q, o, a, e) => ({ n, q, options: o, answer: "ABCD".indexOf(a), explain: e });

  const topics = [
    /* ---------------------------------------------------- 1 */
    {
      id: "intro-mis",
      num: 1,
      icon: "🧭",
      title: "Introduction to Management Information Systems (MIS)",
      short: "What MIS is, the three areas it connects, and why it matters.",
      html: `
        <p><strong>Management Information System (MIS)</strong> is a system that combines <em>people, technology, and business processes</em> to collect, process, store, and distribute information.</p>
        <h4>MIS connects three major areas</h4>
        <div class="trio">
          <div><span>🧑‍💼</span>Management</div>
          <div><span>🏢</span>Organization</div>
          <div><span>💻</span>Technology</div>
        </div>
        <ul>
          <li>It helps businesses make better decisions.</li>
          <li>It supports digital transformation.</li>
          <li>It helps organizations manage remote workers.</li>
          <li>It connects IT investment with business goals.</li>
        </ul>
        <div class="example"><b>Example:</b> A university uses an online student management system to manage student information, results, attendance, and registration.</div>
      `,
      questions: [
        Q(1, "What does MIS stand for?", ["Management Internet System", "Management Information System", "Modern Information Software", "Management Integrated Service"], "B", "MIS means Management Information System."),
        Q(2, "MIS sits at the intersection of which three areas?", ["Hardware, Software, Network", "Finance, Marketing, HR", "Management, Organization, Technology", "Data, Information, Knowledge"], "C", "MIS connects management, organization, and technology."),
        Q(3, "What is the primary purpose of MIS?", ["Only storing files", "Supporting decision-making and organizational control", "Only developing software", "Replacing all employees"], "B", "MIS provides useful information for decisions and control."),
        Q(4, "Which of the following is related to digital transformation?", ["Manual record keeping", "Digitizing business data and processes", "Avoiding technology", "Removing information systems"], "B", "Digital transformation converts traditional processes into digital processes.")
      ]
    },

    /* ---------------------------------------------------- 2 */
    {
      id: "mis-professionals",
      num: 2,
      icon: "👩‍💻",
      title: "Tasks of MIS Professionals",
      short: "Requirements, budgets, progress, team support and communication.",
      html: `
        <p>MIS professionals help organizations manage IT projects and connect business requirements with technical solutions.</p>
        <h4>Their major tasks include</h4>
        <ol>
          <li><strong>Requirement Management:</strong> Collecting user requirements and converting them into system specifications.</li>
          <li><strong>Budget Tracking:</strong> Monitoring project costs and expected Return on Investment (ROI).</li>
          <li><strong>Progress Monitoring:</strong> Checking project timelines, milestones, and deliverables.</li>
          <li><strong>Team Support:</strong> Providing training and troubleshooting.</li>
          <li><strong>Communication:</strong> Connecting technical staff with business stakeholders.</li>
        </ol>
        <div class="example"><b>Example:</b> A company wants to develop an online shopping system. An MIS professional collects requirements from the sales team and communicates them to developers.</div>
      `,
      questions: [
        Q(5, "What is the main purpose of requirement management?", ["Hiring employees", "Converting business needs into system specifications", "Managing company advertisements", "Designing company logos"], "B", "Requirements are translated into technical system specifications."),
        Q(6, "What does ROI stand for?", ["Return on Investment", "Rate of Information", "Result of Implementation", "Return on Internet"], "A", "ROI measures the return earned from an investment."),
        Q(7, "Which task involves monitoring project timelines and milestones?", ["Requirement gathering", "Progress management", "Marketing", "Database normalization"], "B", "Progress management tracks project activities and deadlines."),
        Q(8, "MIS professionals act as a bridge between which groups?", ["Customers and suppliers only", "Technical staff and business stakeholders", "Teachers and students", "Banks and customers"], "B", "MIS professionals connect technical and business teams.")
      ]
    },

    /* ---------------------------------------------------- 3 */
    {
      id: "spec-data",
      num: 3,
      icon: "🗄️",
      title: "Specialization – Data",
      short: "Databases, SQL, ETL, Business Intelligence and analytics.",
      html: `
        <p>Data specialization focuses on managing and analyzing business data.</p>
        <h4>Main responsibilities</h4>
        <ul>
          <li><strong>Database Management:</strong> Maintaining databases and writing SQL queries.</li>
          <li><strong>Business Questions:</strong> Identifying questions that can be answered using data.</li>
          <li><strong>ETL:</strong> Extracting, transforming, and loading data.</li>
          <li><strong>Business Intelligence (BI):</strong> Creating reports and dashboards.</li>
          <li><strong>Analytics:</strong> Analyzing data to support decisions.</li>
        </ul>
        <h4>ETL means</h4>
        <div class="steps">
          <div><b>Extract</b><span>Collect data from different sources.</span></div>
          <div><b>Transform</b><span>Clean and convert data into a suitable format.</span></div>
          <div><b>Load</b><span>Store the processed data in a target database.</span></div>
        </div>
        <div class="example"><b>Example:</b> An online shop analyzes sales data to identify its most popular products.</div>
      `,
      questions: [
        Q(9, "Which language is commonly used to write database queries?", ["HTML", "CSS", "SQL", "XML"], "C", "SQL is used to communicate with relational databases."),
        Q(10, "What does ETL stand for?", ["Extract, Transform, Load", "Execute, Transfer, Link", "Enter, Test, Launch", "Extract, Test, Learn"], "A", "ETL means Extract, Transform, Load."),
        Q(11, "Which activity is related to Business Intelligence?", ["Creating dashboards and reports", "Designing computer hardware", "Repairing networks", "Hiring employees"], "A", "BI tools provide dashboards, reports, and analytics."),
        Q(12, "What is the main purpose of data specialization?", ["Managing office furniture", "Managing and analyzing business data", "Developing operating systems only", "Managing employee holidays only"], "B", "Data specialists manage and analyze organizational data.")
      ]
    },

    /* ---------------------------------------------------- 4 */
    {
      id: "spec-software",
      num: 4,
      icon: "🧩",
      title: "Specialization – Software",
      short: "Selecting, building, integrating, testing and maintaining business software.",
      html: `
        <p>Software specialization focuses on selecting, developing, integrating, testing, and maintaining business software.</p>
        <h4>Major activities</h4>
        <ol>
          <li><strong>Research Existing Solutions:</strong> Compare ready-made software with custom software.</li>
          <li><strong>Custom Development:</strong> Develop software for specific business needs.</li>
          <li><strong>System Integration:</strong> Connect new software with existing systems.</li>
          <li><strong>Testing:</strong> Check whether the software works correctly.</li>
          <li><strong>Deployment:</strong> Make software available to users.</li>
          <li><strong>Maintenance:</strong> Fix bugs and improve software after deployment.</li>
        </ol>
        <h4>Two types of software solutions</h4>
        <div class="compare">
          <div><b>Off-the-shelf software</b><p>Ready-made software available in the market.</p></div>
          <div><b>Custom software</b><p>Software developed for a particular organization's needs.</p></div>
        </div>
      `,
      questions: [
        Q(13, "What is off-the-shelf software?", ["Software developed for one specific company only", "Ready-made software available in the market", "Software without testing", "Software that cannot be modified"], "B", "Off-the-shelf software is already developed and sold to users."),
        Q(14, "What is custom software?", ["Software developed for specific business requirements", "Software available only for free", "Software used only for gaming", "Software without a database"], "A", "Custom software is built according to specific requirements."),
        Q(15, "What does system integration mean?", ["Deleting old systems", "Connecting new software with existing systems", "Replacing all employees", "Removing databases"], "B", "Integration allows different systems to work together."),
        Q(16, "Which activity happens after software deployment?", ["Maintenance", "Requirement gathering only", "Business analysis only", "Initial planning only"], "A", "Maintenance fixes problems and improves software after deployment.")
      ]
    },

    /* ---------------------------------------------------- 5 */
    {
      id: "spec-business",
      num: 5,
      icon: "💼",
      title: "Specialization – Business",
      short: "Aligning technology with business strategy and managing change.",
      html: `
        <p>Business specialization focuses on aligning technology with business strategy.</p>
        <h4>Important areas</h4>
        <ul>
          <li><strong>Business Strategy:</strong> Making IT investments that support business goals.</li>
          <li><strong>Finance:</strong> Managing financial resources.</li>
          <li><strong>Operations:</strong> Managing daily business activities.</li>
          <li><strong>Marketing:</strong> Promoting products and services.</li>
          <li><strong>HR:</strong> Managing employees.</li>
          <li><strong>Change Management:</strong> Helping employees adapt to new systems.</li>
        </ul>
        <div class="example"><b>Example:</b> A company invests in an online ordering system to increase sales and improve customer service.</div>
      `,
      questions: [
        Q(17, "What is the main purpose of business specialization in MIS?", ["Aligning IT with business strategy", "Developing computer hardware", "Repairing printers", "Writing only SQL queries"], "A", "IT investments should support business objectives."),
        Q(18, "Which one is a business function?", ["Finance", "Marketing", "Human Resources", "All of the above"], "D", "Finance, marketing, and HR are all business functions."),
        Q(19, "What is change management?", ["Managing changes in organizational processes and systems", "Changing computer passwords", "Changing software programming languages only", "Deleting business records"], "A", "Change management helps an organization adapt to new systems and processes.")
      ]
    },

    /* ---------------------------------------------------- 6 */
    {
      id: "popular-systems",
      num: 6,
      icon: "🏭",
      title: "Popular MIS Systems",
      short: "ERP, CRM, SRM, BI and SCM — what each one manages.",
      html: `
        <p>Organizations use different information systems to manage business activities.</p>
        <div class="sys-grid">
          <div class="sys"><div class="abbr">ERP</div><b>Enterprise Resource Planning</b><p>Integrates major business processes such as finance, manufacturing, and HR.</p><small>Example: Managing company resources in one system.</small></div>
          <div class="sys"><div class="abbr">CRM</div><b>Customer Relationship Management</b><p>Manages customer information, interactions, and relationships.</p><small>Example: Tracking customer purchases.</small></div>
          <div class="sys"><div class="abbr">SRM</div><b>Supplier Relationship Management</b><p>Manages supplier relationships and procurement activities.</p><small>Example: Managing supplier orders.</small></div>
          <div class="sys"><div class="abbr">BI</div><b>Business Intelligence</b><p>Provides dashboards, reports, and analytics for decision-making.</p></div>
          <div class="sys"><div class="abbr">SCM</div><b>Supply Chain Management</b><p>Manages the flow of goods, information, and finances from suppliers to customers.</p></div>
        </div>
      `,
      questions: [
        Q(20, "What does ERP stand for?", ["Enterprise Resource Planning", "Electronic Record Processing", "Enterprise Research Program", "Employee Resource Process"], "A", "ERP means Enterprise Resource Planning."),
        Q(21, "Which system manages customer relationships?", ["ERP", "CRM", "SCM", "SRM"], "B", "CRM manages customer information and relationships."),
        Q(22, "Which system focuses on supplier relationships?", ["CRM", "BI", "SRM", "ERP"], "C", "SRM manages supplier relationships."),
        Q(23, "Which system provides dashboards and analytical reports?", ["BI", "SCM", "SRM", "CRM"], "A", "BI provides analytical reports and dashboards."),
        Q(24, "Which system manages the flow of goods, information, and finances?", ["CRM", "SCM", "ERP", "BI"], "B", "SCM coordinates the supply chain."),
        Q(25, "Which system integrates finance, HR, and manufacturing?", ["ERP", "CRM", "SRM", "SCM"], "A", "ERP integrates different business functions.")
      ]
    },

    /* ---------------------------------------------------- 7 */
    {
      id: "future-mis",
      num: 7,
      icon: "🚀",
      title: "Future of MIS Systems",
      short: "AI, blockchain, RPA, cloud, IoT and cybersecurity.",
      html: `
        <p>Modern MIS systems are evolving because of new technologies.</p>
        <h4>Important technologies</h4>
        <ol>
          <li><strong>Artificial Intelligence (AI):</strong> Automates analysis and supports intelligent decisions.</li>
          <li><strong>Blockchain:</strong> Provides secure and transparent transaction records.</li>
          <li><strong>Robotic Process Automation (RPA):</strong> Automates repetitive business tasks.</li>
          <li><strong>Cloud Computing:</strong> Provides computing resources and software over the internet.</li>
          <li><strong>Internet of Things (IoT):</strong> Connects physical devices to collect and exchange data.</li>
          <li><strong>Cybersecurity:</strong> Protects systems and information from cyberattacks.</li>
        </ol>
        <div class="example"><b>Example:</b> A company uses IoT sensors to monitor product temperature during transportation.</div>
      `,
      questions: [
        Q(26, "Which technology helps automate repetitive business tasks?", ["RPA", "HTML", "CSS", "SQL"], "A", "RPA automates repetitive tasks."),
        Q(27, "Which technology provides scalable, on-demand computing resources?", ["Blockchain", "Cloud Computing", "IoT", "CRM"], "B", "Cloud computing provides on-demand computing services."),
        Q(28, "What is the main purpose of blockchain?", ["Designing websites", "Securing and recording transactions", "Creating advertisements", "Managing employee salaries"], "B", "Blockchain maintains secure and transparent transaction records."),
        Q(29, "What does IoT stand for?", ["Internet of Technology", "Internet of Things", "Information of Technology", "Integration of Things"], "B", "IoT means Internet of Things."),
        Q(30, "Why is cybersecurity important in modern MIS?", ["To increase screen brightness", "To protect data and information systems", "To reduce internet speed", "To remove databases"], "B", "Cybersecurity protects systems and sensitive information.")
      ]
    },

    /* ---------------------------------------------------- 8 */
    {
      id: "whats-new",
      num: 8,
      icon: "✨",
      title: "What's New in MIS?",
      short: "IT innovations, new business models, e-commerce and management changes.",
      html: `
        <p>MIS is changing because of new technologies, business models, and management practices.</p>
        <h4>Major changes</h4>
        <ul>
          <li><strong>IT Innovations:</strong> Cloud computing, mobile computing, Big Data, AI, and ML.</li>
          <li><strong>New Business Models:</strong> Platform businesses, subscription services, and on-demand services.</li>
          <li><strong>E-commerce Expansion:</strong> Mobile commerce, social commerce, and digital marketplaces.</li>
          <li><strong>Management Changes:</strong> Remote teams and data-driven decisions.</li>
          <li><strong>Organizational Changes:</strong> Flatter hierarchies and flexible structures.</li>
        </ul>
        <h4>Examples</h4>
        <div class="chips">
          <span><b>Netflix</b> Subscription-based business model</span>
          <span><b>Uber</b> On-demand service</span>
          <span><b>Amazon</b> E-commerce platform</span>
          <span><b>Facebook Marketplace</b> Social commerce</span>
        </div>
      `,
      questions: [
        Q(31, "Which of the following is an IT innovation?", ["Cloud Computing", "Big Data", "AI/ML", "All of the above"], "D", "Cloud, Big Data, and AI/ML are IT innovations."),
        Q(32, "Netflix mainly represents which business model?", ["Subscription", "Traditional manufacturing", "Physical retail only", "Wholesale"], "A", "Netflix uses a subscription-based model."),
        Q(33, "What is mobile commerce?", ["Buying and selling using mobile devices", "Selling only computers", "Manufacturing mobile phones", "Managing mobile networks"], "A", "Mobile commerce means buying and selling through mobile devices."),
        Q(34, "What is data-driven decision-making?", ["Making decisions based only on guessing", "Making decisions using data and analysis", "Avoiding information", "Making decisions randomly"], "B", "Decisions are made using analyzed data."),
        Q(35, "Which organizational structure is becoming more common in modern firms?", ["More rigid hierarchy", "Flatter and more flexible structure", "No communication", "Fully manual structure"], "B", "Modern organizations increasingly use flexible structures.")
      ]
    },

    /* ---------------------------------------------------- 9 */
    {
      id: "challenges",
      num: 9,
      icon: "⚠️",
      title: "Challenges of MIS",
      short: "Globalization, COVID-19, cybersecurity, privacy, talent and fast change.",
      html: `
        <p>Modern organizations face several challenges when implementing and using information systems.</p>
        <ol>
          <li><strong>Globalization:</strong> Managing business activities across different countries.</li>
          <li><strong>COVID-19 Pandemic:</strong> Increased remote work, e-commerce, and digital services.</li>
          <li><strong>Cybersecurity Threats:</strong> Protecting systems from hackers and attacks.</li>
          <li><strong>Data Privacy:</strong> Protecting personal and organizational data.</li>
          <li><strong>Talent Shortage:</strong> Lack of skilled IT professionals.</li>
          <li><strong>Rapid Technology Changes:</strong> Keeping systems updated with new technologies.</li>
        </ol>
      `,
      questions: [
        Q(36, "What does globalization mean in MIS?", ["Operating only in one city", "Coordinating business across worldwide markets", "Avoiding international business", "Removing technology"], "B", "Globalization involves worldwide business operations."),
        Q(37, "Which event accelerated remote work and e-commerce?", ["Industrial Revolution", "COVID-19 Pandemic", "World War I", "Dot-com bubble"], "B", "COVID-19 accelerated remote work and digital services."),
        Q(38, "Which is a major cybersecurity challenge?", ["Data theft", "Hacking", "Unauthorized access", "All of the above"], "D", "All are common cybersecurity threats."),
        Q(39, "What is a talent shortage in IT?", ["Too many computers", "Lack of skilled IT professionals", "Lack of customers", "Lack of software"], "B", "Talent shortage means insufficient skilled workers.")
      ]
    },

    /* ---------------------------------------------------- 10 */
    {
      id: "digital-firm",
      num: 10,
      icon: "🌐",
      title: "The Emerging Digital Firm",
      short: "Digitally enabled relationships, processes and assets; time & place shifting.",
      html: `
        <p>A <strong>Digital Firm</strong> is an organization where important business relationships, processes, and assets are digitally enabled and managed.</p>
        <h4>Four important characteristics</h4>
        <div class="cards2">
          <div><b>1. Significant Business Relationships</b><p>Relationships with customers, suppliers, and employees are digitally managed.</p></div>
          <div><b>2. Core Business Processes</b><p>Business activities are performed through digital networks.</p></div>
          <div><b>3. Key Corporate Assets</b><p>Intellectual property, financial assets, and human assets are managed digitally.</p></div>
          <div><b>4. Flexibility</b>
            <p><strong>Time Shifting:</strong> Business can operate continuously, beyond traditional working hours.</p>
            <p><strong>Place Shifting:</strong> Employees can work from anywhere in the world.</p></div>
        </div>
        <div class="callout"><b>Business Process:</b> A set of logically related tasks and activities performed to achieve a specific business result.</div>
        <div class="example"><b>Example:</b> An online shopping process includes product selection, ordering, payment, and delivery.</div>
      `,
      questions: [
        Q(40, "What is a digital firm?", ["A company that uses only paper records", "A company where major business processes and relationships are digitally enabled", "A company without employees", "A company that does not use technology"], "B", "A digital firm uses digital networks for important business activities."),
        Q(41, "What is time shifting?", ["Working only during office hours", "Conducting business beyond traditional working hours", "Changing the company name", "Moving the office"], "B", "Time shifting allows business activities beyond traditional hours."),
        Q(42, "What is place shifting?", ["Working from different locations", "Working only from headquarters", "Changing working hours", "Changing employee salaries"], "A", "Place shifting allows work from different locations."),
        Q(43, "Which is an example of a core business process?", ["Ordering and delivering products", "Painting office walls", "Buying personal furniture", "Decorating employee desks"], "A", "Ordering and delivery are important business processes."),
        Q(44, "Business processes are designed to produce what?", ["Specific business results", "Random activities", "Personal entertainment", "Unnecessary paperwork"], "A", "Business processes aim to achieve specific business results.")
      ]
    },

    /* ---------------------------------------------------- 11 */
    {
      id: "strategic-objectives",
      num: 11,
      icon: "🎯",
      title: "Strategic Business Objectives of Information Systems",
      short: "The six objectives: operational excellence, new products, intimacy, decisions, advantage, survival.",
      html: `
        <p>Information systems help organizations achieve <strong>six</strong> major strategic business objectives.</p>
        <div class="obj-list">
          <div><span class="n">1</span><div><b>Operational Excellence</b><p>Improve efficiency and productivity to increase profitability.</p><small>Example: Walmart's inventory replenishment system.</small></div></div>
          <div><span class="n">2</span><div><b>New Products, Services, and Business Models</b><p>Use technology to introduce new products and ways of doing business.</p><small>Example: Apple's iTunes and App Store ecosystem.</small></div></div>
          <div><span class="n">3</span><div><b>Customer and Supplier Intimacy</b><p>Build strong relationships with customers and suppliers.</p><small>Example: Customer loyalty programs and supplier integration.</small></div></div>
          <div><span class="n">4</span><div><b>Improved Decision Making</b><p>Provide accurate and real-time information to managers.</p></div></div>
          <div><span class="n">5</span><div><b>Competitive Advantage</b><p>Perform better than competitors through lower prices, better products, or improved services.</p></div></div>
          <div><span class="n">6</span><div><b>Survival</b><p>Use information systems because they are necessary to operate in a particular industry or comply with legal requirements.</p></div></div>
        </div>
        <div class="callout"><b>Business Model:</b> Describes how a company produces, delivers, and sells products or services to create wealth.</div>
      `,
      questions: [
        Q(45, "How many strategic business objectives of IS are mentioned in the chapter?", ["3", "4", "5", "6"], "D", "There are six strategic objectives."),
        Q(46, "Which objective focuses on improving efficiency and profitability?", ["Survival", "Operational Excellence", "Customer Intimacy", "Competitive Advantage"], "B", "Operational excellence improves efficiency and profitability."),
        Q(47, "Apple's iTunes/App Store ecosystem is an example of which objective?", ["New Products, Services, and Business Models", "Survival", "Operational Excellence", "Supplier Intimacy"], "A", "Apple's ecosystem represents new products and business models."),
        Q(48, "Building customer loyalty is related to which objective?", ["Improved Decision Making", "Customer and Supplier Intimacy", "Survival", "Operational Excellence"], "B", "Strong relationships create customer loyalty."),
        Q(49, "Providing accurate real-time information to managers improves what?", ["Decision Making", "Employee entertainment", "Hardware performance", "Office decoration"], "A", "Real-time information improves management decisions."),
        Q(50, "Offering better products at lower prices than competitors represents:", ["Survival", "Customer Intimacy", "Competitive Advantage", "Data Processing"], "C", "Better performance than competitors creates competitive advantage."),
        Q(51, "Using IS because competitors and industry requirements demand it is related to:", ["Survival", "Marketing", "Production", "Customer Intimacy"], "A", "IS can be essential for business survival."),
        Q(52, "What does a business model describe?", ["How a company produces, delivers, and sells value", "How employees take holidays", "How computers are manufactured", "How databases are normalized"], "A", "A business model explains how a company creates and delivers value.")
      ]
    },

    /* ---------------------------------------------------- 12 */
    {
      id: "is-basics",
      num: 12,
      icon: "🔄",
      title: "Information System – Basic Concepts",
      short: "IS vs IT, data vs information, and Input → Processing → Output → Feedback.",
      html: `
        <p><strong>Information System (IS)</strong> is a set of interrelated components that collect, process, store, and distribute information to support decision-making and control in an organization.</p>
        <h4>IT vs IS</h4>
        <table class="tbl">
          <thead><tr><th>Information Technology (IT)</th><th>Information System (IS)</th></tr></thead>
          <tbody>
            <tr><td>Hardware and software tools</td><td>Combination of technology, people, and processes</td></tr>
            <tr><td>Technical focus</td><td>Broader organizational focus</td></tr>
            <tr><td>Example: Computer, software</td><td>Example: Student management system</td></tr>
          </tbody>
        </table>
        <h4>Data vs Information</h4>
        <ul>
          <li><strong>Data:</strong> Raw, unorganized facts.</li>
          <li><strong>Information:</strong> Processed data that has meaning.</li>
        </ul>
        <div class="example"><b>Example:</b> Data: 70, 80, 90. &nbsp;→&nbsp; Information: The average marks of a student are 80.</div>
        <h4>Activities of an Information System</h4>
        <div class="flow">
          <div><b>INPUT</b><span>Collecting raw data</span></div>
          <i>→</i>
          <div><b>PROCESSING</b><span>Converting data into meaningful information</span></div>
          <i>→</i>
          <div><b>OUTPUT</b><span>Producing useful information</span></div>
          <i>→</i>
          <div class="fb"><b>FEEDBACK</b><span>Evaluating and improving input or processing</span></div>
        </div>
      `,
      questions: [
        Q(53, "What is an Information System?", ["Only a computer", "A set of interrelated components that collect, process, store, and distribute information", "Only a database", "Only an internet connection"], "B", "IS combines components to manage information."),
        Q(54, "Which is broader: IT or IS?", ["IT", "IS", "Both are exactly the same", "Neither"], "B", "IS includes IT, people, and processes."),
        Q(55, "What is raw, unorganized facts called?", ["Information", "Knowledge", "Data", "Feedback"], "C", "Data means raw facts."),
        Q(56, "What is processed data called?", ["Information", "Hardware", "Input", "Network"], "A", "Information is processed, meaningful data."),
        Q(57, "Which is the correct sequence of basic IS activities?", ["Output → Input → Processing", "Input → Processing → Output", "Processing → Output → Input", "Feedback → Output → Input"], "B", "The basic sequence is Input → Processing → Output."),
        Q(58, "What is the purpose of feedback in an Information System?", ["To delete information", "To evaluate and improve input or processing", "To stop the system", "To remove users"], "B", "Feedback helps evaluate and improve the system."),
        Q(59, "Which of the following is an example of data?", ["Student's average GPA is 3.50", "Individual marks: 70, 80, 90", "A performance report", "A decision based on results"], "B", "Individual marks are raw data.")
      ]
    },

    /* ---------------------------------------------------- 13 */
    {
      id: "dimensions",
      num: 13,
      icon: "📐",
      title: "Dimensions of Information Systems",
      short: "Organization, Management, Information Technology — and IS literacy.",
      html: `
        <p>Information Systems have <strong>three</strong> major dimensions.</p>
        <div class="cards3">
          <div><b>1. Organization</b><ul><li>Organizational structure</li><li>Culture</li><li>Politics</li><li>Business processes</li></ul></div>
          <div><b>2. Management</b><ul><li>Setting organizational strategy</li><li>Allocating resources</li><li>Making decisions about IT investments</li><li>Managing organizational changes</li></ul></div>
          <div><b>3. Information Technology</b><ul><li>Hardware</li><li>Software</li><li>Data management</li><li>Networking</li></ul></div>
        </div>
        <h4>IS Literacy vs Computer Literacy</h4>
        <table class="tbl">
          <thead><tr><th>IS Literacy</th><th>Computer Literacy</th></tr></thead>
          <tbody>
            <tr><td>Broader understanding of information systems</td><td>Understanding how to use computers</td></tr>
            <tr><td>Includes technology, management, and organizational aspects</td><td>Focuses more on technical and computer skills</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Important:</b> IS literacy is broader than computer literacy.</div>
      `,
      questions: [
        Q(60, "How many major dimensions of Information Systems are there?", ["2", "3", "4", "5"], "B", "IS has three major dimensions."),
        Q(61, "Which of the following is a dimension of IS?", ["Organization", "Management", "Information Technology", "All of the above"], "D", "Organization, management, and IT are the three dimensions."),
        Q(62, "Which dimension includes organizational culture and politics?", ["Management", "Organization", "Technology", "Networking"], "B", "Culture and politics are organizational elements."),
        Q(63, "Which dimension is responsible for setting strategy and allocating resources?", ["Organization", "Management", "Technology", "Hardware"], "B", "Management handles strategy and resources."),
        Q(64, "Which of the following belongs to the IT dimension?", ["Hardware", "Software", "Networking", "All of the above"], "D", "Hardware, software, and networking belong to IT."),
        Q(65, "Which is broader?", ["Computer Literacy", "IS Literacy", "Both are identical", "Neither"], "B", "IS literacy includes technical and organizational knowledge.")
      ]
    },

    /* ---------------------------------------------------- 14 */
    {
      id: "organizations",
      num: 14,
      icon: "🏛️",
      title: "Organizations",
      short: "People in organizations, business functions, culture and politics.",
      html: `
        <p>Organizations are an important dimension of Information Systems. There are three major areas to understand.</p>
        <h4>A. People in Organizations</h4>
        <table class="tbl">
          <thead><tr><th>Category</th><th>Responsibility</th></tr></thead>
          <tbody>
            <tr><td>Senior Management</td><td>Makes long-term strategic decisions</td></tr>
            <tr><td>Middle Management</td><td>Implements senior management plans</td></tr>
            <tr><td>Operational Management</td><td>Monitors daily business activities</td></tr>
            <tr><td>Knowledge Workers</td><td>Create knowledge, e.g., engineers and scientists</td></tr>
            <tr><td>Data Workers</td><td>Process paperwork and organizational data</td></tr>
            <tr><td>Production/Service Workers</td><td>Produce goods or deliver services</td></tr>
          </tbody>
        </table>
        <h4>B. Business Functions</h4>
        <ol>
          <li><strong>Sales and Marketing:</strong> Identifying customers and promoting products.</li>
          <li><strong>Manufacturing and Production:</strong> Producing goods and services.</li>
          <li><strong>Finance and Accounting:</strong> Managing financial assets and records.</li>
          <li><strong>Human Resources:</strong> Hiring, developing, and maintaining employees.</li>
        </ol>
        <h4>C. Culture and Politics</h4>
        <ul>
          <li><strong>Culture:</strong> Shared values and assumptions of an organization.</li>
          <li><strong>Politics:</strong> Different viewpoints and conflicts over resources.</li>
          <li>Political resistance may make organizational changes difficult.</li>
        </ul>
      `,
      questions: [
        Q(66, "Who makes long-term strategic decisions in an organization?", ["Operational Management", "Senior Management", "Data Workers", "Production Workers"], "B", "Senior management makes strategic decisions."),
        Q(67, "Who implements the plans of senior management?", ["Middle Management", "Customers", "Data Workers", "Service Workers"], "A", "Middle management implements senior management plans."),
        Q(68, "Who monitors daily business activities?", ["Senior Management", "Middle Management", "Operational Management", "Knowledge Workers"], "C", "Operational management handles daily activities."),
        Q(69, "Engineers and scientists are examples of:", ["Data Workers", "Knowledge Workers", "Production Workers", "Operational Managers"], "B", "Engineers and scientists create organizational knowledge."),
        Q(70, "Secretaries and clerks are examples of:", ["Knowledge Workers", "Senior Managers", "Data Workers", "Production Workers"], "C", "Clerks and secretaries process organizational data."),
        Q(71, "Which business function is responsible for attracting and maintaining employees?", ["Finance", "Marketing", "Human Resources", "Manufacturing"], "C", "HR manages employees."),
        Q(72, "Which business function manages financial assets and records?", ["Finance and Accounting", "Human Resources", "Sales and Marketing", "Production"], "A", "Finance and accounting manage financial records."),
        Q(73, "What is organizational culture?", ["Computer hardware", "Shared values and assumptions within an organization", "Employee salary", "Software development"], "B", "Culture means shared values and assumptions."),
        Q(74, "What does organizational politics involve?", ["Only political elections", "Different viewpoints and conflicts over resources", "Only marketing activities", "Only financial accounting"], "B", "Politics involves conflicts and different viewpoints."),
        Q(75, "Which group primarily produces goods or delivers services?", ["Knowledge Workers", "Data Workers", "Production or Service Workers", "Senior Management"], "C", "Production/service workers produce goods and deliver services.")
      ]
    },

    /* ---------------------------------------------------- 15 */
    {
      id: "complementary-assets",
      num: 15,
      icon: "🧱",
      title: "Complementary Assets",
      short: "Organizational, managerial and social assets needed to get value from technology.",
      html: `
        <p><strong>Complementary Assets</strong> are additional assets required to get value from a primary investment.</p>
        <div class="callout">In simple words: buying technology alone is not enough. An organization also needs proper management, organizational support, and social infrastructure to get maximum benefits.</div>
        <h4>There are three types</h4>
        <div class="cards3">
          <div><b>1. Organizational Assets</b><ul><li>Supportive organizational culture</li><li>Appropriate business model</li><li>Efficient business processes</li></ul></div>
          <div><b>2. Managerial Assets</b><ul><li>Strong senior management support</li><li>Incentives for innovation</li><li>Teamwork and collaboration</li></ul></div>
          <div><b>3. Social Assets</b><ul><li>Internet infrastructure</li><li>Telecommunications infrastructure</li><li>Technology standards</li><li>Government and industry regulations</li></ul></div>
        </div>
        <div class="example"><b>Example:</b> A company buys an advanced ERP system. To get maximum benefit, it also needs trained employees, management support, efficient business processes, and reliable internet.</div>
      `,
      questions: [
        Q(76, "What are complementary assets?", ["Assets used only for decoration", "Additional assets required to derive value from a primary investment", "Only computer hardware", "Only financial records"], "B", "Complementary assets help organizations get value from investments."),
        Q(77, "How many major types of complementary assets are mentioned?", ["2", "3", "4", "5"], "B", "There are three types."),
        Q(78, "Which of the following is an organizational asset?", ["Supportive organizational culture", "Government regulations", "Internet infrastructure", "Telecommunications infrastructure"], "A", "Organizational culture is an organizational asset."),
        Q(79, "Strong senior management support is an example of:", ["Social Asset", "Organizational Asset", "Managerial Asset", "Technical Asset"], "C", "Management support is a managerial asset."),
        Q(80, "Internet and telecommunications infrastructure are examples of:", ["Managerial Assets", "Social Assets", "Organizational Assets", "Financial Assets"], "B", "Internet and telecom infrastructure are social assets."),
        Q(81, "Teamwork and collaboration belong to which category?", ["Managerial Assets", "Social Assets", "Organizational Assets", "Hardware Assets"], "A", "Teamwork and collaboration are managerial assets."),
        Q(82, "Government and industry regulations are examples of:", ["Organizational Assets", "Managerial Assets", "Social Assets", "Software Assets"], "C", "Government and industry regulations are social assets."),
        Q(83, "An efficient business process is an example of:", ["Social Asset", "Organizational Asset", "Managerial Asset", "Hardware Asset"], "B", "Efficient business processes are organizational assets.")
      ]
    }
  ];

  /* ------------------------------------------------------------
     Final Revision — Important MCQ facts (20 items)
     ------------------------------------------------------------ */
  const revision = [
    { term: "MIS", fact: "Management + Organization + Technology" },
    { term: "ETL", fact: "Extract, Transform, Load" },
    { term: "ROI", fact: "Return on Investment" },
    { term: "ERP", fact: "Integrates core business processes" },
    { term: "CRM", fact: "Manages customer relationships" },
    { term: "SRM", fact: "Manages supplier relationships" },
    { term: "SCM", fact: "Manages supply chain" },
    { term: "BI", fact: "Reports, dashboards, analytics" },
    { term: "RPA", fact: "Automates repetitive tasks" },
    { term: "IoT", fact: "Internet of Things" },
    { term: "Digital Firm", fact: "Digitally enabled business" },
    { term: "Time Shifting", fact: "Business beyond traditional working hours" },
    { term: "Place Shifting", fact: "Working from anywhere" },
    { term: "Business Model", fact: "Produces, delivers, and sells value" },
    { term: "IS Activities", fact: "Input → Processing → Output → Feedback" },
    { term: "Data", fact: "Raw facts" },
    { term: "Information", fact: "Processed meaningful data" },
    { term: "IS Dimensions", fact: "Organization, Management, IT" },
    { term: "IS Literacy", fact: "Broader than Computer Literacy" },
    { term: "Complementary Assets", fact: "Organizational, Managerial, Social" }
  ];

  /* ------------------------------------------------------------
     Interactive mini-test (10 questions)
     ------------------------------------------------------------ */
  const M = (i, q, o, a, e) => ({ n: "M" + i, q, options: o, answer: "ABCD".indexOf(a), explain: e });
  const mini = [
    M(1, "Which three areas intersect in MIS?", ["Finance, HR, Marketing", "Management, Organization, Technology", "Hardware, Software, Network", "Data, Knowledge, Internet"], "B", "MIS connects management, organization, and technology."),
    M(2, "What does ETL stand for?", ["Extract, Transform, Load", "Enter, Transfer, Link", "Execute, Test, Learn", "Extract, Test, Launch"], "A", "ETL means Extract, Transform, Load."),
    M(3, "Which system manages customer relationships?", ["ERP", "SCM", "CRM", "SRM"], "C", "CRM manages customer information and relationships."),
    M(4, "What is time shifting?", ["Working from anywhere", "Business beyond traditional working hours", "Changing business location", "Changing employee roles"], "B", "Time shifting allows business activities beyond traditional hours (working from anywhere is place shifting)."),
    M(5, "Which is a managerial asset?", ["Internet infrastructure", "Government regulations", "Strong management support", "Business model"], "C", "Strong senior management support is a managerial asset."),
    M(6, "What is raw data called?", ["Information", "Knowledge", "Feedback", "Data"], "D", "Data means raw, unorganized facts."),
    M(7, "Which system integrates HR, finance, and manufacturing?", ["CRM", "ERP", "BI", "SRM"], "B", "ERP integrates different business functions."),
    M(8, "Who makes long-term strategic decisions?", ["Data workers", "Operational management", "Senior management", "Production workers"], "C", "Senior management makes long-term strategic decisions."),
    M(9, "How many strategic business objectives of IS are listed?", ["3", "4", "5", "6"], "D", "There are six strategic objectives."),
    M(10, "Internet infrastructure is which type of complementary asset?", ["Social", "Managerial", "Organizational", "Technical"], "A", "Internet and telecommunications infrastructure are social assets.")
  ];

  (window.MIS_CHAPTERS = window.MIS_CHAPTERS || {}).ch1 = {
    title: "MIS · Chapter 1",
    subtitle: "Management Information Systems — topic-wise explanation, MCQs, answers and short explanations",
    topics,
    revision,
    mini,
    examTip: "Give special attention to the six strategic business objectives, five popular MIS systems, three IS dimensions, organizational management levels, and three types of complementary assets. These are particularly suitable for MCQ questions."
  };
})();
