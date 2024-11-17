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
  infosys,
  JNet,
  ICICI,
  Cyient,
  printmind,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dotnetcorelogo,
  Netlogo,
  postmanlogo,
  reactbootstrap,
  smsql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    name: "dotnet",
    icon: Netlogo,
  },
  {
    name: "dotnetcore",
    icon: dotnetcorelogo,
  },
  // {
  //   name: "postman",
  //   icon: postmanlogo,
  // },
  {
    name: "react bootstrap",
    icon: reactbootstrap,
  },
  {
    name: "SQL Server",
    icon: smsql,
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  }
];

const experiences = [
  {
    title: "Technology Analyst",
    company_name: "Infosys Limited",
    icon: infosys,
    iconBg: "#383E56",
    date: "August 2018 - Present",
    points: [
      "Experienced .NET Fullstack developer at Infosys Limited (2018-present), conducting Daily status calls ",
      "Developing and maintaining web applications using ASP.NET, C#, ReactJS, .NET Core, Web API, Docker, Kubernatics (Rancher, Harbor), EF Core, Bootstrap, CSS, HTML, SQL Server, and MSBI.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "collaborating with clients across the US, UK, and Malaysia to deliver high-quality solutions.",
      "Participating in conducting Technical interviews",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "JNet Technologies",
    icon: JNet,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - August 2018",
    points: [
      "Experienced .NET developer at JNet Technologies (2018 - 2018)",
      "Developing and maintaining web applications using ASP.NET, C#, Web API, CSS, HTML, JavaScript, JQuery, AJax, Windows Server, IIS, EF Core, SQL Server.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "CYIENT Limited",
    icon: Cyient,
    iconBg: "#383E56",
    date: "Mar 2016 - Dec 2017",
    points: [
      "Experienced .NET Fullstack developer at Cyient Limited (2016 - 2017).",
      "Developing and maintaining web applications using ASP.NET, C#, Java Script, JQuery, AJax, Web API, IIS, Windows Server, EF, SQL Server, JQ Charts, Crystal Reports.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "CSM - HMT (Software developer)",
    company_name: "ICICI Lombard GIC LTD",
    icon: ICICI,
    iconBg: "#E6DEDD",
    date: "Sept 2014 - Mar 2016",
    points: [
      "Experienced .NET Fullstack developer at ICICI Lombard GIC Limited (2014 - 2016)",
      "Developing and maintaining web applications using ASP.NET, C#, Java Script, JQuery, AJax, Web API, IIS, Windows Server, EF, SQL Server, Crystal Reports.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Responsible for migrating applications from MS Access to .Net framework based applications.",
      "Closely interraction with business for application implementation."
    ],
  },
  {
    title: "Associate Technology",
    company_name: "Printmind technology",
    icon: printmind,
    iconBg: "#E6DEDD",
    date: "Sept 2014 - Mar 2016",
    points: [
      "Experienced .NET Fullstack developer at PrintMind Technologies (2014 - 2014)",
      "Developing and maintaining web applications using ASP.NET, ASP.NET MVC, C#, Java Script, JQuery, AJax, Web API, IIS, Windows Server, EF, SQL Server.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating requirements gathering and bulding an ecommerce application and maintaning applications based google location tracking and uploading incidents in the application.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    ],
    image: carrent,
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
];

export { services, technologies, experiences, testimonials, projects };
