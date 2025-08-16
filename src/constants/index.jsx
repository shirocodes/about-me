const navLinks = [
  { name: 'Home', link: '#hero' },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  // { text: "Ideas", imgPath: "/images/ideas.svg" },
  // { text: "Concepts", imgPath: "/images/concepts.svg" },
  // { text: "Designs", imgPath: "/images/designs.svg" },
  // { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];
const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
    mobileImgUrl: 'https://res.cloudinary.com/da3jrfrrc/image/upload/w_120,h_120,c_fit,f_auto,q_auto/v1755254186/react_t5wlxg.png'
  },
  {
    name: "Backend Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
    mobileImgUrl: "https://res.cloudinary.com/da3jrfrrc/image/upload/w_120,h_120,c_fit,f_auto,q_auto/v1755252838/python_dihgrt.png"
  },
  {
    name: "Frontend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
    mobileImgUrl: "https://res.cloudinary.com/da3jrfrrc/image/upload/w_120,h_120,c_fit,f_auto,q_auto/v1755252840/js_xxuh4b.png"
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
    mobileImgUrl: "https://res.cloudinary.com/da3jrfrrc/image/upload/w_120,h_150,c_fit,f_auto,q_auto/v1755252832/interactive_dev_z63pso.png"
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
    mobileImgUrl: "https://res.cloudinary.com/da3jrfrrc/image/upload/w_120,h_120,c_fit,f_auto,q_auto/v1755252838/pm_cnbnzd.png"
  },
];

const expCards = [
  {
    summary:
      "Led the development of a full-stack loan management platform that integrates real-time mobile payments. This project sharpened my skills in secure backend architecture and API-driven workflows.",
    logoPath: "https://res.cloudinary.com/da3jrfrrc/image/upload/w_50,f_auto,q_auto/v1755005965/logo_k4aqbj.png",
    title: "Project Lead - SokoCredit (Loan Management Platform)",
    date: "2025",
    responsibilities: [
    "Coordinated a small agile team to design and deliver secure APIs using Flask, PostgreSQL, and JWT-based auth.",
    "Integrated M-Pesa and PayPal APIs for real-time microloan processing, ensuring input validation and error handling.",
    "Led development sprints and introduced CI/CD with Docker and GitHub Actions to streamline collaboration and deployment.",
    ],
  },
  {
    summary:
      "This project deepened my understanding of user behavior and helped me create software that empowers people to be intentional with their time.",
    logoPath: "https://res.cloudinary.com/da3jrfrrc/image/upload/w_50,f_auto,q_auto/v1755005965/logo_k4aqbj.png",
    title: "Full Stack Developer - Aligna (Productivity App)",
    date: "2025",
    responsibilities: [
      "Built frontend with React and backend using Flask + SQLAlchemy.",
      "Designed features to link goals with live meeting sessions.",
      "Implemented authentication and database schema design.",
    ],
  },
  {
    summary:
      "This role sparked my transition into software development as I worked closely with engineers and led projects from idea to delivery.",
    logoPath: "https://res.cloudinary.com/da3jrfrrc/image/upload/w_50,f_auto,q_auto/v1755005965/logo_k4aqbj.png",
    title: "Freelance Technical Project Manager",
    date: "Feb 2022 - Mar 2024",
    responsibilities: [
      "Managed 5-7-person dev teams and delivered 98% of projects on time.",
      "Introduced Agile sprints and syncs, improving team efficiency by 15%.",
      "Transformed client ideas into actionable technical roadmaps.",
    ],
  },
  {
    summary:
      "This role built my foundation in breaking down complex topics — a skill I now use in dev writing and documentation.",
   logoPath: "https://res.cloudinary.com/da3jrfrrc/image/upload/w_50,f_auto,q_auto/v1755005965/logo_k4aqbj.png",
    title: "Freelance Technical Writer & Research Consultant",
    date: "Feb 2020 - Feb 2022",
    responsibilities: [
      "Authored 10+ technical reports monthly and 8+ startup proposals.",
      "Designed interactive visuals to simplify complex findings.",
      "Specialized in turning abstract ideas into structured, clear content.",
    ],
  },
];

const socialImgs = [
  {
    name: "GitHub",
    url: "https://github.com/shirocodes",
    imgPath: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    name: "linkedin",
    url: "www.linkedin.com/in/wanjiru-muchiri",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "Dev.to",
    url: "https://dev.to/wanjiru_muchiri/when-letting-go-control-meant-react-taking-over-a-lesson-on-agile-and-development-3ik3", 
    imgPath: "/images/dev.png"
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  socialImgs,
  techStackIcons,
  navLinks,
};