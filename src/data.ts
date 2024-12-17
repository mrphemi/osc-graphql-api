const courses = [
  {
    id: "CS101",
    title: "Introduction to Computer Programming",
    description:
      "A foundational course covering basic programming concepts, algorithms, and problem-solving techniques using Python. Students will learn variables, control structures, functions, and basic data structures.",
    duration: "12 weeks",
    outcome:
      "Students will be able to write basic programs, understand fundamental programming concepts, and solve simple computational problems.",
  },
  {
    id: "BUS202",
    title: "Business Strategy and Management",
    description:
      "Comprehensive overview of business strategy formulation, competitive analysis, and organizational management. Includes case studies from leading companies.",
    duration: "10 weeks",
    outcome:
      "Ability to analyze business environments, develop strategic plans, and understand core management principles.",
  },
  {
    id: "ART305",
    title: "Digital Design Fundamentals",
    description:
      "Exploration of digital design principles, tools, and techniques. Covers color theory, typography, layout design, and industry-standard software.",
    duration: "8 weeks",
    outcome:
      "Create professional digital designs and understand fundamental design principles and best practices.",
  },
  {
    id: "MATH201",
    title: "Applied Statistics",
    description:
      "Introduction to statistical methods and their applications in real-world scenarios. Covers probability, hypothesis testing, regression analysis, and data visualization.",
    duration: "14 weeks",
    outcome:
      "Apply statistical methods to analyze data, make predictions, and draw meaningful conclusions from datasets.",
  },
  {
    id: "ENG304",
    title: "Creative Writing Workshop",
    description:
      "Intensive workshop focusing on various forms of creative writing including short stories, poetry, and creative non-fiction. Includes peer review sessions.",
    duration: "6 weeks",
    outcome:
      "Produce original creative works, develop a unique writing voice, and effectively critique others' writing.",
  },
  {
    id: "PSYCH101",
    title: "Introduction to Psychology",
    description:
      "Survey of fundamental psychological concepts, theories, and research methods. Explores human behavior, cognition, and emotional development.",
    duration: "16 weeks",
    outcome:
      "Understanding of basic psychological principles and their application to daily life and human behavior.",
  },
  {
    id: "MKT303",
    title: "Digital Marketing Strategies",
    description:
      "Comprehensive study of digital marketing channels, tools, and strategies. Covers social media, content marketing, SEO, and analytics.",
    duration: "10 weeks",
    outcome:
      "Create and implement effective digital marketing campaigns across multiple platforms.",
  },
  {
    id: "BIO205",
    title: "Environmental Biology",
    description:
      "Study of ecosystems, biodiversity, and human impact on the environment. Includes field work and environmental case studies.",
    duration: "12 weeks",
    outcome:
      "Understand ecological principles and evaluate environmental challenges and conservation strategies.",
  },
  {
    id: "PHIL202",
    title: "Ethics in Technology",
    description:
      "Examination of ethical issues in technology development and implementation. Covers privacy, AI ethics, digital rights, and professional responsibility.",
    duration: "8 weeks",
    outcome:
      "Evaluate ethical implications of technology and make informed decisions in professional contexts.",
  },
  {
    id: "DATA401",
    title: "Data Visualization and Analytics",
    description:
      "Advanced course in data visualization techniques and analytical methods. Covers tools like Tableau, Python libraries, and storytelling with data.",
    duration: "15 weeks",
    outcome:
      "Create compelling data visualizations and effectively communicate complex data insights to various audiences.",
  },
];

const collections = [
  {
    id: "COL-001",
    name: "Technology and Computing",
    courses: [
      {
        id: "CS101",
        title: "Introduction to Computer Programming",
        description:
          "A foundational course covering basic programming concepts, algorithms, and problem-solving techniques using Python. Students will learn variables, control structures, functions, and basic data structures.",
        duration: "12 weeks",
        outcome:
          "Students will be able to write basic programs, understand fundamental programming concepts, and solve simple computational problems.",
      },
      {
        id: "DATA401",
        title: "Data Visualization and Analytics",
        description:
          "Advanced course in data visualization techniques and analytical methods. Covers tools like Tableau, Python libraries, and storytelling with data.",
        duration: "15 weeks",
        outcome:
          "Create compelling data visualizations and effectively communicate complex data insights to various audiences.",
      },
      {
        id: "PHIL202",
        title: "Ethics in Technology",
        description:
          "Examination of ethical issues in technology development and implementation. Covers privacy, AI ethics, digital rights, and professional responsibility.",
        duration: "8 weeks",
        outcome:
          "Evaluate ethical implications of technology and make informed decisions in professional contexts.",
      },
    ],
  },
  {
    id: "COL-002",
    name: "Business and Marketing",
    courses: [
      {
        id: "BUS202",
        title: "Business Strategy and Management",
        description:
          "Comprehensive overview of business strategy formulation, competitive analysis, and organizational management. Includes case studies from leading companies.",
        duration: "10 weeks",
        outcome:
          "Ability to analyze business environments, develop strategic plans, and understand core management principles.",
      },
      {
        id: "MKT303",
        title: "Digital Marketing Strategies",
        description:
          "Comprehensive study of digital marketing channels, tools, and strategies. Covers social media, content marketing, SEO, and analytics.",
        duration: "10 weeks",
        outcome:
          "Create and implement effective digital marketing campaigns across multiple platforms.",
      },
    ],
  },
  {
    id: "COL-003",
    name: "Creative Arts",
    courses: [
      {
        id: "ART305",
        title: "Digital Design Fundamentals",
        description:
          "Exploration of digital design principles, tools, and techniques. Covers color theory, typography, layout design, and industry-standard software.",
        duration: "8 weeks",
        outcome:
          "Create professional digital designs and understand fundamental design principles and best practices.",
      },
      {
        id: "ENG304",
        title: "Creative Writing Workshop",
        description:
          "Intensive workshop focusing on various forms of creative writing including short stories, poetry, and creative non-fiction. Includes peer review sessions.",
        duration: "6 weeks",
        outcome:
          "Produce original creative works, develop a unique writing voice, and effectively critique others' writing.",
      },
    ],
  },
  {
    id: "COL-004",
    name: "Science and Analytics",
    courses: [
      {
        id: "MATH201",
        title: "Applied Statistics",
        description:
          "Introduction to statistical methods and their applications in real-world scenarios. Covers probability, hypothesis testing, regression analysis, and data visualization.",
        duration: "14 weeks",
        outcome:
          "Apply statistical methods to analyze data, make predictions, and draw meaningful conclusions from datasets.",
      },
      {
        id: "BIO205",
        title: "Environmental Biology",
        description:
          "Study of ecosystems, biodiversity, and human impact on the environment. Includes field work and environmental case studies.",
        duration: "12 weeks",
        outcome:
          "Understand ecological principles and evaluate environmental challenges and conservation strategies.",
      },
    ],
  },
  {
    id: "COL-005",
    name: "Human Behavior and Psychology",
    courses: [
      {
        id: "PSYCH101",
        title: "Introduction to Psychology",
        description:
          "Survey of fundamental psychological concepts, theories, and research methods. Explores human behavior, cognition, and emotional development.",
        duration: "16 weeks",
        outcome:
          "Understanding of basic psychological principles and their application to daily life and human behavior.",
      },
    ],
  },
];
