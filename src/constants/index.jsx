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

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    summary:
      "This role sparked my transition into software development as I worked closely with engineers and led projects from idea to delivery.",
    logoPath: "/images/logo.png",
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
    logoPath: "/images/logo.png",
    title: "Freelance Technical Writer & Research Consultant",
    date: "Feb 2020 - Feb 2022",
    responsibilities: [
      "Authored 10+ technical reports monthly and 8+ startup proposals.",
      "Designed interactive visuals to simplify complex findings.",
      "Specialized in turning abstract ideas into structured, clear content.",
    ],
  },
  {
    summary:
      "Leading this collaborative Python project allowed me to apply Agile practices and hands-on backend dev work in a fun, team-driven setting.",
    logoPath: "/images/logo.png",
    title: "Scrum Lead & Backend Dev - Monster Battle CLI Game",
    date: "2024",
    responsibilities: [
      "Led a dev team using Agile sprints and daily standups.",
      "Built game logic and database models using SQLAlchemy.",
      "Facilitated retrospectives and improved team collaboration.",
    ],
  },
  {
    summary:
      "This project deepened my understanding of user behavior and helped me create software that empowers people to be intentional with their time.",
    logoPath: "/images/logo.png",
    title: "Full Stack Developer - Aligna (Productivity App)",
    date: "2024",
    responsibilities: [
      "Built frontend with React and backend using Flask + SQLAlchemy.",
      "Designed features to link goals with live meeting sessions.",
      "Implemented authentication and database schema design.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "GitHub",
    url: "https://github.com/shirocodes/practice-",
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
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};