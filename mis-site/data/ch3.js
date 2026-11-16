/* =========================================================
   MIS Chapter 3 — DATA
   Organizations, Management, and Information Systems
   ========================================================= */
(function () {
  const Q = (n, q, o, a, e) => ({ n, q, options: o, answer: "ABCD".indexOf(a), explain: e });

  const topics = [
    /* 1 */
    {
      id: "what-is-org", num: 1, icon: "🏢",
      title: "What is an Organization?",
      short: "Technical vs behavioral definitions of an organization.",
      html: `
        <p>There are two important definitions of an organization.</p>
        <div class="compare">
          <div><b>1. Technical Definition</b>
            <p>An organization is a stable, formal social structure that takes resources from the environment and processes them to produce outputs.</p>
            <ul><li>Collects resources such as money, people, and materials.</li><li>Processes these resources.</li><li>Produces goods or services.</li></ul>
            <small>Example: A manufacturing company collects raw materials and produces finished products.</small></div>
          <div><b>2. Behavioral Definition</b>
            <p>An organization is a collection of rights, privileges, obligations, and responsibilities that are balanced over time through conflict and conflict resolution.</p>
            <ul><li>Employees have different rights and responsibilities.</li><li>Managers have authority over employees.</li><li>People may have different opinions.</li><li>Conflicts are resolved to maintain organizational balance.</li></ul></div>
        </div>
        <h4>Important points</h4>
        <ul>
          <li>Organizations develop customary ways of working.</li>
          <li>These working habits become difficult to change.</li>
          <li>Relationships between superiors and subordinates define authority.</li>
          <li>Actual work practices are influenced by organizational norms, not only by the organizational chart.</li>
        </ul>
        <h4>Difference between the two definitions</h4>
        <table class="tbl">
          <thead><tr><th>Technical Definition</th><th>Behavioral Definition</th></tr></thead>
          <tbody>
            <tr><td>Focuses on inputs and outputs</td><td>Focuses on people and relationships</td></tr>
            <tr><td>Organization as a formal structure</td><td>Organization as a collection of rights and responsibilities</td></tr>
            <tr><td>Focuses on resources and production</td><td>Focuses on authority, conflict, and balance</td></tr>
          </tbody>
        </table>`,
      questions: [
        Q(1, "According to the technical definition, an organization is:", ["A collection of computers", "A stable, formal social structure", "A group of customers", "A software system"], "B", "The technical definition focuses on a formal structure that takes resources and produces outputs."),
        Q(2, "Which definition focuses on rights, privileges, obligations, and responsibilities?", ["Technical definition", "Behavioral definition", "Economic definition", "Technological definition"], "B", "The behavioral definition focuses on people, relationships, and responsibilities.")
      ]
    },

    /* 2 */
    {
      id: "org-features", num: 2, icon: "🧱",
      title: "Features of Organizations",
      short: "Routines/SOPs, politics, culture, environment, structure, business processes.",
      html: `
        <p>Organizations have six important features.</p>
        <div class="obj-list">
          <div><span class="n">1</span><div><b>Routines and Business Processes</b><p>Routines are regular and repeated activities. <strong>SOPs (Standard Operating Procedures)</strong> are precise rules and procedures for handling expected situations. Business processes are collections of related routines.</p><small>Example: A company's regular process for hiring employees.</small></div></div>
          <div><span class="n">2</span><div><b>Organizational Politics</b><p>Different people have different opinions about resources, rewards, and policies. These differences may create resistance to organizational changes.</p><small>Example: Employees may oppose a new system because they fear losing their positions.</small></div></div>
          <div><span class="n">3</span><div><b>Organizational Culture</b><p>The fundamental assumptions and shared beliefs of an organization. It defines acceptable goals, products, and behavior.</p><small>Example: A company culture that encourages teamwork and innovation.</small></div></div>
          <div><span class="n">4</span><div><b>Organizational Environment</b><p>Organizations and their environments have a reciprocal relationship: organizations receive resources from the environment and also provide goods and services to it.</p><small>Example: A company purchases raw materials from suppliers and sells products to customers.</small></div></div>
          <div><span class="n">5</span><div><b>Organizational Structure</b><p>Defines the division of labor, establishes hierarchy and authority, and defines formal reporting relationships.</p><small>Example: Employees report to department managers, who report to senior managers.</small></div></div>
          <div><span class="n">6</span><div><b>Business Processes</b><p>Business processes are collections of routines. A business firm is a collection of business processes.</p></div></div>
        </div>
        <div class="callout"><b>Remember:</b> SOPs, organizational politics, organizational culture, environment, and structure are important organizational features.</div>`,
      questions: [
        Q(3, "SOP stands for:", ["Standard Operating Procedures", "System Operating Program", "Software Output Process", "Standard Organization Policy"], "A", "SOPs are precise rules and procedures for expected situations."),
        Q(4, "Which organizational feature refers to shared assumptions and beliefs?", ["Organizational politics", "Organizational culture", "Organizational environment", "Organizational structure"], "B", "Organizational culture defines shared beliefs and acceptable behavior."),
        Q(5, "Differing viewpoints about resources, rewards, and policies are related to:", ["Organizational culture", "Organizational politics", "Organizational structure", "Business environment"], "B", "Different interests and viewpoints create organizational politics."),
        Q(6, "A company receives resources from and supplies products to its:", ["Employees only", "Environment", "Competitors only", "Managers only"], "B", "Organizations and their environments have a reciprocal relationship."),
        Q(7, "A business firm is a collection of:", ["Computers", "Business processes", "Customers", "Software only"], "B", "Business processes consist of collections of routines.")
      ]
    },

    /* 3 */
    {
      id: "disruptive-tech", num: 3, icon: "💥",
      title: "Disruptive Technologies – Winners and Losers",
      short: "Technologies that make old business models obsolete.",
      html: `
        <div class="callout"><b>Definition:</b> A disruptive technology is a technology that changes an existing market or business model and may make traditional products or services obsolete. It does not simply improve an existing product — it can completely change how a business operates.</div>
        <h4>Examples from the slides</h4>
        <table class="tbl">
          <thead><tr><th>Technology</th><th>Description</th><th>Winners</th><th>Losers</th></tr></thead>
          <tbody>
            <tr><td>Microprocessor chips (1971)</td><td>Millions of transistors on a silicon chip</td><td>Intel, Texas Instruments</td><td>Traditional transistor firms such as GE</td></tr>
            <tr><td>Personal computers (1975)</td><td>Small, inexpensive desktop computers</td><td>HP, Apple, Intel</td><td>Traditional mainframe and minicomputer businesses</td></tr>
            <tr><td>World Wide Web (1989)</td><td>Global database of digital files and pages</td><td>Online content and news owners</td><td>Traditional publishers and broadcast TV</td></tr>
            <tr><td>Internet music, video and TV services (1998)</td><td>Online downloadable media</td><td>Internet platforms and telecom companies</td><td>Physical retailers such as Tower Records and Blockbuster</td></tr>
            <tr><td>Software as a web service</td><td>Remote access to online software</td><td>Salesforce.com</td><td>Traditional boxed software businesses facing pressure</td></tr>
          </tbody>
        </table>
        <h4>Important concepts</h4>
        <ul>
          <li><strong>Winners:</strong> Companies that benefit from new technology.</li>
          <li><strong>Losers:</strong> Companies that lose business because of new technology.</li>
          <li><strong>Sustaining disruption:</strong> Existing firms adapt to new technology and continue competing.</li>
          <li><strong>Destructive disruption:</strong> Firms fail to respond and may lose their market position.</li>
        </ul>
        <div class="example"><b>Example:</b> Online streaming services changed the traditional video rental business. Companies that adapted to digital services had opportunities, while traditional rental businesses faced major challenges.</div>
        <div class="callout"><b>Remember:</b> Disruptive technologies can make existing business models obsolete.</div>`,
      questions: [
        Q(8, "What is a disruptive technology?", ["Technology that only improves an existing product", "Technology that can make an existing business model obsolete", "Technology used only by managers", "Technology that reduces internet speed"], "B", "Disruptive technology can fundamentally change an industry or business model."),
        Q(9, "Microprocessor chips were introduced in:", ["1971", "1975", "1989", "1998"], "A", "The slides identify 1971 as the year of microprocessor chips."),
        Q(10, "Personal computers appeared in:", ["1971", "1975", "1989", "1998"], "B", "The slide lists personal computers in 1975."),
        Q(11, "The World Wide Web was introduced in:", ["1971", "1975", "1989", "1998"], "C", "The slide identifies 1989 as the year of the World Wide Web."),
        Q(12, "Which company is an example of an online software service winner?", ["Salesforce.com", "Tower Records", "Blockbuster", "GE"], "A", "Salesforce.com is an example of a company benefiting from software as a web service."),
        Q(13, "A company that adapts successfully to disruptive technology experiences:", ["Destructive disruption", "Sustaining adaptation", "Organizational politics", "Market failure"], "B", "Existing firms can benefit when they adapt quickly to new technology.")
      ]
    },

    /* 4 */
    {
      id: "org-structures", num: 4, icon: "🏗️",
      title: "Organizational Structures",
      short: "Entrepreneurial, machine bureaucracy, divisionalized, professional, adhocracy.",
      html: `
        <p>Organizations have different structures depending on their size, environment, and business activities. There are five major structures.</p>
        <div class="cards2">
          <div><b>1. Entrepreneurial Structure</b><ul><li>Used by young and small businesses.</li><li>Simple structure managed by an entrepreneur or single CEO.</li><li>Suitable for fast-changing environments.</li></ul><small>Example: A small startup business.</small></div>
          <div><b>2. Machine Bureaucracy</b><ul><li>Used by large organizations producing standard products.</li><li>Centralized management and decision-making.</li><li>Suitable for slowly changing environments.</li></ul><small>Example: A midsize manufacturing firm.</small></div>
          <div><b>3. Divisionalized Bureaucracy</b><ul><li>Consists of multiple machine bureaucracies.</li><li>Each division produces a different product or service.</li><li>All divisions controlled by central headquarters.</li></ul><small>Example: General Motors.</small></div>
          <div><b>4. Professional Bureaucracy</b><ul><li>Based on professional knowledge and expertise.</li><li>Centralized authority is relatively weak.</li><li>Department heads have significant control.</li></ul><small>Examples: Law firms, hospitals, and school systems.</small></div>
          <div><b>5. Adhocracy</b><ul><li>Used in rapidly changing environments.</li><li>Multidisciplinary teams of specialists on temporary projects.</li><li>Central management is relatively weak.</li></ul><small>Example: Consulting firms such as Rand Corporation.</small></div>
        </div>
        <h4>Comparison table</h4>
        <table class="tbl">
          <thead><tr><th>Structure</th><th>Main Feature</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>Entrepreneurial</td><td>Small, simple, entrepreneur-led</td><td>Startup</td></tr>
            <tr><td>Machine Bureaucracy</td><td>Centralized, standard processes</td><td>Manufacturing firm</td></tr>
            <tr><td>Divisionalized Bureaucracy</td><td>Multiple divisions</td><td>General Motors</td></tr>
            <tr><td>Professional Bureaucracy</td><td>Professional expertise</td><td>Hospital</td></tr>
            <tr><td>Adhocracy</td><td>Temporary specialist teams</td><td>Consulting firm</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Important exam point:</b> Entrepreneurial structures and adhocracies adapt fastest to new information systems. Machine bureaucracies are generally slower to adapt because of centralized decision-making and established procedures.</div>`,
      questions: [
        Q(14, "Which organizational structure is suitable for a young, small firm?", ["Machine bureaucracy", "Divisionalized bureaucracy", "Entrepreneurial structure", "Professional bureaucracy"], "C", "Entrepreneurial structures are simple and usually managed by one entrepreneur."),
        Q(15, "Which structure has centralized management and decision-making?", ["Adhocracy", "Machine bureaucracy", "Professional bureaucracy", "Entrepreneurial structure"], "B", "Machine bureaucracy is dominated by centralized management."),
        Q(16, "Which structure consists of multiple machine bureaucracies?", ["Professional bureaucracy", "Entrepreneurial structure", "Divisionalized bureaucracy", "Adhocracy"], "C", "Divisionalized bureaucracy combines multiple divisions under central headquarters."),
        Q(17, "Hospitals and law firms are examples of:", ["Machine bureaucracy", "Professional bureaucracy", "Entrepreneurial structure", "Adhocracy"], "B", "These organizations depend on professional expertise."),
        Q(18, "Which structure uses short-lived multidisciplinary teams?", ["Adhocracy", "Machine bureaucracy", "Divisionalized bureaucracy", "Professional bureaucracy"], "A", "Adhocracy uses specialist teams to respond to rapidly changing environments."),
        Q(19, "Which structures adapt fastest to new information systems?", ["Machine bureaucracy only", "Entrepreneurial structure and adhocracy", "Professional bureaucracy only", "Divisionalized bureaucracy only"], "B", "They have simpler or more flexible structures.")
      ]
    },

    /* 5 */
    {
      id: "is-impacts", num: 5, icon: "📉",
      title: "Impacts of Information Systems on Organizations",
      short: "Economic impact, flattening, postindustrial, resistance, the internet.",
      html: `
        <p>Information systems have several important impacts on organizations.</p>
        <div class="obj-list">
          <div><span class="n">1</span><div><b>Economic Impacts</b><p>IT reduces the cost of internal and external transactions, and can reduce the size of firms or reshape supply chains.</p><small>Example: Software manages procurement instead of handling everything manually.</small></div></div>
          <div><span class="n">2</span><div><b>IT Flattens Organizations</b><p>IT reduces the need for many management layers. Employees can access information directly, and decision-making authority moves toward lower levels.</p><small>Example: Employees access reports and make decisions without asking several managers.</small></div></div>
          <div><span class="n">3</span><div><b>Postindustrial Organizations</b><p>Authority depends more on knowledge and competence; formal position becomes less important; hierarchies become flatter.</p><small>Example: A skilled professional may have significant influence because of expertise.</small></div></div>
          <div><span class="n">4</span><div><b>Organizational Resistance to Change</b><p>Employees may resist new systems because they can affect jobs, authority, and reporting relationships. Implementation requires managing resistance.</p><small>Example: Employees may oppose automation because they fear losing their jobs.</small></div></div>
          <div><span class="n">5</span><div><b>Impact of the Internet</b><p>Makes information more accessible, improves storage and distribution, reduces traditional organizational boundaries, and weakens traditional hierarchical structures.</p></div></div>
        </div>
        <div class="callout"><b>Remember:</b> IT can reduce costs, flatten organizations, and improve information access, but it can also create resistance to change.</div>`,
      questions: [
        Q(20, "IT reduces which costs?", ["Only employee salaries", "Internal and external transaction costs", "Only production costs", "Only transportation costs"], "B", "IT reduces costs related to internal coordination and external transactions."),
        Q(21, "What does it mean when IT flattens an organization?", ["It increases management layers", "It reduces management layers", "It removes all employees", "It increases organizational size"], "B", "Employees can access information directly, reducing the need for management layers."),
        Q(22, "In postindustrial organizations, authority increasingly depends on:", ["Formal position only", "Knowledge and competence", "Employee age", "Organizational size"], "B", "Knowledge and professional expertise become more important."),
        Q(23, "Why do employees resist new information systems?", ["Systems always reduce internet speed", "Systems may affect jobs, power, and reporting relationships", "Systems cannot store information", "Systems increase product quality"], "B", "Changes in jobs and authority can create political opposition.")
      ]
    },

    /* 6 */
    {
      id: "porter-forces", num: 6, icon: "🥊",
      title: "Porter's Competitive Forces Model",
      short: "The five forces that shape a firm's competitive position.",
      html: `
        <div class="callout"><b>Definition:</b> Porter's Competitive Forces Model is used to analyze the competitive environment of a business and understand the forces that affect its profitability and competitive position.</div>
        <h4>Five major competitive forces</h4>
        <div class="chips"><span>Threat of New Entrants</span><span>Supplier Power</span><span>Customer Power</span><span>Rivalry Among Existing Competitors</span><span>Threat of Substitute Products or Services</span></div>
        <div class="cards2" style="margin-top:14px">
          <div><b>1. Traditional Competitors</b><p>Existing businesses compete with one another, introduce new products and services, and try to attract customers through lower prices and efficiency.</p><small>Example: Samsung and Apple compete in the smartphone market.</small></div>
          <div><b>2. New Market Entrants</b><p>New companies may enter an industry and increase competition. Some industries have low barriers to entry, others high.</p><small>Example: Starting a small online shop is easier than starting an aircraft manufacturing company.</small></div>
          <div><b>3. Substitute Products and Services</b><p>Substitutes satisfy similar customer needs. More substitutes reduce a firm's control over prices and may reduce profit margins.</p><small>Example: Tea and coffee can be substitutes.</small></div>
          <div><b>4. Customers' Bargaining Power</b><p>Powerful customers can demand lower prices, compare competing businesses, and switch to another company.</p><small>Example: Customers compare prices between online shopping platforms.</small></div>
          <div><b>5. Suppliers' Bargaining Power</b><p>A company with more supplier choices has greater control over price, quality, and delivery. Fewer suppliers can increase supplier bargaining power.</p><small>Example: A manufacturer depending on only one raw-material supplier has less bargaining power.</small></div>
        </div>
        <div class="callout"><b>Important:</b> Product differentiation can reduce the threat of substitutes by making a firm's products different from competitors' products.</div>`,
      questions: [
        Q(24, "How many major competitive forces are included in Porter's model?", ["Three", "Four", "Five", "Six"], "C", "The model contains five competitive forces."),
        Q(25, "Which of the following is NOT one of the five competitive forces?", ["Customers", "Suppliers", "Traditional competitors", "Employees"], "D", "Employees are not listed as one of the five competitive forces."),
        Q(26, "New companies entering an industry represent:", ["Threat of new entrants", "Supplier power", "Customer power", "Product differentiation"], "A", "New entrants increase competition in an industry."),
        Q(27, "More substitute products generally result in:", ["Greater pricing control", "Lower pressure on profit margins", "Less control over pricing", "No competition"], "C", "Customers can choose alternatives, reducing pricing power."),
        Q(28, "Powerful customers can:", ["Increase supplier prices", "Force companies to reduce prices", "Eliminate all competitors", "Stop new technologies"], "B", "Customers can compare companies and demand better prices."),
        Q(29, "A company with more supplier choices generally has:", ["Less bargaining power", "Greater bargaining power", "No control over quality", "More dependence on one supplier"], "B", "More supplier choices give the company more control over price, quality, and delivery.")
      ]
    },

    /* 7 */
    {
      id: "internet-forces", num: 7, icon: "🌐",
      title: "Impact of the Internet on Competitive Forces",
      short: "More competition, price transparency and easier market entry.",
      html: `
        <p>The internet changes the competitive environment in several ways.</p>
        <table class="tbl">
          <thead><tr><th>Competitive Force</th><th>Impact of the Internet</th></tr></thead>
          <tbody>
            <tr><td>Substitute Products</td><td>New ways of satisfying customer needs become possible</td></tr>
            <tr><td>Customers' Bargaining Power</td><td>Customers can compare global prices and products</td></tr>
            <tr><td>Suppliers' Bargaining Power</td><td>Online procurement can increase buyers' bargaining power</td></tr>
            <tr><td>Threat of New Entrants</td><td>Reduces barriers to entering markets</td></tr>
            <tr><td>Rivalry Among Competitors</td><td>Increases competition and pressure on prices</td></tr>
          </tbody>
        </table>
        <h4>Detailed explanation</h4>
        <div class="cards2">
          <div><b>1. Substitute Products</b><p>The internet allows new products and services to emerge, giving businesses new ways to satisfy customer needs.</p></div>
          <div><b>2. Customers' Bargaining Power</b><p>Customers can compare prices worldwide and easily find alternatives, which increases their bargaining power.</p></div>
          <div><b>3. Suppliers' Bargaining Power</b><p>Online procurement gives businesses access to more suppliers, which can increase buyers' bargaining power. Suppliers may also benefit from lower entry barriers and fewer intermediaries.</p></div>
          <div><b>4. Threat of New Entrants</b><p>The internet reduces the need for physical stores and sales forces; businesses can reach customers online, making market entry easier.</p></div>
          <div><b>5. Rivalry Among Existing Competitors</b><p>Businesses can compete globally, the number of competitors increases, differences between competitors may decrease, and price competition becomes stronger.</p></div>
        </div>
        <div class="callout"><b>Remember:</b> The internet generally increases competition, improves price transparency, and makes market entry easier.</div>`,
      questions: [
        Q(30, "The internet increases customers' bargaining power because customers can:", ["Stop online shopping", "Compare global prices and products", "Control manufacturing", "Eliminate suppliers"], "B", "Online information helps customers compare alternatives."),
        Q(31, "How does the internet affect the threat of new entrants?", ["Increases barriers to entry", "Reduces barriers to entry", "Prevents new companies", "Eliminates competition"], "B", "Businesses can reach customers without needing many physical assets or sales channels."),
        Q(32, "The internet generally affects rivalry among competitors by:", ["Reducing the number of competitors", "Increasing competition and price pressure", "Eliminating all competitors", "Removing substitute products"], "B", "The internet expands geographic markets and increases competition.")
      ]
    },

    /* 8 */
    {
      id: "is-strategies", num: 8, icon: "♟️",
      title: "Information System Strategies for Competitive Forces",
      short: "Low-cost leadership, differentiation, niche focus, customer/supplier intimacy.",
      html: `
        <p>Organizations use information systems to gain competitive advantages. There are four important strategies.</p>
        <div class="obj-list">
          <div><span class="n">1</span><div><b>Low-Cost Leadership</b><p>Use information systems to reduce operational costs, offer lower prices, and improve efficiency.</p><small>Example: Walmart uses IT-driven supply chain management to improve efficiency and reduce operating costs.</small></div></div>
          <div><span class="n">2</span><div><b>Product Differentiation</b><p>Use IT to create unique products or services, improve customer convenience, and make products different from competitors'.</p><small>Example: An online shopping company offers personalized product recommendations.</small></div></div>
          <div><span class="n">3</span><div><b>Focus on Market Niche</b><p>Use IT to target a specific and narrow market, understand the needs of a particular customer group, and serve it better than competitors.</p><small>Example: An online store selling products specifically for professional photographers.</small></div></div>
          <div><span class="n">4</span><div><b>Strengthen Customer and Supplier Intimacy</b><p>Use IT to build strong relationships, increase customer loyalty, improve supplier relationships, and raise switching costs.</p></div></div>
        </div>
        <h4>Walmart's slide figures (operating costs as % of revenue)</h4>
        <div class="chips"><span><b>24.9%</b>Competitors' operating costs (approx.)</span><span><b>20.7%</b>Industry average cited (approx.)</span><span><b>16.6%</b>Walmart (approx.)</span></div>
        <p style="margin-top:10px">An efficient customer response system connects sales information directly with manufacturing and supply chains.</p>
        <div class="callout"><b>Mass Customization:</b> Offering individually tailored products or services using the same production resources used for mass production. Example: customers customize a product's color, size, or features while the company uses its standard production system.</div>
        <div class="callout"><b>Switching Costs:</b> The costs or difficulties a customer faces when changing from one supplier or service provider to another. Example: A customer stays because the company provides personalized services and stores their purchase history.</div>
        <h4>Comparison table</h4>
        <table class="tbl">
          <thead><tr><th>Strategy</th><th>Main Goal</th></tr></thead>
          <tbody>
            <tr><td>Low-Cost Leadership</td><td>Reduce costs and prices</td></tr>
            <tr><td>Product Differentiation</td><td>Make products unique</td></tr>
            <tr><td>Focus on Market Niche</td><td>Serve a specific market</td></tr>
            <tr><td>Customer and Supplier Intimacy</td><td>Build strong relationships</td></tr>
          </tbody>
        </table>`,
      questions: [
        Q(33, "How many major IS strategies are discussed in the slides?", ["Two", "Three", "Four", "Five"], "C", "The slides describe four strategies."),
        Q(34, "Which strategy aims to achieve the lowest operational costs?", ["Product differentiation", "Low-cost leadership", "Market niche", "Customer intimacy"], "B", "Low-cost leadership uses IT to reduce costs and prices."),
        Q(35, "Walmart is an example of which strategy?", ["Product differentiation", "Low-cost leadership", "Market niche", "Knowledge management"], "B", "Walmart uses IT-driven supply chain management to improve efficiency and reduce costs."),
        Q(36, "Offering individually tailored products using mass production resources is called:", ["Product differentiation", "Mass customization", "Benchmarking", "Outsourcing"], "B", "Mass customization combines individual customization with mass production resources."),
        Q(37, "Which strategy focuses on serving a narrow target market?", ["Low-cost leadership", "Product differentiation", "Focus on market niche", "Supplier intimacy"], "C", "Market niche strategy targets a specific group of customers."),
        Q(38, "Which strategy aims to build strong relationships with customers and suppliers?", ["Low-cost leadership", "Customer and supplier intimacy", "Market niche", "Benchmarking"], "B", "Strong relationships can increase loyalty and switching costs."),
        Q(39, "Switching costs refer to:", ["The cost of producing a product", "The cost or difficulty of changing to another provider", "The cost of employee salaries", "The cost of internet access"], "B", "Switching costs make customers less likely to move to competitors.")
      ]
    },

    /* 9 */
    {
      id: "value-chain", num: 9, icon: "⛓️",
      title: "The Value Chain Model",
      short: "Primary activities, support activities and value partners.",
      html: `
        <div class="callout"><b>Definition:</b> The Value Chain Model identifies specific business activities where competitive strategies can be applied and where information systems can have a strategic impact.</div>
        <p><strong>Main idea:</strong> A business performs different activities to create value for its customers. The model helps identify where information systems can improve these activities.</p>
        <div class="cards3">
          <div><b>Primary activities</b><p>Activities directly related to creating and delivering products or services.</p></div>
          <div><b>Support activities</b><p>Activities that help primary activities operate effectively.</p></div>
          <div><b>Value partners</b><p>Other organizations that contribute to the firm's value chain.</p></div>
        </div>
        <div class="example"><b>Example:</b> An online shopping company can use information systems to improve order processing, product delivery, customer service, and inventory management.</div>
        <div class="callout"><b>Remember:</b> The Value Chain Model helps identify where IT can create the greatest strategic value.</div>`,
      questions: [
        Q(40, "What is the main purpose of the Value Chain Model?", ["To calculate employee salaries", "To identify activities where competitive strategies and IS can create value", "To manage only suppliers", "To eliminate business processes"], "B", "It identifies activities where information systems can have strategic impact."),
        Q(41, "The Value Chain Model considers:", ["Only primary activities", "Only support activities", "Primary and support activities", "Only financial activities"], "C", "The model considers both primary and support activities, along with value partners.")
      ]
    },

    /* 10 */
    {
      id: "benchmarking", num: 10, icon: "📏",
      title: "Benchmarking and Industry Best Practices",
      short: "Comparing against standards vs adopting successful methods.",
      html: `
        <div class="compare">
          <div><b>1. Benchmarking</b>
            <p>Comparing the efficiency and effectiveness of a company's business processes against established standards and measuring its performance against those standards.</p>
            <p>A company compares its performance with a standard or successful competitor to identify areas for improvement.</p>
            <small>Example: A company compares its product delivery time with the industry standard.</small></div>
          <div><b>2. Industry Best Practices</b>
            <p>The most successful methods or solutions for achieving business objectives effectively and consistently.</p>
            <p>Commonly identified by consulting companies, research organizations, government agencies, and industry associations.</p></div>
        </div>
        <h4>Why are best practices important?</h4>
        <ul>
          <li>Improve business processes.</li>
          <li>Increase efficiency and effectiveness.</li>
          <li>Help organizations identify successful methods.</li>
          <li>Help identify where information systems can provide strategic value.</li>
        </ul>
        <div class="callout"><b>Remember:</b> Benchmarking compares performance against standards, while best practices describe successful methods.</div>`,
      questions: [
        Q(42, "What is benchmarking?", ["Comparing business performance against standards", "Creating new software", "Hiring new employees", "Selling products online"], "A", "Benchmarking measures business efficiency and effectiveness against standards."),
        Q(43, "Industry best practices are:", ["Random business activities", "Successful methods for achieving business objectives", "Outdated procedures", "Only government policies"], "B", "Best practices are successful solutions or methods for achieving objectives."),
        Q(44, "Which organizations may identify industry best practices?", ["Consulting companies", "Research organizations", "Industry associations", "All of the above"], "D", "All these organizations can identify industry best practices."),
        Q(45, "Companies use benchmarking and best practices with which model to identify strategic IT opportunities?", ["TPS Model", "Value Chain Model", "Payroll Model", "Database Model"], "B", "These approaches help identify where information systems provide the greatest strategic value.")
      ]
    }
  ];

  /* Quick Revision Table (23) + Important Comparisons (8) */
  const revision = [
    { term: "Technical Definition", fact: "Organization as a formal structure" },
    { term: "Behavioral Definition", fact: "Rights, responsibilities, and relationships" },
    { term: "SOP", fact: "Standard Operating Procedures" },
    { term: "Organizational Politics", fact: "Different viewpoints and resistance" },
    { term: "Organizational Culture", fact: "Shared assumptions and beliefs" },
    { term: "Organizational Environment", fact: "Organization's relationship with its environment" },
    { term: "Disruptive Technology", fact: "Can make old business models obsolete" },
    { term: "Entrepreneurial Structure", fact: "Small, entrepreneur-led firm" },
    { term: "Machine Bureaucracy", fact: "Centralized management" },
    { term: "Divisionalized Bureaucracy", fact: "Multiple divisions" },
    { term: "Professional Bureaucracy", fact: "Professional expertise" },
    { term: "Adhocracy", fact: "Temporary specialist teams" },
    { term: "Economic Impact of IT", fact: "Reduces transaction costs" },
    { term: "Flattening", fact: "Reduces management layers" },
    { term: "Postindustrial Organization", fact: "Authority based on knowledge" },
    { term: "Porter's Model", fact: "Five competitive forces" },
    { term: "Low-Cost Leadership", fact: "Reduce costs" },
    { term: "Product Differentiation", fact: "Create unique products" },
    { term: "Market Niche", fact: "Focus on a narrow market" },
    { term: "Customer/Supplier Intimacy", fact: "Build strong relationships" },
    { term: "Value Chain", fact: "Identify strategic business activities" },
    { term: "Benchmarking", fact: "Compare against standards" },
    { term: "Best Practices", fact: "Successful methods" },
    { term: "Technical vs Behavioral", fact: "Resources and outputs vs rights and relationships" },
    { term: "Politics vs Culture", fact: "Conflicting interests vs shared beliefs" },
    { term: "Machine Bureaucracy vs Adhocracy", fact: "Centralized structure vs flexible specialist teams" },
    { term: "Entrepreneurial vs Professional Bureaucracy", fact: "Entrepreneur-led vs expertise-led" },
    { term: "Sustaining vs Destructive Disruption", fact: "Firms adapt vs firms fail to respond" },
    { term: "Low-Cost Leadership vs Product Differentiation", fact: "Lowest cost vs unique products" },
    { term: "Market Niche vs Customer Intimacy", fact: "Specific market vs strong relationships" },
    { term: "Benchmarking vs Best Practices", fact: "Comparing performance vs successful methods" }
  ];

  /* 15-question mini test (answer key derived from the notes) */
  const M = (i, q, o, a, e) => ({ n: "M" + i, q, options: o, answer: "ABCD".indexOf(a), explain: e });
  const mini = [
    M(1, "Which organizational definition focuses on resources and outputs?", ["Behavioral", "Technical", "Political", "Cultural"], "B", "The technical definition focuses on inputs, processing, and outputs."),
    M(2, "What does SOP stand for?", ["Standard Operating Procedures", "System Operating Program", "Software Output Process", "Standard Organization Policy"], "A", "SOPs are precise rules and procedures for expected situations."),
    M(3, "Shared assumptions and beliefs are known as:", ["Organizational politics", "Organizational culture", "Organizational structure", "Organizational environment"], "B", "Culture means the fundamental assumptions and shared beliefs of an organization."),
    M(4, "Which technology was introduced in 1989 according to the slides?", ["Microprocessor chips", "Personal computers", "World Wide Web", "Internet music services"], "C", "The World Wide Web is listed under 1989."),
    M(5, "Which organizational structure uses temporary multidisciplinary teams?", ["Machine bureaucracy", "Adhocracy", "Professional bureaucracy", "Divisionalized bureaucracy"], "B", "Adhocracy uses temporary teams of specialists."),
    M(6, "Which structure is dominated by centralized management?", ["Adhocracy", "Entrepreneurial", "Machine bureaucracy", "Professional bureaucracy"], "C", "Machine bureaucracy has centralized management and decision-making."),
    M(7, "IT flattens organizations by:", ["Increasing management layers", "Reducing management layers", "Removing all managers", "Increasing bureaucracy"], "B", "IT reduces the need for many management layers."),
    M(8, "How many forces are included in Porter's Competitive Forces Model?", ["Three", "Four", "Five", "Six"], "C", "Porter's model has five forces."),
    M(9, "More substitute products generally reduce a firm's:", ["Employee count", "Control over pricing", "Technology usage", "Product quality"], "B", "More substitutes reduce a firm's control over prices."),
    M(10, "The internet generally reduces:", ["Market competition", "Barriers to entry", "Customer information", "Price transparency"], "B", "The internet makes market entry easier by reducing barriers to entry."),
    M(11, "Which strategy focuses on the lowest operational costs?", ["Product differentiation", "Low-cost leadership", "Market niche", "Customer intimacy"], "B", "Low-cost leadership uses IT to reduce costs and prices."),
    M(12, "What is mass customization?", ["Producing only one product", "Individually tailoring products using mass production resources", "Selling products at low prices", "Reducing product quality"], "B", "Mass customization offers tailored products using mass-production resources."),
    M(13, "Which model identifies activities where IT can create strategic value?", ["TPS Model", "Value Chain Model", "Payroll Model", "SOP Model"], "B", "The Value Chain Model identifies where IS can have strategic impact."),
    M(14, "Benchmarking means:", ["Comparing performance against standards", "Creating a new business", "Hiring employees", "Developing software"], "A", "Benchmarking compares efficiency and effectiveness against standards."),
    M(15, "Industry best practices are:", ["Random procedures", "Successful methods for achieving business objectives", "Outdated technologies", "Only government rules"], "B", "Best practices are the most successful methods for achieving objectives.")
  ];

  (window.MIS_CHAPTERS = window.MIS_CHAPTERS || {}).ch3 = {
    title: "MIS · Chapter 3",
    subtitle: "Organizations, Management, and Information Systems — topic-wise explanation, MCQs, answers and short explanations",
    topics,
    revision,
    mini,
    examTip: "Give extra attention to: Technical vs Behavioral definitions of organizations; the five organizational structures and their examples; impacts of IT on organizations; Porter's five competitive forces; the four IS strategies for competitive advantage; and the Value Chain Model and Benchmarking. These are especially suitable for definition, comparison, and scenario-based MCQs."
  };
})();
