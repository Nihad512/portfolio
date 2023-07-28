import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    marketplace,
    chat,
    github,
    mern_notes,
    house,
    github_finder,
    threejs,
    mysql,
    csh,
    vue,
    note,
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
      title: "Database Engineer",
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
      name:"Vue",
      icon:vue,
    },
    {
      name:"C#",
      icon:csh,
    },
    {
      name:"mySql",
      icon:mysql,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "House Marketplace",
      icon: marketplace,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "User registration and authentication system to ensure secure access to the marketplace Real-time property listings with live updates for a seamless user experience.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Explained the testing methods used to verify the application's functionality and user experience.",
      ],
    },
    {
      title: "Vuejs Developer",
      company_name: "Chat Application",
      icon: chat,
      iconBg: "#E6DEDD",
      points: [
        "Developed a real-time chat application using Vue.js and Firebase, providing users with instant messaging capabilities.",
        "Detail the process of implementing real-time messaging using Firebase's database listeners.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "frontend Web Developer",
      company_name: "github finder project",
      icon: github,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Leveraging the GitHub API to fetch and display user information, such as their name, bio, profile picture, followers, repositories, and more.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Implementing a robust search functionality that enables users to find GitHub users by entering their usernames or relevant keywords.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Mern-notes project",
      icon: note,
      iconBg: "#E6DEDD",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "MongoDB, a NoSQL database, was chosen for its scalability and flexibility. It facilitated seamless data storage and retrieval for note management.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "JSON Web Tokens (JWT) were used for secure user authentication, ensuring authorized access to the notes application.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Nihad proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Nihad does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
    },
    {
      testimonial:
        "After Nihad optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
    },
  ];
  
  const projects = [
    {
      name: "House MarketPlace",
      description:
        "The House Marketplace project was an exciting and rewarding endeavor, allowing me to create a user-centric platform that revolutionizes the real estate experience. By utilizing ReactJS for the frontend and Firebase for the backend, I successfully developed a dynamic and responsive marketplace that empowers users to find their ideal homes or connect with potential buyers efficiently.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: house,
      source_code_link: "https://github.com/Nihad512/house-marketing",
    },
    {
      name: "GitHub Finder",
      description:
        "The GitHub Finder project was a fulfilling and insightful endeavor, allowing me to create a practical and valuable tool for the developer community. By leveraging ReactJS and the GitHub API, I successfully developed an application that enables users to explore GitHub users and discover their repositories with ease. The project's intuitive design and seamless integration with the GitHub API deliver a user-friendly experience, appealing to developers and enthusiasts alike.",
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
      image: github_finder,
      source_code_link: "https://github.com/Nihad512/GithubFinder",
    },
    {
      name: "Mern Notes",
      description:
        "Developing the MERN Notes Application was an exciting and rewarding experience. By combining the power of MongoDB for data storage, ReactJS with Redux for frontend state management, and Node.js with Express for the backend, I was able to create a feature-rich and robust notes platform. The real-time synchronization capabilities of MongoDB added an extra layer of efficiency, allowing users to access their notes instantaneously from any device. Moreover, implementing user authentication with JWT ensured that user data remained secure and private.",
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
      image: mern_notes,
      source_code_link: "https://github.com/Nihad512/Mern_notes_project",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
