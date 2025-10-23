export const myProjects = [
  {
    id: 1,
    title: "Jacal.io - Student Learning Platform",
    description:
      "Production full-stack spaced repetition learning platform serving students with adaptive learning algorithms.",
    subDescription: [
      "Built production full-stack application using React, Node.js, and PostgreSQL with OAuth 2.0 authentication, deployed on Vercel's serverless infrastructure serving users at jacal.io",
      "Engineered adaptive spaced repetition algorithm implementing Anki's SM-2 methodology with 4-difficulty rating system and dynamic interval scheduling based on user performance",
      "Designed normalized PostgreSQL database schema with 8 tables managing user authentication, flashcard hierarchies, study sessions, and daily analytics with row-level security policies and optimized indexing",
      "Implemented persistent study session state across page refreshes, GitHub-style contribution heatmap tracking daily review activity, and support for multiple card types including Cloze deletion and image occlusion for medical students",
    ],
    href: "https://jacal.io",
    logo: "",
    image: "/assets/projects/jacal.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 4,
        name: "Vercel",
        path: "/assets/logos/vercel.svg",
      },
    ],
  },
  {
    id: 2,
    title: "DevTools - AI-Powered Bug Tracking Automation",
    description:
      "Intelligent Slack bot that automatically triages bug reports, creates Jira tickets, and generates GitHub pull requests with AI-suggested fixes.",
    subDescription: [
      "Built automated workflow system integrating Slack, Jira, and GitHub APIs to streamline bug tracking from report to pull request, reducing manual triage time by automating ticket creation and code fix suggestions",
      "Implemented AI-powered bug analysis using Google Gemini 2.0 Flash to parse Slack conversations, extract reproduction steps, assess severity levels, and generate targeted code patches with test plans",
      "Engineered GitHub integration using PyGithub to automatically create feature branches, commit AI-generated fixes, and open pull requests with comprehensive descriptions linking back to Jira tickets",
      "Designed structured configuration system with Pydantic for managing multi-service credentials, repository context, and workflow settings across Slack Socket Mode, Jira REST API, and GitHub App authentication",
    ],
    href: "https://github.com/ChrisAlexz/DevTools",
    logo: "",
    image: "/assets/projects/devtools.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Slack",
        path: "/assets/logos/slack.svg",
      },
      {
        id: 3,
        name: "Jira",
        path: "/assets/logos/jira.svg",
      },
      {
        id: 4,
        name: "GitHub",
        path: "/assets/logos/github.svg",
      },
    ],
  },
  {
    id: 3,
    title: "SmartFridge - AI-Powered Recipe Generator",
    description:
      "Full-stack web application that generates personalized recipes from fridge photos using Google's Gemini AI.",
    subDescription: [
      "Developed full-stack web application using FastAPI backend and vanilla JavaScript frontend that generates personalized recipes from fridge photos using Google's Gemini 2.5 Flash vision AI model",
      "Implemented multi-modal ingredient detection system supporting image uploads (JPEG, PNG) and PDF documents, with manual ingredient input feature for enhanced accuracy",
      "Deployed production application on Render with Python 3.11, managing environment configuration, dependency optimization, and automated CI/CD pipeline from GitHub repository",
    ],
    href: "https://smart-fridge-xs9v.onrender.com/",
    logo: "",
    image: "/assets/projects/SmartFridge.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "Gemini AI",
        path: "/assets/logos/gemini.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/ChrisAlexz",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/chris-hernandez-/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Email",
    href: "mailto:chrishern869@gmail.com",
    icon: "/assets/socials/email.svg",
  },
];

export const experiences = [
  {
    title: "Programming Intern",
    job: "Projection Inc.",
    date: "June 2025 - Aug 2025",
    contents: [
      "Utilized MySQL for data analysis and optimization, writing complex queries to extract insights and generate reports from conference databases",
      "Maintained and updated participant portal using Visual Basic, managing user uploads and event information for conference attendees",
      "Customized client websites based on specific requirements and preferences, ensuring tailored solutions for diverse business needs",
    ],
  },
  {
    title: "Administrative Operations Specialist",
    job: "Global Janitorial & Multi Services",
    date: "June 2020 - Jan 2025",
    contents: [
      "Oversee comprehensive accounting operations, ensuring accurate financial record-keeping and compliance with company policies and regulatory requirements",
      "Manage bank processing activities including transaction monitoring, reconciliation, and payment processing to maintain optimal cash flow",
      "Monitor and analyze cash flow patterns and financial data to support strategic decision-making and identify areas for operational improvement",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];