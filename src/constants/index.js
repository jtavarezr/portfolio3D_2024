import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  amazon_ads,
  tesla,
  shopify,
  carrent,
  jobs,
  jobit,
  tripguide,
  threejs,
  templaris,
  zibernet,
  baseball,
  marvel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },

  {
    id: "tech",
    title: "Tech",
  },

  {
    id: "works",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },

  {
    id: "feedbacks",
    title: "Feedbacks",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Engineer",
    company_name: "Amazon ads",
    icon: amazon_ads,
    iconBg: "#383E56",
    date: "June 2019 - January 2024",
    points: [
      "Accelerated application development for over 100 internal teams, reducing maintenance costs by 10% and boosting productivity by 15%",
      "Enhanced web applications deployed on AWS, achieving a 20% performance improvement and a 15% increase in usability and functionality",
      "Optimized database architectures, including NoSQL solutions, reducing retrieval times by 30% and improving system reliability",
      "Architected scalable cloud infrastructure with AWS, achieving 99.99% uptime and a 40% improvement in disaster recovery",
      "Conducted code reviews, mentoring junior engineers, and reducing bugs by 35% while improving maintainability by 50%",
    ],
  },
  {
    title: "Technology Project Advisor",
    company_name: "Zibernet",
    icon: zibernet,
    iconBg: "#E6DEDD",
    date: "May 2019 - Feb 2023",
    points: [
      "Designed and implemented sophisticated performance reporting dashboards using SQL and data visualization tools, leading to a 30% improvement in decision-making speed",
      "Streamlined customer support processes through detailed user-centric documentation, resulting in a 25% reduction in support ticket volume.",
      "Architected and deployed scalable solutions incorporating advanced technologies and best practices, achieving a 35% improvement in application responsiveness.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "IT Manager",
    company_name: "Templaris",
    icon: templaris,
    iconBg: "#383E56",
    date: "Feb 2018 - May 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Oversaw the technological infrastructure and IT support for a financial services call center, ensuring smooth and efficient operation of all systems",
      "Implemented security enhancements to the network and systems, achieving a 40% reduction in security incidents while ensuring compliance with financial regulations.",
      "Developed and maintained performance tracking systems for the team, utilizing data analysis tools to generate reports that facilitated strategic decision-making.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Job Prapair AI",
    description:
      "PrepSmart AI is your ultimate companion to stand out in the competitive job market. Powered by cutting-edge artificial intelligence, this app helps you prepare for interviews, craft personalized resumes, and sharpen your professional skills.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "AI",
        color: "white-text-gradient",
      },
    ],
    image: jobs,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Baseball Guide",
    description:
      "A comprehensive baseball sport loving platform that allows users to ...",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: baseball,
    source_code_link: "https://github.com/",
  },
  {
    name: "Marvel Comics",
    description:
      "A comprehensive marvel app to ...",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: marvel,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
