// All study content for the MIS Chapter 1 revision site.
// Section types: "list" (items), "table" (headers + rows), "terms" (term/def pairs), "text" (body)

const CH1 = {
  title: "MIS Chapter 1",
  examTip: "Give extra revision time to topics 8, 9, 10, 11 and 13. These contain important definitions, differences, lists and explanations.",
  topics: [
    {
      id: "t1", num: 1, icon: "🎯", title: "Motivation of MIS", important: false,
      summary: "MIS connects management, organization and technology.",
      sections: [
        { heading: "MIS connects three areas", type: "list", items: [
          "<b>Management</b> – Planning and decision-making.",
          "<b>Organization</b> – Managing people and activities.",
          "<b>Technology</b> – Computers, software, databases, networks."
        ]},
        { heading: "Main purposes", type: "list", items: [
          "Digital transformation.", "Manage business data and processes.",
          "Support remote work.", "Achieve business goals using IT.",
          "Connect IT investment with business strategy."
        ]}
      ]
    },
    {
      id: "t2", num: 2, icon: "🛠️", title: "Tasks of MIS", important: false,
      summary: "Five tasks: requirements, budget, progress, team support, communication.",
      sections: [
        { heading: "Five tasks", type: "terms", items: [
          { term: "Requirement tracking", def: "Understand user needs." },
          { term: "Budget tracking", def: "Monitor expenses." },
          { term: "Progress monitoring", def: "Check project progress." },
          { term: "Team support", def: "Training and troubleshooting." },
          { term: "Communication", def: "Connect technical and business teams." }
        ]}
      ]
    },
    {
      id: "t3", num: 3, icon: "🧩", title: "Specializations of MIS", important: false,
      summary: "Data, Software and Business specializations.",
      sections: [
        { heading: "A. Data Specialization", type: "list", items: [
          "Database management.", "SQL queries.", "Data analysis.", "ETL pipelines.", "BI reports."
        ]},
        { heading: "B. Software Specialization", type: "list", items: [
          "Software evaluation.", "Custom software development.", "System integration.", "Testing, deployment, maintenance."
        ]},
        { heading: "C. Business Specialization", type: "list", items: [
          "Align IT with business goals.", "Understand finance, marketing, HR.",
          "Identify business value.", "Manage organizational changes."
        ]}
      ]
    },
    {
      id: "t4", num: 4, icon: "🏢", title: "Popular MIS Systems", important: false,
      summary: "ERP, CRM, SRM, BI, SCM.",
      sections: [
        { heading: "Systems and their purpose", type: "table", headers: ["System", "Main Purpose"], rows: [
          ["ERP", "Integrates business activities"],
          ["CRM", "Manages customer relationships"],
          ["SRM", "Manages supplier relationships"],
          ["BI", "Analyzes data and creates reports"],
          ["SCM", "Manages supply chain"]
        ]}
      ]
    },
    {
      id: "t5", num: 5, icon: "🚀", title: "Future of MIS Systems", important: false,
      summary: "AI, Blockchain, RPA, Cloud, IoT, Cybersecurity.",
      sections: [
        { heading: "Six future technologies", type: "terms", items: [
          { term: "AI", def: "Intelligent analysis and automation." },
          { term: "Blockchain", def: "Secure and transparent transactions." },
          { term: "RPA", def: "Automates repetitive tasks." },
          { term: "Cloud Computing", def: "Computing over the internet." },
          { term: "IoT", def: "Connects physical devices." },
          { term: "Cybersecurity", def: "Protects systems and data." }
        ]}
      ]
    },
    {
      id: "t6", num: 6, icon: "✨", title: "What's New in MIS?", important: false,
      summary: "Five changes: IT, business models, e-commerce, management, organization.",
      sections: [
        { heading: "Remember these five changes", type: "terms", items: [
          { term: "IT Innovations", def: "Cloud, Mobile, Big Data, AI." },
          { term: "New Business Models", def: "Platform and Subscription." },
          { term: "E-commerce Expansion", def: "Mobile and Social Commerce." },
          { term: "Management Changes", def: "Remote teams, data-driven decisions." },
          { term: "Organizational Changes", def: "Flatter structure, collaboration." }
        ]}
      ]
    },
    {
      id: "t7", num: 7, icon: "⚠️", title: "Challenges of MIS", important: false,
      summary: "Globalization, COVID-19, cyber threats, talent shortage, rapid change.",
      sections: [
        { heading: "Five challenges", type: "list", items: [
          "Globalization.", "COVID-19 and remote work.", "Cybersecurity threats.",
          "Talent shortage.", "Rapid technology changes."
        ]}
      ]
    },
    {
      id: "t8", num: 8, icon: "🌐", title: "Emerging Digital Firm", important: true,
      summary: "Uses digital technology to manage major business activities, relationships and assets.",
      sections: [
        { heading: "Definition", type: "text",
          body: "An organization that uses digital technology to manage major business activities, relationships, and assets." },
        { heading: "Characteristics", type: "list", ordered: true, items: [
          "Significant digital business relationships.", "Digitized core business processes.",
          "Digital management of corporate assets.", "Flexibility – anytime, anywhere."
        ]},
        { heading: "Important terms", type: "terms", items: [
          { term: "Time Shifting", def: "Work beyond traditional working hours." },
          { term: "Place Shifting", def: "Work from different geographical locations." },
          { term: "Business Process", def: "A set of logically related activities to achieve a specific business result. Example: Order → Payment → Delivery." }
        ]}
      ]
    },
    {
      id: "t9", num: 9, icon: "⭐", title: "Six Strategic Business Objectives of IS", important: true,
      summary: "Very important: operational excellence, new products, intimacy, decisions, advantage, survival.",
      sections: [
        { heading: "The six objectives", type: "terms", ordered: true, items: [
          { term: "Operational Excellence", def: "Improve efficiency and productivity." },
          { term: "New Products, Services and Business Models", def: "Create new business opportunities." },
          { term: "Customer and Supplier Intimacy", def: "Build strong relationships." },
          { term: "Improved Decision Making", def: "Make better decisions using information." },
          { term: "Competitive Advantage", def: "Perform better than competitors." },
          { term: "Survival", def: "Use IT to remain in business." }
        ]},
        { heading: "Business Model", type: "text",
          body: "Describes how a company produces, delivers, and sells products or services to create wealth." }
      ],
      mnemonic: "Memory trick: O-N-C-I-C-S → <b>O</b>nce <b>N</b>ew <b>C</b>ustomers <b>I</b>mprove <b>C</b>ompany <b>S</b>urvival."
    },
    {
      id: "t10", num: 10, icon: "📊", title: "Information System (IS)", important: true,
      summary: "Interrelated components that collect, process, store and distribute information.",
      sections: [
        { heading: "Definition", type: "text",
          body: "A set of interrelated components that collect, process, store, and distribute information to support decision-making and control." },
        { heading: "IT vs IS", type: "table", headers: ["IT", "IS"], rows: [
          ["Technological tools", "Complete system"],
          ["Hardware and software", "People, processes, technology"],
          ["Example: Computer", "Example: Student management system"]
        ]},
        { heading: "Data vs Information", type: "terms", items: [
          { term: "Data", def: "Raw, unorganized facts." },
          { term: "Information", def: "Processed and meaningful data." }
        ]},
        { heading: "Four activities of IS", type: "terms", ordered: true, items: [
          { term: "Input", def: "Collect raw data." },
          { term: "Processing", def: "Convert data into information." },
          { term: "Output", def: "Produce useful information." },
          { term: "Feedback", def: "Evaluate and improve the system." }
        ]},
        { heading: "Example flow", type: "text", body: "Student marks → GPA calculation → Result → Error correction." }
      ],
      flow: ["Input", "Processing", "Output", "Feedback"]
    },
    {
      id: "t11", num: 11, icon: "🔺", title: "Dimensions of Information Systems", important: true,
      summary: "Organization, Management, Technology.",
      sections: [
        { heading: "Three dimensions", type: "terms", ordered: true, items: [
          { term: "Organization", def: "Structure, culture, politics, business processes." },
          { term: "Management", def: "Planning, decision-making, resource allocation." },
          { term: "Technology", def: "Hardware, software, databases, networks." }
        ]},
        { heading: "IS Literacy vs Computer Literacy", type: "terms", items: [
          { term: "Computer Literacy", def: "Knowledge of using computers." },
          { term: "IS Literacy", def: "Understanding the complete information system, including technology, management, and organization." }
        ]}
      ]
    },
    {
      id: "t12", num: 12, icon: "👥", title: "Organizations", important: false,
      summary: "Six types of people, four business functions, culture and politics.",
      sections: [
        { heading: "A. Types of people", type: "table", headers: ["Type", "Main Responsibility"], rows: [
          ["Senior Management", "Long-term decisions"],
          ["Middle Management", "Implement plans"],
          ["Operational Management", "Daily activities"],
          ["Knowledge Workers", "Create knowledge"],
          ["Data Workers", "Process information"],
          ["Production/Service Workers", "Produce goods or services"]
        ]},
        { heading: "B. Four business functions", type: "terms", ordered: true, items: [
          { term: "Sales and Marketing", def: "Find customers and promote products." },
          { term: "Manufacturing and Production", def: "Produce goods and services." },
          { term: "Finance and Accounting", def: "Manage money and records." },
          { term: "Human Resources", def: "Recruit and manage employees." }
        ]},
        { heading: "C. Other organizational elements", type: "terms", items: [
          { term: "Culture", def: "Shared values and beliefs." },
          { term: "Business Functions", def: "Activities of different departments." },
          { term: "Politics", def: "Conflicts over resources and decisions." }
        ]}
      ]
    },
    {
      id: "t13", num: 13, icon: "🧱", title: "Complementary Assets", important: true,
      summary: "Extra assets needed to get value from a primary investment.",
      sections: [
        { heading: "Definition", type: "text",
          body: "Additional assets required to get value from a primary investment." },
        { heading: "Three types", type: "terms", ordered: true, items: [
          { term: "Organizational Assets", def: "Supportive culture and efficient processes. Example: proper workflow and teamwork." },
          { term: "Managerial Assets", def: "Management support and collaboration. Example: managers support a new IT system." },
          { term: "Social Assets", def: "External infrastructure, standards and regulations. Example: Internet infrastructure and government regulations." }
        ]},
        { heading: "Remember", type: "text",
          body: "Technology alone is not enough. Proper people, management, processes, and infrastructure are also necessary." }
      ]
    }
  ],

  checklist: [
    "3 areas of MIS", "5 tasks of MIS", "3 specializations of MIS", "5 popular MIS systems",
    "6 future technologies", "5 changes in MIS", "5 challenges of MIS",
    "Digital firm characteristics + Time/Place Shifting", "6 strategic business objectives",
    "IT vs IS", "Data vs Information", "4 activities of IS", "3 dimensions of IS",
    "IS Literacy vs Computer Literacy", "6 types of organizational people",
    "4 business functions", "3 organizational elements", "3 types of complementary assets"
  ],

  flashcards: [
    { topic: "Motivation", q: "What three areas does MIS connect?", a: "Management, Organization and Technology." },
    { topic: "Tasks", q: "Name the five tasks of MIS.", a: "Requirement tracking, budget tracking, progress monitoring, team support, communication." },
    { topic: "Specializations", q: "Name the three MIS specializations.", a: "Data, Software and Business." },
    { topic: "Systems", q: "What does ERP do?", a: "Integrates business activities." },
    { topic: "Systems", q: "What does CRM manage?", a: "Customer relationships." },
    { topic: "Systems", q: "What does SRM manage?", a: "Supplier relationships." },
    { topic: "Systems", q: "What is BI used for?", a: "Analyzing data and creating reports." },
    { topic: "Systems", q: "What does SCM manage?", a: "The supply chain." },
    { topic: "Future", q: "List the six future technologies of MIS.", a: "AI, Blockchain, RPA, Cloud Computing, IoT, Cybersecurity." },
    { topic: "Future", q: "What is RPA?", a: "Automation of repetitive tasks." },
    { topic: "What's new", q: "What are the five changes in MIS?", a: "IT innovations, new business models, e-commerce expansion, management changes, organizational changes." },
    { topic: "Challenges", q: "List the five challenges of MIS.", a: "Globalization, COVID-19 and remote work, cybersecurity threats, talent shortage, rapid technology changes." },
    { topic: "Digital firm", q: "Define an emerging digital firm.", a: "An organization that uses digital technology to manage major business activities, relationships and assets." },
    { topic: "Digital firm", q: "What are the four characteristics of a digital firm?", a: "Digital business relationships, digitized core processes, digital management of assets, flexibility (anytime, anywhere)." },
    { topic: "Digital firm", q: "Time shifting vs place shifting?", a: "Time shifting: work beyond traditional hours. Place shifting: work from different locations." },
    { topic: "Digital firm", q: "What is a business process?", a: "A set of logically related activities to achieve a specific business result (e.g. Order → Payment → Delivery)." },
    { topic: "Objectives", q: "List the six strategic business objectives of IS.", a: "Operational excellence; new products, services and business models; customer and supplier intimacy; improved decision making; competitive advantage; survival." },
    { topic: "Objectives", q: "What is a business model?", a: "How a company produces, delivers and sells products or services to create wealth." },
    { topic: "IS", q: "Define an information system.", a: "Interrelated components that collect, process, store and distribute information to support decision-making and control." },
    { topic: "IS", q: "IT vs IS: what is the difference?", a: "IT is the technological tools (hardware, software). IS is the complete system: people, processes and technology." },
    { topic: "IS", q: "Data vs information?", a: "Data is raw, unorganized facts. Information is processed, meaningful data." },
    { topic: "IS", q: "What are the four activities of an IS?", a: "Input, Processing, Output, Feedback." },
    { topic: "Dimensions", q: "What are the three dimensions of IS?", a: "Organization, Management, Technology." },
    { topic: "Dimensions", q: "IS literacy vs computer literacy?", a: "Computer literacy is knowing how to use computers. IS literacy is understanding the whole system: technology, management and organization." },
    { topic: "Organizations", q: "Who makes long-term decisions?", a: "Senior management." },
    { topic: "Organizations", q: "What do knowledge workers do?", a: "Create knowledge." },
    { topic: "Organizations", q: "Name the four business functions.", a: "Sales & marketing, manufacturing & production, finance & accounting, human resources." },
    { topic: "Organizations", q: "What is organizational politics?", a: "Conflicts over resources and decisions." },
    { topic: "Complementary", q: "Define complementary assets.", a: "Additional assets required to get value from a primary investment." },
    { topic: "Complementary", q: "Name the three types of complementary assets.", a: "Organizational, managerial and social assets." },
    { topic: "Complementary", q: "Give an example of a social asset.", a: "Internet infrastructure and government regulations." }
  ],

  quiz: [
    { q: "Which three areas does MIS connect?", options: ["Sales, Finance, HR", "Management, Organization, Technology", "Hardware, Software, Network", "Data, People, Money"], answer: 1, why: "MIS links management, organization and technology." },
    { q: "Which MIS system manages customer relationships?", options: ["ERP", "SRM", "CRM", "SCM"], answer: 2, why: "CRM = Customer Relationship Management." },
    { q: "Which system integrates business activities?", options: ["ERP", "BI", "CRM", "SRM"], answer: 0, why: "ERP integrates business activities across the company." },
    { q: "Which technology automates repetitive tasks?", options: ["IoT", "RPA", "Blockchain", "Cloud"], answer: 1, why: "RPA = Robotic Process Automation." },
    { q: "Which technology offers secure and transparent transactions?", options: ["Blockchain", "AI", "IoT", "RPA"], answer: 0, why: "Blockchain provides secure, transparent transaction records." },
    { q: "Working beyond traditional working hours is called:", options: ["Place shifting", "Time shifting", "Outsourcing", "Digitization"], answer: 1, why: "Time shifting = work beyond traditional hours." },
    { q: "Working from different geographical locations is called:", options: ["Place shifting", "Time shifting", "Time sharing", "Offshoring"], answer: 0, why: "Place shifting = work from different locations." },
    { q: "Which is NOT one of the six strategic business objectives?", options: ["Survival", "Operational excellence", "Lower taxes", "Competitive advantage"], answer: 2, why: "Lower taxes is not on the list." },
    { q: "Using IT to remain in business is the objective of:", options: ["Survival", "Intimacy", "Excellence", "Innovation"], answer: 0, why: "Survival: firms use IT to stay in business." },
    { q: "Raw, unorganized facts are called:", options: ["Information", "Knowledge", "Data", "Feedback"], answer: 2, why: "Data = raw facts; information = processed data." },
    { q: "Which is the correct order of IS activities?", options: ["Input, Output, Processing, Feedback", "Input, Processing, Output, Feedback", "Processing, Input, Feedback, Output", "Feedback, Input, Processing, Output"], answer: 1, why: "Input → Processing → Output → Feedback." },
    { q: "Which best describes IT (not IS)?", options: ["People, processes and technology", "Hardware and software tools", "A student management system", "Culture and politics"], answer: 1, why: "IT is the technological tools; IS is the complete system." },
    { q: "The three dimensions of IS are:", options: ["Input, Output, Feedback", "Organization, Management, Technology", "Data, Software, Business", "People, Money, Time"], answer: 1, why: "IS has organization, management and technology dimensions." },
    { q: "Understanding technology, management AND organization is called:", options: ["Computer literacy", "IS literacy", "Digital literacy", "Data literacy"], answer: 1, why: "IS literacy is broader than computer literacy." },
    { q: "Who is responsible for long-term decisions?", options: ["Operational management", "Middle management", "Senior management", "Data workers"], answer: 2, why: "Senior management sets long-term direction." },
    { q: "Knowledge workers primarily:", options: ["Create knowledge", "Produce goods", "Process paperwork", "Manage daily tasks"], answer: 0, why: "Knowledge workers create knowledge." },
    { q: "Which is NOT one of the four business functions?", options: ["Sales and Marketing", "Human Resources", "Legal Affairs", "Finance and Accounting"], answer: 2, why: "The four are sales & marketing, manufacturing, finance & accounting, HR." },
    { q: "Complementary assets are:", options: ["The primary investment", "Extra assets needed to get value from an investment", "Hardware only", "Government subsidies"], answer: 1, why: "They help you capture value from the primary investment." },
    { q: "Supportive culture and efficient processes are which asset type?", options: ["Social", "Managerial", "Organizational", "Technical"], answer: 2, why: "That is the organizational asset." },
    { q: "Internet infrastructure and regulations are which asset type?", options: ["Social", "Managerial", "Organizational", "Financial"], answer: 0, why: "External infrastructure and standards are social assets." },
    { q: "A set of logically related activities for a business result is a:", options: ["Business model", "Business process", "Information system", "Digital firm"], answer: 1, why: "E.g. Order → Payment → Delivery." },
    { q: "Describing how a company produces, delivers and sells to create wealth defines a:", options: ["Business process", "Business model", "Business function", "Business culture"], answer: 1, why: "That is the business model." }
  ],

  match: [
    { term: "ERP", def: "Integrates business activities" },
    { term: "CRM", def: "Manages customer relationships" },
    { term: "SRM", def: "Manages supplier relationships" },
    { term: "BI", def: "Analyzes data, creates reports" },
    { term: "SCM", def: "Manages supply chain" },
    { term: "RPA", def: "Automates repetitive tasks" },
    { term: "IoT", def: "Connects physical devices" },
    { term: "Blockchain", def: "Secure, transparent transactions" },
    { term: "Time Shifting", def: "Work beyond traditional hours" },
    { term: "Place Shifting", def: "Work from different locations" },
    { term: "Culture", def: "Shared values and beliefs" },
    { term: "Politics", def: "Conflicts over resources" },
    { term: "Senior Management", def: "Long-term decisions" },
    { term: "Knowledge Workers", def: "Create knowledge" },
    { term: "Data Workers", def: "Process information" }
  ]
};

/* ====================== CHAPTER 2 ====================== */
const CH2 = {
  title: "MIS Chapter 2",
  examTip: "Focus especially on TPS, MIS, DSS, ESS comparison, Enterprise Applications, Order Fulfillment, and IT Governance.",
  topics: [
    {
      id: "c2t1", num: 1, icon: "🏭", title: "Opening Case: Sharp Corporation", important: false,
      summary: "Sharp used Yammer enterprise social networking to fix top-down communication.",
      sections: [
        { heading: "Background", type: "list", items: [
          "Japanese electronics company.", "Subsidiary of Taiwan-based Foxconn since 2016."
        ]},
        { heading: "Problem and solution", type: "terms", items: [
          { term: "Problem", def: "Hierarchical, top-down communication." },
          { term: "Solution", def: "Introduced Microsoft Yammer (enterprise social networking)." }
        ]},
        { heading: "Benefits", type: "list", items: [
          "Better communication.", "Knowledge sharing.", "More collaboration.", "Increased innovation.", "Reduced costs and improved productivity."
        ]}
      ],
      mnemonic: "<b>Exam point:</b> Sharp used enterprise social networking to improve internal communication and collaboration."
    },
    {
      id: "c2t2", num: 2, icon: "🔄", title: "How Business Challenges Lead to IS Solutions", important: false,
      summary: "Challenges → Management + Organization + Technology → IS → Solutions.",
      sections: [
        { heading: "Components", type: "table", headers: ["Component", "Meaning"], rows: [
          ["Business Challenges", "Problems faced by company"],
          ["Management", "Develops strategies"],
          ["Organization", "Changes processes and culture"],
          ["Technology", "Provides technical tools"],
          ["Information System", "Combines people, processes and technology"],
          ["Business Solutions", "Results of solving problems"]
        ]},
        { heading: "Flow to memorize", type: "text",
          body: "Business Challenges → Management + Organization + Technology → Information System → Business Solutions." }
      ],
      flow: ["Business Challenges", "Management + Organization + Technology", "Information System", "Business Solutions"]
    },
    {
      id: "c2t3", num: 3, icon: "⚙️", title: "Business Process", important: false,
      summary: "A set of logically related tasks performed to achieve a specific business result.",
      sections: [
        { heading: "Definition", type: "text", body: "A set of logically related tasks and activities performed to achieve a specific business result." },
        { heading: "Key points", type: "list", items: [
          "Every business has multiple processes.", "Processes can be formal or informal.",
          "Business processes are competitive assets.", "Poor processes reduce business performance."
        ]},
        { heading: "Example", type: "text", body: "Order → Payment → Product Preparation → Delivery." }
      ],
      flow: ["Order", "Payment", "Product Preparation", "Delivery"]
    },
    {
      id: "c2t4", num: 4, icon: "🗂️", title: "Types of Business Processes", important: false,
      summary: "Larger process, one functional area, or multiple functional areas.",
      sections: [
        { heading: "Three types", type: "table", headers: ["Type", "Example"], rows: [
          ["Larger business process", "Knowledge management"],
          ["Specific functional area", "Payroll processing in HR"],
          ["Multiple functional areas", "Customer order fulfillment"]
        ]},
        { heading: "Remember", type: "text", body: "More departments involved = greater need for integrated information systems." }
      ]
    },
    {
      id: "c2t5", num: 5, icon: "🏬", title: "Business Processes in Functional Areas", important: false,
      summary: "Manufacturing, sales & marketing, finance & accounting, human resources.",
      sections: [
        { heading: "Functional areas and activities", type: "table", headers: ["Functional Area", "Main Activities"], rows: [
          ["Manufacturing & Production", "Assembling, quality checking"],
          ["Sales & Marketing", "Finding customers, promoting, selling"],
          ["Finance & Accounting", "Paying creditors, financial reports"],
          ["Human Resources", "Hiring, evaluating employees, benefits"]
        ]}
      ]
    },
    {
      id: "c2t6", num: 6, icon: "📦", title: "Processes Across Multiple Functional Areas", important: true,
      summary: "Order fulfillment involves Sales, Accounting and Manufacturing.",
      sections: [
        { heading: "Order Fulfillment", type: "text", body: "Completing a customer's order from receiving it to delivering the product." },
        { heading: "Department responsibilities", type: "table", headers: ["Department", "Responsibility"], rows: [
          ["Sales", "Generate and submit orders"],
          ["Accounting", "Check credit, approve credit, generate invoices"],
          ["Manufacturing", "Assemble and ship products"]
        ]},
        { heading: "Why integrated systems are needed", type: "list", items: [
          "Share information.", "Reduce duplicate work.", "Improve coordination.", "Increase efficiency."
        ]}
      ],
      flow: ["Sales", "Accounting", "Manufacturing"]
    },
    {
      id: "c2t7", num: 7, icon: "🧾", title: "Transaction Processing Systems (TPS)", important: true,
      summary: "Computerized system that records and processes daily routine transactions.",
      sections: [
        { heading: "Definition", type: "text", body: "TPS is a computerized system that records and processes daily routine business transactions." },
        { heading: "Characteristics", type: "list", items: [
          "<b>Users:</b> Operational managers.", "Handles daily transactions.", "Supports routine and structured activities.",
          "Requires little managerial judgment.", "Monitors internal operations.", "Provides data to other information systems."
        ]},
        { heading: "Examples", type: "list", items: [
          "Sales transactions.", "Payroll.", "Cash deposits.", "Customer receipts.", "Inventory transactions.", "Credit decisions."
        ]},
        { heading: "Supermarket example", type: "list", ordered: true, items: [
          "Scan barcode.", "Calculate price.", "Record payment.", "Update inventory.", "Generate receipt."
        ]}
      ],
      flow: ["Scan barcode", "Calculate price", "Record payment", "Update inventory", "Generate receipt"]
    },
    {
      id: "c2t8", num: 8, icon: "💵", title: "Payroll TPS", important: false,
      summary: "Calculates and records employee salaries. Net Pay = Gross Pay − Total Deductions.",
      sections: [
        { heading: "Definition", type: "text", body: "A TPS that calculates and records employee salaries." },
        { heading: "Input, processing, output", type: "terms", items: [
          { term: "Input", def: "Employee time card / work data." },
          { term: "Processing", def: "Calculates salary and deductions." },
          { term: "Output", def: "Employee paychecks, management reports, government reports." }
        ]},
        { heading: "Important payroll fields", type: "table", headers: ["Field", "Meaning"], rows: [
          ["Employee Number", "Unique employee ID"],
          ["Gross Pay", "Salary before deductions"],
          ["Federal Tax", "Federal tax deduction"],
          ["FICA", "Social Security and Medicare-related payroll tax"],
          ["Medicare", "Medicare tax"],
          ["State Tax", "State tax deduction"],
          ["Net Pay", "Salary after deductions"],
          ["Year-to-date Earnings", "Total earnings during the year"]
        ]},
        { heading: "Formula", type: "formula", body: "Net Pay = Gross Pay − Total Deductions" }
      ],
      flow: ["Time card", "Calculate pay", "Paychecks + reports"]
    },
    {
      id: "c2t9", num: 9, icon: "📈", title: "Management Information Systems (MIS)", important: true,
      summary: "Summarized reports from TPS data for middle managers.",
      sections: [
        { heading: "Definition", type: "text", body: "MIS provides summarized information and reports from transaction data to help middle managers monitor performance and make routine decisions. Also called Business Intelligence Systems." },
        { heading: "Characteristics", type: "list", items: [
          "<b>Users:</b> Middle management.", "Uses TPS data.", "Provides regular reports.", "Shows current business performance.",
          "Answers predefined questions.", "Uses simple calculations and summaries.", "Supports structured decisions."
        ]},
        { heading: "Example", type: "text", body: "Monthly sales report showing total sales of each product." }
      ],
      flow: ["TPS Data", "MIS", "Reports / Dashboards"]
    },
    {
      id: "c2t10", num: 10, icon: "🧠", title: "Decision Support Systems (DSS)", important: true,
      summary: "Helps with unique, rapidly changing, nonroutine problems. Supports what-if analysis.",
      sections: [
        { heading: "Definition", type: "text", body: "DSS helps managers make decisions about unique, rapidly changing, and nonroutine problems." },
        { heading: "Characteristics", type: "list", items: [
          "<b>Users:</b> Middle and senior management.", "Supports semi-structured decisions.", "Handles unusual problems.",
          "Uses internal and external data.", "Compares alternative decisions.", "Supports What-if Analysis."
        ]},
        { heading: "What-if Analysis", type: "text", body: "Examines how changing certain conditions affects possible outcomes." },
        { heading: "Example questions", type: "list", items: [
          "What happens if price increases by 5%?", "What happens if price increases by 10%?", "How will profit and sales change?"
        ]}
      ]
    },
    {
      id: "c2t11", num: 11, icon: "👔", title: "Executive Support Systems (ESS)", important: true,
      summary: "Helps senior management with strategic decisions and long-term planning.",
      sections: [
        { heading: "Definition", type: "text", body: "ESS helps senior management make strategic decisions and perform long-term planning." },
        { heading: "Characteristics", type: "list", items: [
          "<b>Users:</b> Senior management / Executives.", "Supports long-term planning.", "Analyzes business trends.", "Forecasts future performance.",
          "Uses internal and external data.", "Monitors overall business performance.", "Displays information through dashboards."
        ]},
        { heading: "Digital Dashboard", type: "text", body: "A graphical display of important business information and KPIs." },
        { heading: "Example", type: "text", body: "CEO checks annual profit, market growth, competitors, and future trends." }
      ]
    },
    {
      id: "c2t12", num: 12, icon: "⚖️", title: "Comparison of TPS, MIS, DSS and ESS", important: true,
      summary: "Most important exam topic.",
      sections: [
        { heading: "Comparison table", type: "table", headers: ["Feature", "TPS", "MIS", "DSS", "ESS"], rows: [
          ["Full Form", "Transaction Processing System", "Management Information System", "Decision Support System", "Executive Support System"],
          ["Users", "Operational managers", "Middle managers", "Middle / Senior managers", "Senior managers"],
          ["Decisions", "Structured", "Structured", "Semi-structured", "Strategic"],
          ["Purpose", "Daily transactions", "Routine reports", "Analyze unusual problems", "Long-term planning"],
          ["Data", "Detailed", "Summarized TPS", "Internal + External", "MIS + DSS + External"],
          ["Example", "Payroll", "Monthly sales report", "What-if analysis", "Executive dashboard"]
        ]},
        { heading: "Four questions to memorize", type: "terms", ordered: true, items: [
          { term: "TPS", def: "What happened?" },
          { term: "MIS", def: "What is happening?" },
          { term: "DSS", def: "What should we do?" },
          { term: "ESS", def: "Where is the business heading?" }
        ]},
        { heading: "Moving upward", type: "list", items: [
          "Decisions become less structured.", "Decisions become more strategic.", "Data becomes more summarized.", "Managers need more analytical information."
        ]},
        { heading: "Note", type: "text", body: "DSS can also directly use TPS data and external data." }
      ],
      flow: ["TPS", "MIS", "DSS", "ESS"]
    },
    {
      id: "c2t13", num: 13, icon: "🔗", title: "Systems for Linking the Enterprise", important: true,
      summary: "Enterprise applications: ERP, SCM, CRM, KMS.",
      sections: [
        { heading: "Enterprise Applications", type: "text", body: "Large-scale information systems that integrate business processes and information across different departments." },
        { heading: "Why needed?", type: "list", items: [
          "Integrate departments.", "Share information.", "Coordinate activities.", "Improve efficiency."
        ]},
        { heading: "Four major enterprise applications", type: "table", headers: ["System", "Full Form / Purpose"], rows: [
          ["ERP", "Enterprise Resource Planning – Internal resources"],
          ["SCM", "Supply Chain Management – Suppliers and products"],
          ["CRM", "Customer Relationship Management – Customers"],
          ["KMS", "Knowledge Management System – Organizational knowledge"]
        ]},
        { heading: "Easy memory", type: "terms", items: [
          { term: "ERP", def: "Internal resources." }, { term: "SCM", def: "Supply chain." },
          { term: "CRM", def: "Customers." }, { term: "KMS", def: "Knowledge." }
        ]}
      ]
    },
    {
      id: "c2t14", num: 14, icon: "🌍", title: "Intranet, Extranet, E-business, E-commerce, E-government", important: false,
      summary: "E-commerce is a part of E-business.",
      sections: [
        { heading: "Definitions", type: "table", headers: ["Term", "Definition"], rows: [
          ["Intranet", "Private network within an organization"],
          ["Extranet", "Private network allowing authorized external users"],
          ["E-business", "Conducting business activities digitally"],
          ["E-commerce", "Buying and selling through the internet"],
          ["E-government", "Providing government services digitally"]
        ]},
        { heading: "Important differences", type: "list", items: [
          "Intranet = Internal users.", "Extranet = Internal + authorized external users.",
          "E-business = All digital business activities.", "E-commerce = Online buying and selling.", "<b>E-commerce is a part of E-business.</b>"
        ]}
      ]
    },
    {
      id: "c2t15", num: 15, icon: "💻", title: "Information Systems Department", important: false,
      summary: "Programmer, systems analyst, IS manager, external specialists.",
      sections: [
        { heading: "Definition", type: "text", body: "A department that manages and supports an organization's IT and information systems." },
        { heading: "Major specialists", type: "table", headers: ["Specialist", "Responsibility"], rows: [
          ["Programmer", "Writes and maintains programs"],
          ["Systems Analyst", "Studies problems and designs solutions"],
          ["IS Manager", "Manages IT staff, projects and operations"],
          ["External Specialists", "Provide outside expert services"]
        ]},
        { heading: "Systems Analyst", type: "list", items: [
          "Studies business problems.", "Understands user requirements.", "Designs information system solutions.", "Acts as a bridge between technical staff and business users."
        ]},
        { heading: "External Specialists", type: "text", body: "Outside professionals hired for specialized services. Example: external cybersecurity consultant." }
      ]
    },
    {
      id: "c2t16", num: 16, icon: "🏛️", title: "Department Heads and IT Governance", important: true,
      summary: "CIO, CISO, CPO, CKO, CDO and IT governance.",
      sections: [
        { heading: "Chief officers", type: "table", headers: ["Position", "Full Form", "Responsibility"], rows: [
          ["CIO", "Chief Information Officer", "Manages IT and aligns it with business strategy"],
          ["CISO", "Chief Information Security Officer", "Protects information systems"],
          ["CPO", "Chief Privacy Officer", "Ensures data privacy"],
          ["CKO", "Chief Knowledge Officer", "Manages organizational knowledge"],
          ["CDO", "Chief Data Officer", "Manages data quality and governance"]
        ]},
        { heading: "Easy memory", type: "terms", items: [
          { term: "CIO", def: "IT." }, { term: "CISO", def: "Security." }, { term: "CPO", def: "Privacy." },
          { term: "CKO", def: "Knowledge." }, { term: "CDO", def: "Data." }
        ]},
        { heading: "IT Governance – definition", type: "text", body: "Strategies, policies, decision rights, and accountability structures that ensure IT investments support organizational goals." },
        { heading: "Example questions", type: "list", items: [
          "Who can approve IT purchases?", "Who can access sensitive data?", "Who manages cybersecurity?"
        ]}
      ]
    }
  ],

  checklist: [
    "Sharp Corporation: Problem, Solution and Benefits", "Business Challenges → IS Solutions flow",
    "Business Process definition and characteristics", "3 Types of Business Processes",
    "4 Functional Areas and their activities", "Order Fulfillment: Sales, Accounting, Manufacturing",
    "TPS: Definition, users, characteristics and examples", "Payroll TPS and Net Pay formula",
    "MIS: Definition, users and characteristics", "DSS and What-if Analysis", "ESS and Digital Dashboard",
    "TPS vs MIS vs DSS vs ESS comparison", "Four Enterprise Applications: ERP, SCM, CRM, KMS",
    "Intranet vs Extranet", "E-business vs E-commerce vs E-government", "4 IS Department Specialists",
    "Systems Analyst definition and role", "CIO, CISO, CPO, CKO, CDO", "IT Governance definition"
  ],

  flashcards: [
    { topic: "Sharp", q: "What was Sharp's communication problem?", a: "Hierarchical, top-down communication." },
    { topic: "Sharp", q: "What solution did Sharp adopt?", a: "Microsoft Yammer, an enterprise social networking tool." },
    { topic: "Sharp", q: "Name the benefits Sharp gained.", a: "Better communication, knowledge sharing, more collaboration, increased innovation, reduced costs and improved productivity." },
    { topic: "Flow", q: "Business challenge to solution flow?", a: "Business challenges → Management + Organization + Technology → Information System → Business solutions." },
    { topic: "Process", q: "Define a business process.", a: "A set of logically related tasks and activities performed to achieve a specific business result." },
    { topic: "Process", q: "Why are business processes competitive assets?", a: "Well-designed processes improve performance; poor processes reduce it." },
    { topic: "Process", q: "Three types of business processes with examples?", a: "Larger process (knowledge management), one functional area (payroll in HR), multiple functional areas (order fulfillment)." },
    { topic: "Functional areas", q: "Main activities of Manufacturing & Production?", a: "Assembling and quality checking." },
    { topic: "Functional areas", q: "Main activities of Finance & Accounting?", a: "Paying creditors and creating financial reports." },
    { topic: "Order fulfillment", q: "Define order fulfillment.", a: "Completing a customer's order from receiving it to delivering the product." },
    { topic: "Order fulfillment", q: "Who does what in order fulfillment?", a: "Sales generates and submits orders; accounting checks/approves credit and invoices; manufacturing assembles and ships." },
    { topic: "TPS", q: "Define TPS.", a: "A computerized system that records and processes daily routine business transactions." },
    { topic: "TPS", q: "Who uses a TPS?", a: "Operational managers." },
    { topic: "TPS", q: "Give the supermarket TPS steps.", a: "Scan barcode, calculate price, record payment, update inventory, generate receipt." },
    { topic: "Payroll", q: "Net pay formula?", a: "Net Pay = Gross Pay − Total Deductions." },
    { topic: "Payroll", q: "What is gross pay?", a: "Salary before deductions." },
    { topic: "Payroll", q: "Outputs of a payroll TPS?", a: "Employee paychecks, management reports and government reports." },
    { topic: "MIS", q: "Define MIS (Chapter 2 sense).", a: "Provides summarized information and reports from transaction data to help middle managers monitor performance and make routine decisions." },
    { topic: "MIS", q: "Which data does MIS use?", a: "TPS data, summarized into reports and dashboards." },
    { topic: "DSS", q: "Define DSS.", a: "Helps managers decide about unique, rapidly changing, nonroutine problems." },
    { topic: "DSS", q: "What is what-if analysis?", a: "Examining how changing certain conditions affects possible outcomes." },
    { topic: "DSS", q: "Type of decisions supported by DSS?", a: "Semi-structured decisions." },
    { topic: "ESS", q: "Define ESS.", a: "Helps senior management make strategic decisions and perform long-term planning." },
    { topic: "ESS", q: "What is a digital dashboard?", a: "A graphical display of important business information and KPIs." },
    { topic: "Comparison", q: "The four questions: TPS, MIS, DSS, ESS?", a: "TPS: What happened? MIS: What is happening? DSS: What should we do? ESS: Where is the business heading?" },
    { topic: "Comparison", q: "Which data does ESS use?", a: "MIS + DSS + external data." },
    { topic: "Comparison", q: "Which system supports strategic decisions?", a: "ESS." },
    { topic: "Enterprise", q: "What are enterprise applications?", a: "Large-scale systems that integrate business processes and information across departments." },
    { topic: "Enterprise", q: "ERP, SCM, CRM, KMS: purposes?", a: "ERP: internal resources. SCM: supply chain. CRM: customers. KMS: organizational knowledge." },
    { topic: "E-terms", q: "Intranet vs extranet?", a: "Intranet: private network for internal users. Extranet: also lets authorized external users in." },
    { topic: "E-terms", q: "E-business vs e-commerce?", a: "E-business covers all digital business activities; e-commerce (online buying and selling) is a part of it." },
    { topic: "E-terms", q: "What is e-government?", a: "Providing government services digitally." },
    { topic: "IS dept", q: "Who is a systems analyst?", a: "Studies business problems, understands requirements, designs IS solutions and bridges technical staff and business users." },
    { topic: "IS dept", q: "Name the four IS department specialists.", a: "Programmer, systems analyst, IS manager, external specialists." },
    { topic: "Governance", q: "CIO, CISO, CPO, CKO, CDO?", a: "IT, security, privacy, knowledge, data." },
    { topic: "Governance", q: "Define IT governance.", a: "Strategies, policies, decision rights and accountability structures that ensure IT investments support organizational goals." }
  ],

  quiz: [
    { q: "What did Sharp introduce to improve communication?", options: ["SAP", "Microsoft Yammer", "Salesforce", "Slack"], answer: 1, why: "Yammer is an enterprise social networking tool." },
    { q: "Sharp is a subsidiary of which company?", options: ["Sony", "Samsung", "Foxconn", "Toshiba"], answer: 2, why: "Taiwan-based Foxconn since 2016." },
    { q: "Which flow is correct?", options: ["Technology → Challenges → IS", "Challenges → Management + Organization + Technology → IS → Solutions", "IS → Challenges → Solutions", "Solutions → IS → Challenges"], answer: 1, why: "Challenges are solved through M + O + T, via an IS." },
    { q: "Order fulfillment is an example of a process in:", options: ["One functional area", "Multiple functional areas", "No functional area", "HR only"], answer: 1, why: "Sales, accounting and manufacturing all take part." },
    { q: "In order fulfillment, who checks and approves credit?", options: ["Sales", "Manufacturing", "Accounting", "HR"], answer: 2, why: "Accounting checks credit, approves it and generates invoices." },
    { q: "Who primarily uses a TPS?", options: ["Senior managers", "Operational managers", "Executives", "Customers"], answer: 1, why: "TPS supports daily operations." },
    { q: "Which is a TPS example?", options: ["Executive dashboard", "What-if analysis", "Payroll", "Monthly summary report"], answer: 2, why: "Payroll records daily routine transactions." },
    { q: "Net Pay equals:", options: ["Gross Pay + Deductions", "Gross Pay − Total Deductions", "Gross Pay × Tax", "Year-to-date earnings"], answer: 1, why: "Net pay is what remains after deductions." },
    { q: "Which system provides summarized reports from TPS data to middle managers?", options: ["TPS", "MIS", "DSS", "ESS"], answer: 1, why: "MIS summarizes TPS data." },
    { q: "Which system supports what-if analysis?", options: ["TPS", "MIS", "DSS", "KMS"], answer: 2, why: "DSS compares alternative decisions with what-if analysis." },
    { q: "DSS supports which type of decisions?", options: ["Structured", "Semi-structured", "Strategic only", "None"], answer: 1, why: "DSS handles semi-structured, nonroutine problems." },
    { q: "Which system helps senior management with long-term planning?", options: ["ESS", "TPS", "MIS", "CRM"], answer: 0, why: "ESS supports strategic decisions." },
    { q: "A graphical display of KPIs for executives is a:", options: ["Payroll record", "Digital dashboard", "Extranet", "Invoice"], answer: 1, why: "Digital dashboards show key information visually." },
    { q: "Which question matches TPS?", options: ["What happened?", "What is happening?", "What should we do?", "Where is the business heading?"], answer: 0, why: "TPS records what happened." },
    { q: "Which question matches ESS?", options: ["What happened?", "What is happening?", "What should we do?", "Where is the business heading?"], answer: 3, why: "ESS looks at long-term direction." },
    { q: "Which question matches DSS?", options: ["What happened?", "What is happening?", "What should we do?", "Where is the business heading?"], answer: 2, why: "DSS helps choose among alternatives." },
    { q: "Which system uses MIS + DSS + external data?", options: ["TPS", "MIS", "DSS", "ESS"], answer: 3, why: "That is the ESS data source." },
    { q: "ERP mainly integrates:", options: ["Customers", "Internal resources", "Suppliers", "Knowledge"], answer: 1, why: "ERP = Enterprise Resource Planning." },
    { q: "Which application manages customers?", options: ["ERP", "SCM", "CRM", "KMS"], answer: 2, why: "CRM = Customer Relationship Management." },
    { q: "KMS manages:", options: ["Suppliers", "Organizational knowledge", "Payroll", "Taxes"], answer: 1, why: "KMS = Knowledge Management System." },
    { q: "An extranet allows:", options: ["Only internal users", "Authorized external users too", "Everyone", "Nobody"], answer: 1, why: "Extranet = private network with authorized outsiders." },
    { q: "Which statement is correct?", options: ["E-business is part of e-commerce", "E-commerce is part of e-business", "They are unrelated", "E-government is e-commerce"], answer: 1, why: "E-business is the broader term." },
    { q: "Who bridges technical staff and business users?", options: ["Programmer", "Systems analyst", "CIO", "Operator"], answer: 1, why: "Systems analysts translate between the two." },
    { q: "Which officer protects information systems?", options: ["CIO", "CISO", "CPO", "CKO"], answer: 1, why: "CISO = security." },
    { q: "Which officer ensures data privacy?", options: ["CPO", "CDO", "CKO", "CIO"], answer: 0, why: "CPO = privacy." },
    { q: "IT governance is best defined as:", options: ["Buying hardware", "Strategies, policies, decision rights and accountability for IT", "Writing code", "Network cabling"], answer: 1, why: "It ensures IT investments support organizational goals." }
  ],

  match: [
    { term: "TPS", def: "What happened?" },
    { term: "MIS", def: "What is happening?" },
    { term: "DSS", def: "What should we do?" },
    { term: "ESS", def: "Where is the business heading?" },
    { term: "ERP", def: "Internal resources" },
    { term: "SCM", def: "Suppliers and products" },
    { term: "CRM", def: "Customers" },
    { term: "KMS", def: "Organizational knowledge" },
    { term: "CIO", def: "Manages IT, aligns with strategy" },
    { term: "CISO", def: "Protects information systems" },
    { term: "CPO", def: "Ensures data privacy" },
    { term: "CKO", def: "Manages organizational knowledge" },
    { term: "CDO", def: "Data quality and governance" },
    { term: "Intranet", def: "Private network inside the organization" },
    { term: "Extranet", def: "Private network with authorized outsiders" }
  ]
};

/* ====================== CHAPTER REGISTRY ====================== */
const CHAPTERS = {
  ch1: { label: "Chapter 1 · Intro to MIS", data: CH1 },
  ch2: { label: "Chapter 2 · Business Processes & IS", data: CH2 }
};
const MIS_DATA = CH1; // kept for backward compatibility
