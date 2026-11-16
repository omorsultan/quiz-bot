// All study content for the MIS Chapter 1 revision site.
// Section types: "list" (items), "table" (headers + rows), "terms" (term/def pairs), "text" (body)

const MIS_DATA = {
  title: "MIS Chapter 1",
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
