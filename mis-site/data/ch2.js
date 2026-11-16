/* =========================================================
   MIS Chapter 2 — DATA
   Business Processes and Information Systems
   ========================================================= */
(function () {
  const Q = (n, q, o, a, e) => ({ n, q, options: o, answer: "ABCD".indexOf(a), explain: e });

  const topics = [
    /* 1 */
    {
      id: "sharp-case", num: 1, icon: "🏢",
      title: "Sharp Corporation – Opening Case",
      short: "Sharp, Foxconn and Microsoft Yammer for knowledge sharing.",
      html: `
        <ul>
          <li><strong>Sharp Corporation</strong> is a Japanese electronics company.</li>
          <li>Since 2016, Sharp has been a subsidiary of Taiwan-based <strong>Foxconn</strong>.</li>
          <li>It employs over 52,000 people worldwide.</li>
          <li>Sharp faced challenges such as low profit margins and increasing competition.</li>
          <li>It used enterprise social networking tools like <strong>Microsoft Yammer</strong> to improve communication.</li>
        </ul>
        <div class="callout"><b>Main idea:</b> Sharp wanted to reduce hierarchical, top-down communication and encourage employees to share knowledge and ideas.</div>
        <div class="example"><b>Remember:</b> Yammer helps employees communicate, collaborate, and share knowledge.</div>`,
      questions: [
        Q(2, "Which company is discussed in the opening case?", ["Samsung", "Apple", "Sharp Corporation", "Microsoft"], "C", "The opening case discusses Sharp Corporation."),
        Q(3, "Since 2016, Sharp has been a subsidiary of which group?", ["Google", "Foxconn", "Samsung", "Intel"], "B", "Sharp became a subsidiary of Taiwan-based Foxconn in 2016."),
        Q(4, "Which tool did Sharp use to improve knowledge-sharing?", ["Microsoft Yammer", "Microsoft Excel", "Adobe Photoshop", "MySQL"], "A", "Yammer is an enterprise social networking tool.")
      ]
    },

    /* 2 */
    {
      id: "challenge-solution", num: 2, icon: "🧩",
      title: "How Business Challenges Lead to IS Solutions",
      short: "Challenge → Management → Organization → Technology → IS → Solution.",
      html: `
        <p>An organization uses information systems to solve business challenges. The key elements are:</p>
        <table class="tbl">
          <thead><tr><th>Element</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td>Business Challenges</td><td>Problems faced by a business</td></tr>
            <tr><td>Management</td><td>Develops strategies and goals</td></tr>
            <tr><td>Organization</td><td>Improves processes and culture</td></tr>
            <tr><td>Technology</td><td>Provides tools and technologies</td></tr>
            <tr><td>Information System</td><td>Combines technology, people, and processes to solve problems</td></tr>
            <tr><td>Business Solutions</td><td>Results achieved after solving problems</td></tr>
          </tbody>
        </table>
        <h4>Example: Sharp Corporation</h4>
        <div class="obj-list">
          <div><span class="n">1</span><div><b>Challenge</b><p>Poor communication between employees.</p></div></div>
          <div><span class="n">2</span><div><b>Management</b><p>Creates a knowledge-sharing strategy.</p></div></div>
          <div><span class="n">3</span><div><b>Organization</b><p>Changes its communication process.</p></div></div>
          <div><span class="n">4</span><div><b>Technology</b><p>Introduces Microsoft Yammer.</p></div></div>
          <div><span class="n">5</span><div><b>Information System</b><p>Employees share knowledge and ideas.</p></div></div>
          <div><span class="n">6</span><div><b>Business Solution</b><p>Improved productivity, reduced costs, and increased innovation.</p></div></div>
        </div>
        <div class="callout"><b>Important:</b> Business solutions can create new opportunities and challenges for the organization.</div>`,
      questions: [
        Q(52, "Which element combines technology, people, and processes to solve business problems?", ["Management", "Organization", "Technology", "Information System"], "D", "The information system combines technology, people, and processes to solve problems."),
        Q(53, "Which element develops the strategies and goals used to respond to a business challenge?", ["Management", "Technology", "Business Solutions", "Hardware"], "A", "Management develops strategies and goals."),
        Q(54, "Business solutions can lead to:", ["New opportunities and new challenges", "No further change", "The removal of all challenges forever", "Only higher costs"], "A", "Business solutions can create new opportunities and challenges for the organization.")
      ]
    },

    /* 3 */
    {
      id: "business-process", num: 3, icon: "⚙️",
      title: "Business Process",
      short: "Definition, examples and why processes are competitive assets.",
      html: `
        <div class="callout"><b>Definition:</b> A business process is a set of logically related tasks and activities performed by an organization to produce a specific business result.</div>
        <h4>Examples</h4>
        <ul>
          <li>Processing customer orders.</li>
          <li>Hiring employees.</li>
          <li>Producing goods.</li>
          <li>Paying employees.</li>
          <li>Managing customer complaints.</li>
        </ul>
        <h4>Important points</h4>
        <ul>
          <li>Every business consists of multiple business processes.</li>
          <li>Some processes are formal and documented.</li>
          <li>Others are informal and habitual.</li>
          <li>Business processes are important competitive assets.</li>
          <li>Poorly designed processes can damage business performance.</li>
        </ul>
        <div class="example"><b>Remember:</b> A business process describes how work is organized and completed.</div>`,
      questions: [
        Q(1, "What is a business process?", ["A computer program", "A set of logically related tasks to produce business results", "A type of database", "A hardware device"], "B", "A business process is a group of related activities that produces a specific business result."),
        Q(5, "Which of the following is a business process?", ["Hiring employees", "Turning on a monitor", "Installing an operating system", "Charging a laptop"], "A", "Hiring employees is an HR business process.")
      ]
    },

    /* 4 */
    {
      id: "process-types", num: 4, icon: "🧬",
      title: "Types of Business Processes",
      short: "Within a larger process, within a functional area, across functional areas.",
      html: `
        <p>There are three important types.</p>
        <div class="cards3">
          <div><b>1. Processes within a larger process</b><p>Parts of a bigger business process.</p><small>Example: Knowledge management process.</small></div>
          <div><b>2. Processes within a specific functional area</b><p>These belong to one department.</p><small>Example: Processing payroll in the HR department.</small></div>
          <div><b>3. Processes across multiple functional areas</b><p>These involve multiple departments.</p><small>Example: Fulfilling a customer order through sales, accounting, and manufacturing.</small></div>
        </div>
        <div class="callout"><b>Important concept:</b> The more a process crosses functional boundaries, the greater the need for an integrated information system.</div>`,
      questions: [
        Q(8, "Which process involves multiple functional areas?", ["Checking product quality", "Hiring employees", "Order fulfillment", "Managing cash accounts"], "C", "Order fulfillment involves sales, accounting, and manufacturing.")
      ]
    },

    /* 5 */
    {
      id: "functional-processes", num: 5, icon: "🗂️",
      title: "Business Processes in Specific Functional Areas",
      short: "Manufacturing, Sales & Marketing, Finance & Accounting, HR.",
      html: `
        <p>Different departments perform different business processes.</p>
        <table class="tbl">
          <thead><tr><th>Functional Area</th><th>Business Processes</th></tr></thead>
          <tbody>
            <tr><td>Manufacturing and Production</td><td>Assembling products, checking quality, producing bills of materials</td></tr>
            <tr><td>Sales and Marketing</td><td>Identifying customers, advertising products, selling products</td></tr>
            <tr><td>Finance and Accounting</td><td>Paying creditors, creating financial statements, managing cash</td></tr>
            <tr><td>Human Resources</td><td>Hiring employees, evaluating performance, managing employee benefits</td></tr>
          </tbody>
        </table>
        <div class="example"><b>Remember these four functional areas:</b> Manufacturing and Production · Sales and Marketing · Finance and Accounting · Human Resources</div>`,
      questions: [
        Q(6, "Which department is responsible for hiring employees?", ["Finance", "Manufacturing", "Human Resources", "Sales"], "C", "Hiring and evaluating employees are HR activities."),
        Q(7, "Processing payroll belongs to which functional area?", ["Sales and Marketing", "Human Resources", "Manufacturing", "Customer Service"], "B", "Payroll processing is associated with HR.")
      ]
    },

    /* 6 */
    {
      id: "cross-functional", num: 6, icon: "🔗",
      title: "Business Processes Across Multiple Functional Areas",
      short: "Order fulfillment: Sales + Accounting + Manufacturing.",
      html: `
        <h4>Example: Order Fulfillment</h4>
        <p>Order fulfillment means completing a customer's order. It requires coordination between three departments:</p>
        <div class="steps">
          <div><b>Sales</b><span>Generates and submits the order.</span></div>
          <div><b>Accounting</b><span>Checks customer credit, approves credit, and generates the invoice.</span></div>
          <div><b>Manufacturing</b><span>Assembles and ships the product.</span></div>
        </div>
        <h4>Important points</h4>
        <ul>
          <li>Departments need to share information.</li>
          <li>Independent functional systems cannot easily share information.</li>
          <li>Many organizations use cross-functional systems.</li>
          <li>These systems integrate activities across departments.</li>
        </ul>
        <div class="example"><b>Remember:</b> Order fulfillment is a cross-functional business process.</div>`,
      questions: [
        Q(9, "Order fulfillment requires coordination between which departments?", ["HR, IT, and Sales", "Sales, Accounting, and Manufacturing", "Finance, HR, and IT", "Marketing, HR, and Finance"], "B", "These three departments work together to complete customer orders."),
        Q(10, "Why are integrated information systems needed?", ["To increase paperwork", "To prevent communication", "To coordinate activities across departments", "To remove employees"], "C", "Integrated systems allow different departments to share information.")
      ]
    },

    /* 7 */
    {
      id: "tps", num: 7, icon: "🧾",
      title: "Transaction Processing Systems (TPS)",
      short: "Daily routine transactions for operational managers.",
      html: `
        <div class="callout"><b>Definition:</b> TPS is a computerized system that performs and records the daily routine transactions necessary to conduct business.</div>
        <p><strong>Who uses TPS?</strong> Operational managers.</p>
        <h4>Examples</h4>
        <ul>
          <li>Sales transactions.</li>
          <li>Cash deposits.</li>
          <li>Payroll processing.</li>
          <li>Credit decisions.</li>
          <li>Receiving materials.</li>
        </ul>
        <h4>Characteristics</h4>
        <ul>
          <li>Handles daily routine activities.</li>
          <li>Tasks and goals are predefined.</li>
          <li>Activities are highly structured.</li>
          <li>Requires little managerial judgment.</li>
          <li>Monitors internal operations and external business transactions.</li>
        </ul>
        <div class="example"><b>Most important point:</b> TPS produces data for other information systems, including MIS, DSS, and ESS.</div>`,
      questions: [
        Q(11, "What is the full form of TPS?", ["Total Processing System", "Transaction Processing System", "Technical Program System", "Transaction Planning Software"], "B", "TPS stands for Transaction Processing System."),
        Q(12, "TPS primarily serves which management level?", ["Senior management", "Middle management", "Operational management", "Board of directors"], "C", "TPS supports daily operational activities."),
        Q(13, "Which of the following is an example of TPS?", ["Long-term business strategy", "Payroll processing", "Market forecasting", "Competitor analysis"], "B", "Payroll processing is a routine daily transaction."),
        Q(14, "TPS handles which type of activities?", ["Unstructured", "Highly structured", "Strategic", "Unpredictable"], "B", "TPS handles predefined and routine activities."),
        Q(15, "Which system is the major producer of information for other systems?", ["ESS", "DSS", "TPS", "CRM"], "C", "TPS provides transaction data to MIS, DSS, and ESS.")
      ]
    },

    /* 8 */
    {
      id: "payroll-tps", num: 8, icon: "💰",
      title: "Example of Payroll TPS",
      short: "How a payroll TPS works and the Net Pay formula.",
      html: `
        <p>A Payroll TPS processes employee salary information.</p>
        <h4>How it works</h4>
        <ol>
          <li>Collects employee working-hour information.</li>
          <li>Processes salary and deductions.</li>
          <li>Updates the employee database.</li>
          <li>Generates employee paychecks.</li>
          <li>Produces management reports.</li>
          <li>Sends required information to government agencies.</li>
        </ol>
        <h4>Payroll database may contain</h4>
        <div class="chips">
          <span>Employee number and name</span><span>Address and pay rate</span><span>Gross pay</span><span>Federal tax</span>
          <span>FICA and Medicare</span><span>State tax</span><span>Net pay</span><span>Year-to-date earnings</span>
        </div>
        <div class="callout"><b>Important formula:</b> Net Pay = Gross Pay − Total Deductions</div>`,
      questions: [
        Q(55, "Which formula is correct for a payroll TPS?", ["Net Pay = Gross Pay + Total Deductions", "Net Pay = Gross Pay − Total Deductions", "Net Pay = Gross Pay × Tax", "Net Pay = Year-to-date earnings"], "B", "Net Pay = Gross Pay − Total Deductions."),
        Q(56, "Which of the following is an output of a payroll TPS?", ["Employee paychecks", "Competitor analysis", "Long-term forecast", "What-if scenario"], "A", "A payroll TPS generates paychecks and management reports."),
        Q(57, "A payroll TPS sends required information to which external party?", ["Government agencies", "Suppliers", "Competitors", "Customers"], "A", "It sends required information to government agencies.")
      ]
    },

    /* 9 */
    {
      id: "mis", num: 9, icon: "📊",
      title: "Management Information Systems (MIS)",
      short: "Summarized, routine reports for middle management.",
      html: `
        <div class="callout"><b>Definition:</b> MIS provides managers with summarized information about an organization's current performance to support decision-making.</div>
        <p><strong>Who uses MIS?</strong> Middle management. &nbsp; <strong>Data source:</strong> TPS.</p>
        <h4>Characteristics</h4>
        <ul>
          <li>Provides regular reports.</li>
          <li>Uses summarized transaction data.</li>
          <li>Answers routine and predefined questions.</li>
          <li>Uses simple routines and data aggregation.</li>
          <li>Does not generally depend on sophisticated mathematical models.</li>
        </ul>
        <div class="example"><b>Example:</b> A monthly sales report showing total sales, total expenses, and profit.</div>
        <div class="example"><b>Remember:</b> MIS converts TPS transaction data into useful management reports.</div>`,
      questions: [
        Q(16, "What is the full form of MIS?", ["Management Information System", "Machine Information Software", "Management Internet Service", "Main Information System"], "A", "MIS stands for Management Information System."),
        Q(17, "MIS primarily serves which management level?", ["Operational", "Middle", "External", "Customers"], "B", "MIS provides reports for middle management."),
        Q(18, "MIS mainly gets data from which system?", ["ESS", "DSS", "TPS", "CRM"], "C", "MIS uses summarized transaction data from TPS."),
        Q(19, "MIS typically answers which type of questions?", ["Routine and predefined", "Completely unknown", "Personal questions", "Unrelated questions"], "A", "MIS answers routine questions using predefined procedures.")
      ]
    },

    /* 10 */
    {
      id: "mis-info", num: 10, icon: "📈",
      title: "How MIS Gets and Presents Information",
      short: "Data sources and outputs: reports, online displays, dashboards.",
      html: `
        <h4>MIS collects data from systems such as</h4>
        <ul><li>Order processing.</li><li>Materials resource planning.</li><li>General ledger.</li></ul>
        <p>It processes and summarizes this data.</p>
        <h4>MIS outputs</h4>
        <div class="chips"><span>Management reports</span><span>Online displays</span><span>Dashboards</span></div>
        <div class="example"><b>Example:</b> A manager checks a monthly dashboard to see total sales and expenses.</div>
        <div class="callout"><b>Remember:</b> TPS provides raw transaction data, while MIS provides summarized information.</div>`,
      questions: [
        Q(20, "Which of the following is an MIS output?", ["Management reports", "Employee keyboard", "Network cable", "Computer hardware"], "A", "MIS produces reports, online displays, and dashboards.")
      ]
    },

    /* 11 */
    {
      id: "dss", num: 11, icon: "🧠",
      title: "Decision Support Systems (DSS)",
      short: "Nonroutine, semi-structured decisions and what-if analysis.",
      html: `
        <div class="callout"><b>Definition:</b> DSS is an information system that helps managers make decisions about unique, rapidly changing, and nonroutine problems.</div>
        <p><strong>Who uses DSS?</strong> Middle and senior management.</p>
        <h4>Characteristics</h4>
        <ul>
          <li>Supports semi-structured decisions.</li>
          <li>Handles unusual and changing problems.</li>
          <li>Uses internal and external data.</li>
          <li>Supports what-if analysis.</li>
          <li>Helps compare different possible outcomes.</li>
        </ul>
        <h4>What-if analysis</h4>
        <p>Changing input values to see how the results may change.</p>
        <div class="example"><b>Example:</b> A manager asks, “What will happen to profit if we reduce product prices by 10%?” DSS can analyze different scenarios and estimate the results.</div>
        <div class="callout"><b>Remember:</b> DSS is mainly used for analytical and nonroutine decision-making.</div>`,
      questions: [
        Q(21, "What is the full form of DSS?", ["Data Security System", "Decision Support System", "Digital Software Service", "Database Support Software"], "B", "DSS stands for Decision Support System."),
        Q(22, "DSS is mainly used for which type of problems?", ["Routine and repetitive", "Unique and nonroutine", "Simple daily transactions", "Payroll processing"], "B", "DSS supports unique, rapidly changing, and nonroutine problems."),
        Q(23, "DSS supports which type of decisions?", ["Only structured", "Semi-structured", "Completely predefined", "No decisions"], "B", "DSS supports semi-structured decisions."),
        Q(24, "What is what-if analysis?", ["Deleting all business data", "Changing input values to observe possible outcomes", "Printing reports", "Recording employee attendance"], "B", "What-if analysis compares possible scenarios."),
        Q(25, "DSS can use which type of data?", ["Only internal data", "Only external data", "Both internal and external data", "No data"], "C", "DSS uses internal data from TPS/MIS and external data such as market trends.")
      ]
    },

    /* 12 */
    {
      id: "ess", num: 12, icon: "🧭",
      title: "Executive Support Systems (ESS)",
      short: "Strategic, long-term planning for senior management via dashboards.",
      html: `
        <div class="callout"><b>Definition:</b> ESS is an information system that supports senior management in long-term planning and strategic decision-making.</div>
        <p><strong>Who uses ESS?</strong> Senior management or executives.</p>
        <h4>Characteristics</h4>
        <ul>
          <li>Supports long-term planning.</li>
          <li>Helps analyze business trends.</li>
          <li>Supports forecasting.</li>
          <li>Monitors overall business performance.</li>
          <li>Uses data from MIS, DSS, and external sources.</li>
        </ul>
        <p><strong>Main interface: Digital dashboard</strong> — presents important business information using graphical and easy-to-read displays.</p>
        <div class="example"><b>Example:</b> A CEO checks company-wide revenue, market trends, and future business performance.</div>
        <div class="callout"><b>Remember:</b> ESS focuses on strategic decisions and the future direction of the business.</div>`,
      questions: [
        Q(26, "What is the full form of ESS?", ["Enterprise Security System", "Executive Support System", "Employee Service Software", "Electronic Sales System"], "B", "ESS stands for Executive Support System."),
        Q(27, "ESS primarily supports which management level?", ["Operational", "Middle", "Senior", "Customers"], "C", "ESS supports senior management."),
        Q(28, "ESS mainly focuses on which activity?", ["Daily transactions", "Payroll", "Long-term planning and strategy", "Product assembly"], "C", "ESS helps executives make strategic decisions."),
        Q(29, "Which system commonly presents information through a digital dashboard?", ["TPS", "ESS", "Payroll TPS", "Order processing"], "B", "ESS uses graphical dashboards to display key performance indicators."),
        Q(30, "Which system answers the question “Where is the business heading?”", ["TPS", "MIS", "DSS", "ESS"], "D", "ESS focuses on future business direction.")
      ]
    },

    /* 13 */
    {
      id: "levels", num: 13, icon: "🔺",
      title: "Systems at Different Management Levels",
      short: "TPS, MIS, DSS, ESS across the management pyramid.",
      html: `
        <div class="cards3">
          <div><b>Senior Management</b><ul><li><strong>ESS</strong> – Strategic and long-term decisions</li></ul></div>
          <div><b>Middle Management</b><ul><li><strong>MIS</strong> – Monitoring and reporting</li><li><strong>DSS</strong> – Analytical and nonroutine decisions</li></ul></div>
          <div><b>Operational Management</b><ul><li><strong>TPS</strong> – Daily transactions</li></ul></div>
        </div>
        <h4>Comparison</h4>
        <table class="tbl">
          <thead><tr><th>System</th><th>Management Level</th><th>Main Purpose</th></tr></thead>
          <tbody>
            <tr><td>TPS</td><td>Operational</td><td>Daily transactions</td></tr>
            <tr><td>MIS</td><td>Middle</td><td>Routine reports</td></tr>
            <tr><td>DSS</td><td>Middle/Senior</td><td>Nonroutine analysis</td></tr>
            <tr><td>ESS</td><td>Senior</td><td>Strategic planning</td></tr>
          </tbody>
        </table>
        <h4>As we move up the management pyramid</h4>
        <ul>
          <li>Decisions become less structured.</li>
          <li>Decisions become more strategic.</li>
          <li>Information becomes more summarized.</li>
          <li>Managers depend on information from lower levels.</li>
        </ul>
        <h4>Four important questions</h4>
        <table class="tbl">
          <thead><tr><th>System</th><th>Question</th></tr></thead>
          <tbody>
            <tr><td>TPS</td><td>What happened?</td></tr>
            <tr><td>MIS</td><td>What is happening now?</td></tr>
            <tr><td>DSS</td><td>What should we do?</td></tr>
            <tr><td>ESS</td><td>Where is the business heading?</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Data flow:</b> TPS → MIS → DSS / ESS</div>`,
      questions: [
        Q(31, "As we move up the management pyramid, decisions become:", ["More structured", "Less strategic", "Less structured and more strategic", "More routine"], "C", "Senior managers make more strategic and less structured decisions."),
        Q(32, "Which system forms the foundation of other management information systems?", ["ESS", "DSS", "MIS", "TPS"], "D", "TPS provides the transaction data used by higher-level systems.")
      ]
    },

    /* 14 */
    {
      id: "enterprise-apps", num: 14, icon: "🏭",
      title: "Enterprise Applications",
      short: "ERP, SCM, CRM and KMS integrate the organization.",
      html: `
        <div class="callout"><b>Definition:</b> Enterprise applications are large-scale information systems that connect different functional areas and support business processes across an organization.</div>
        <p>Organizations often have disconnected systems because of growth and acquisitions. Enterprise applications help integrate these systems.</p>
        <h4>Four major types</h4>
        <div class="sys-grid">
          <div class="sys"><div class="abbr">ERP</div><b>Enterprise Systems</b><p>Integrate data from different departments; connect manufacturing, finance, sales, and HR.</p><small>Example: A single system managing company-wide operations.</small></div>
          <div class="sys"><div class="abbr">SCM</div><b>Supply Chain Management</b><p>Manages the flow of materials and information; coordinates suppliers and logistics partners.</p><small>Example: Tracking raw materials from suppliers to factories.</small></div>
          <div class="sys"><div class="abbr">CRM</div><b>Customer Relationship Management</b><p>Manages customer-related business processes and interactions with customers.</p><small>Example: Managing customer information, sales, and complaints.</small></div>
          <div class="sys"><div class="abbr">KMS</div><b>Knowledge Management Systems</b><p>Capture and store organizational knowledge; help employees find and use it.</p><small>Example: An internal company knowledge base.</small></div>
        </div>
        <h4>Important comparison</h4>
        <table class="tbl">
          <thead><tr><th>System</th><th>Main Focus</th></tr></thead>
          <tbody>
            <tr><td>ERP</td><td>Integrating the organization</td></tr>
            <tr><td>SCM</td><td>Suppliers and supply chain</td></tr>
            <tr><td>CRM</td><td>Customers</td></tr>
            <tr><td>KMS</td><td>Knowledge and expertise</td></tr>
          </tbody>
        </table>`,
      questions: [
        Q(33, "What is the full form of ERP?", ["Enterprise Resource Planning", "Employee Resource Processing", "Electronic Record Program", "Enterprise Reporting Process"], "A", "ERP stands for Enterprise Resource Planning."),
        Q(34, "Which system integrates information from manufacturing, finance, sales, and HR?", ["CRM", "ERP", "SCM", "TPS"], "B", "ERP integrates data and processes across the organization."),
        Q(35, "Which system manages the flow of materials and information with suppliers?", ["CRM", "ESS", "SCM", "MIS"], "C", "SCM stands for Supply Chain Management."),
        Q(36, "Which system manages interactions with customers?", ["ERP", "CRM", "SCM", "KMS"], "B", "CRM stands for Customer Relationship Management."),
        Q(37, "Which system captures and applies organizational knowledge?", ["TPS", "SCM", "KMS", "ERP"], "C", "KMS stands for Knowledge Management System.")
      ]
    },

    /* 15 */
    {
      id: "networks-ebusiness", num: 15, icon: "🌍",
      title: "Intranet, Extranet, E-business, E-commerce and E-government",
      short: "Internal vs external networks and the e-business family.",
      html: `
        <div class="cards2">
          <div><b>1. Intranet</b><p>An internal network used within an organization; helps employees share information.</p><small>Example: An employee-only company portal.</small></div>
          <div><b>2. Extranet</b><p>Extends an organization's intranet to authorized external users such as suppliers and business partners.</p><small>Example: A supplier portal.</small></div>
          <div><b>3. E-business</b><p>Uses digital technology and the internet to run core business processes; includes activities beyond buying and selling.</p></div>
          <div><b>4. E-commerce</b><p>A subset of e-business: buying and selling goods and services over the internet.</p><small>Example: Online shopping.</small></div>
          <div><b>5. E-government</b><p>Uses internet and networking technologies to provide digital government services, connecting government with citizens, businesses, and other government organizations.</p></div>
        </div>
        <div class="callout"><b>Important relationship:</b> E-commerce is a part of E-business.</div>`,
      questions: [
        Q(38, "What is an intranet?", ["A public internet website", "An internal organizational network", "A supplier's computer", "A government website"], "B", "An intranet is used to share information within an organization."),
        Q(39, "What is an extranet?", ["An internal network only", "An extension of an intranet for authorized external users", "A public social network", "A standalone computer"], "B", "Suppliers and business partners can access an extranet when authorized."),
        Q(40, "E-commerce is a subset of:", ["E-government", "E-business", "Intranet", "Extranet"], "B", "E-commerce is the buying and selling part of e-business."),
        Q(41, "Which activity is an example of e-commerce?", ["Online shopping", "Employee recruitment", "Internal staff meetings", "Employee training"], "A", "E-commerce involves online buying and selling."),
        Q(42, "E-government uses technology to connect government with:", ["Only employees", "Citizens, businesses, and other government branches", "Only suppliers", "Only international companies"], "B", "E-government enables digital government relationships.")
      ]
    },

    /* 16 */
    {
      id: "is-department", num: 16, icon: "👥",
      title: "The Information Systems Department",
      short: "Programmers, systems analysts, IS managers and external specialists.",
      html: `
        <p>The Information Systems Department consists of specialists who develop, manage, and maintain an organization's information systems.</p>
        <h4>Important specialists</h4>
        <div class="cards2">
          <div><b>1. Programmers</b><p>Write software instructions; develop and maintain computer programs.</p></div>
          <div><b>2. Systems Analysts</b><p>Understand business problems, translate business requirements into information requirements and system designs, and act as a bridge between IT staff and other departments.</p></div>
          <div><b>3. Information Systems Managers</b><p>Manage programmers and systems analysts; supervise IT projects and operations.</p></div>
          <div><b>4. External Specialists</b><p>Consultants and vendors who provide specialized services and help with large-scale projects.</p></div>
        </div>
        <h4>Examples of management roles</h4>
        <div class="chips"><span>Programming Manager</span><span>Analyst Manager</span><span>Project Manager</span><span>Physical Facility Manager</span><span>Telecommunications Manager</span><span>Computer Operations and Data-entry Manager</span></div>
        <div class="callout"><b>Remember:</b> Systems analysts connect business requirements with technical solutions.</div>`,
      questions: [
        Q(43, "Who writes software instructions?", ["Systems analyst", "Programmer", "CIO", "CPO"], "B", "Programmers write software instructions."),
        Q(44, "Who acts as a bridge between IT staff and the rest of the organization?", ["Programmer", "Systems analyst", "CISO", "CKO"], "B", "Systems analysts translate business requirements into system designs."),
        Q(45, "Who manages teams of programmers and analysts?", ["Information systems manager", "Customer", "Supplier", "CPO"], "A", "IS managers lead technical teams and manage IT activities.")
      ]
    },

    /* 17 */
    {
      id: "governance", num: 17, icon: "🛡️",
      title: "Department Heads and IT Governance",
      short: "CIO, CSO/CISO, CPO, CKO, CDO and IT governance.",
      html: `
        <p>Important IT leadership positions:</p>
        <table class="tbl">
          <thead><tr><th>Position</th><th>Responsibility</th></tr></thead>
          <tbody>
            <tr><td>CIO</td><td>Oversees IT use and alignment with business strategy</td></tr>
            <tr><td>CSO / CISO</td><td>Responsible for information systems security</td></tr>
            <tr><td>CPO</td><td>Ensures compliance with data privacy laws</td></tr>
            <tr><td>CKO</td><td>Manages organizational knowledge programs</td></tr>
            <tr><td>CDO</td><td>Manages enterprise data governance, quality, and policy</td></tr>
          </tbody>
        </table>
        <h4>IT Governance</h4>
        <p>The strategies and policies used to manage IT within an organization. It defines:</p>
        <ul>
          <li>Who makes IT decisions.</li>
          <li>Who is responsible for IT activities.</li>
          <li>How IT investments support business goals.</li>
        </ul>
        <h4>Remember these abbreviations</h4>
        <div class="chips">
          <span><b>CIO</b>Chief Information Officer</span><span><b>CSO</b>Chief Security Officer</span><span><b>CISO</b>Chief Information Security Officer</span>
          <span><b>CPO</b>Chief Privacy Officer</span><span><b>CKO</b>Chief Knowledge Officer</span><span><b>CDO</b>Chief Data Officer</span>
        </div>`,
      questions: [
        Q(46, "Who oversees the use of IT in a firm and its alignment with corporate strategy?", ["CDO", "CIO", "CPO", "CKO"], "B", "CIO stands for Chief Information Officer."),
        Q(47, "Who is responsible for information systems security?", ["CPO", "CKO", "CSO/CISO", "CIO"], "C", "CSO/CISO is responsible for information security."),
        Q(48, "Who ensures compliance with data privacy laws?", ["CPO", "CIO", "CDO", "CKO"], "A", "CPO stands for Chief Privacy Officer."),
        Q(49, "Who helps an organization make better use of existing knowledge?", ["CISO", "CKO", "CIO", "CPO"], "B", "CKO stands for Chief Knowledge Officer."),
        Q(50, "Who is responsible for enterprise-wide data governance and quality?", ["CIO", "CPO", "CDO", "CKO"], "C", "CDO stands for Chief Data Officer."),
        Q(51, "What is IT Governance?", ["Managing employee salaries", "Strategies and policies for using IT within an organization", "Manufacturing computer hardware", "Selling software"], "B", "IT Governance ensures IT decisions and investments support business goals.")
      ]
    }
  ];

  /* Quick Revision Table (23) + Most Important Differences (7) */
  const revision = [
    { term: "Sharp Corporation", fact: "Uses Yammer for collaboration" },
    { term: "Business Process", fact: "Related tasks that produce business results" },
    { term: "Order Fulfillment", fact: "Sales + Accounting + Manufacturing" },
    { term: "TPS", fact: "Daily transactions" },
    { term: "MIS", fact: "Routine management reports" },
    { term: "DSS", fact: "Nonroutine decision support" },
    { term: "ESS", fact: "Strategic planning" },
    { term: "ERP", fact: "Integrates business departments" },
    { term: "SCM", fact: "Manages suppliers and materials" },
    { term: "CRM", fact: "Manages customer relationships" },
    { term: "KMS", fact: "Manages organizational knowledge" },
    { term: "Intranet", fact: "Internal network" },
    { term: "Extranet", fact: "Network for authorized external users" },
    { term: "E-business", fact: "Digital business processes" },
    { term: "E-commerce", fact: "Online buying and selling" },
    { term: "E-government", fact: "Digital government services" },
    { term: "Programmer", fact: "Writes software" },
    { term: "Systems Analyst", fact: "Bridge between IT and business" },
    { term: "CIO", fact: "IT strategy" },
    { term: "CSO/CISO", fact: "Security" },
    { term: "CPO", fact: "Privacy" },
    { term: "CKO", fact: "Knowledge" },
    { term: "CDO", fact: "Data governance" },
    { term: "TPS vs MIS", fact: "TPS records transactions; MIS summarizes them" },
    { term: "MIS vs DSS", fact: "MIS provides routine reports; DSS analyzes nonroutine problems" },
    { term: "DSS vs ESS", fact: "DSS supports analytical decisions; ESS supports strategic planning" },
    { term: "ERP vs SCM", fact: "ERP integrates the firm; SCM coordinates the supply chain" },
    { term: "CRM vs KMS", fact: "CRM focuses on customers; KMS focuses on knowledge" },
    { term: "Intranet vs Extranet", fact: "Intranet is internal; Extranet allows authorized external access" },
    { term: "E-business vs E-commerce", fact: "E-business is broader; E-commerce is online buying and selling" }
  ];

  /* 15-question mini test (answer key derived from the notes) */
  const M = (i, q, o, a, e) => ({ n: "M" + i, q, options: o, answer: "ABCD".indexOf(a), explain: e });
  const mini = [
    M(1, "Which system handles daily business transactions?", ["MIS", "TPS", "DSS", "ESS"], "B", "TPS performs and records daily routine transactions."),
    M(2, "Which management level primarily uses MIS?", ["Operational", "Middle", "Senior", "External"], "B", "MIS provides summarized reports for middle management."),
    M(3, "Which system supports what-if analysis?", ["TPS", "MIS", "DSS", "CRM"], "C", "DSS supports what-if analysis for nonroutine problems."),
    M(4, "Which system supports long-term strategic planning?", ["TPS", "MIS", "DSS", "ESS"], "D", "ESS supports senior management in long-term planning."),
    M(5, "Order fulfillment involves which departments?", ["HR and IT", "Sales, Accounting, Manufacturing", "Finance and HR", "Sales and HR"], "B", "Sales, accounting, and manufacturing coordinate to fulfill an order."),
    M(6, "Which system integrates different departments?", ["ERP", "CRM", "SCM", "TPS"], "A", "ERP integrates manufacturing, finance, sales, and HR."),
    M(7, "Which system focuses on suppliers and logistics?", ["CRM", "KMS", "SCM", "ESS"], "C", "SCM coordinates suppliers and logistics partners."),
    M(8, "Which system focuses on customer interactions?", ["ERP", "CRM", "SCM", "KMS"], "B", "CRM manages customer-related processes and interactions."),
    M(9, "What is an internal organizational network called?", ["Extranet", "Internet", "Intranet", "E-commerce"], "C", "An intranet is an internal network used within an organization."),
    M(10, "E-commerce is a subset of which concept?", ["E-government", "E-business", "Intranet", "SCM"], "B", "E-commerce is the online buying and selling part of e-business."),
    M(11, "Who writes software instructions?", ["CIO", "Programmer", "CPO", "Systems analyst"], "B", "Programmers write software instructions."),
    M(12, "Who acts as a bridge between IT and business?", ["Programmer", "Systems analyst", "CISO", "CDO"], "B", "Systems analysts translate business requirements into system designs."),
    M(13, "Who is responsible for data privacy compliance?", ["CIO", "CKO", "CPO", "CDO"], "C", "The Chief Privacy Officer ensures compliance with data privacy laws."),
    M(14, "Who manages enterprise-wide data governance?", ["CDO", "CPO", "CIO", "CKO"], "A", "The Chief Data Officer manages data governance, quality, and policy."),
    M(15, "Which system is the main source of data for MIS?", ["ESS", "TPS", "CRM", "SCM"], "B", "MIS uses summarized transaction data from TPS.")
  ];

  (window.MIS_CHAPTERS = window.MIS_CHAPTERS || {}).ch2 = {
    title: "MIS · Chapter 2",
    subtitle: "Business Processes and Information Systems — topic-wise explanation, MCQs, answers and short explanations",
    topics,
    revision,
    mini,
    examTip: "Focus especially on TPS vs MIS vs DSS vs ESS, the four enterprise applications (ERP, SCM, CRM, KMS), and the responsibilities of CIO, CISO, CPO, CKO, and CDO. These are important comparison and definition topics."
  };
})();
