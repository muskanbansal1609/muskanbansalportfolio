// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Muskan's Portfolio",
  description:
    "Pixel perfect engineer. Passionate about building scalable products, clean UI systems, and impactful user experiences that blend performance with design.",
  og: {
    title: "Muskan Bansal Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Muskan Bansal",
  logo_name: "Muskan Bansal",
  nickname: "",
  subTitle:
    " Pixel perfect engineer. Passionate about building scalable products, clean UI systems, and impactful user experiences that blend performance with design.",
  resumeLink:
    "https://drive.google.com/file/d/1NVLxHFAVVpdPAKsTakmz4sc4qVtYHY0A/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/muskanbansal1609",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/muskanbansal1609",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muskan-bansal16/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:muskanbansal16muski@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_muskanbansal/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Frontend Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build scalable and responsive web applications using React, TypeScript, Tailwind CSS, and modern frontend architecture patterns.",
        "⚡ Create high-performance user interfaces with interactive dashboards, analytics tools, calendars, maps, and complex user workflows.",
        "⚡ Focus on clean component design, API integration, performance optimization, and seamless user experiences across devices.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#38B2AC",
          },
        },
        {
          skillName: "Radix UI",
          fontAwesomeClassname: "simple-icons:radixui",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ I enjoy building frontend experiences that not only work smoothly but also feel visually clean, thoughtful, and easy to use.",
        "⚡ Whether it’s dashboards, workflows, or interactive UI, I like turning complex ideas into experiences people genuinely enjoy using.",
        "⚡ I love combining design sense with React development to create products that are both functional and engaging.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "PES University",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "pesLogo.png",
      alt_name: "PES University",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied various software engineering subjects like Data Structure & Algorithms, DBMS, OS, Web Technologies, AI etc.",
        "⚡ I have also been a part of various hackathons and have won some of them.",
        "⚡ Published my research paper at IEEE 8th I2CT India Conference, Pune title Enhancing Safety in Vehicles using emotion recognition with AI.",
      ],
      website_link: "https://pes.edu/about/",
    },
    {
      title: "Christ Academy Junior College",
      subtitle: "High School in PCMC",
      logo_path: "cajcLogo.png",
      alt_name: "Christ Academy Junior College",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ My field of interest had always been web development. During my high school, I have done various courses on these subjects and have also participated in various competitions.",
        "⚡ I participated in various coding competitions and have been a consistent performer in these competitions.",
        "⚡ During my board exam, I have scored a centum in Computer Science & Mathematics.",
      ],
      website_link: "https://cajc.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Meta frontend Developer", //Done
      subtitle: "Meta",
      logo_path: "metaLogo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/TRDV8FRPA8LD",
      alt_name: "Google",
      color_code: "#FFFFFF99",
    },
    {
      title: "Ultimate React Course", //Done
      subtitle: "Udemy",
      logo_path: "udemyLogo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-af83c7b5-0d21-488c-aa4d-63b104017502/",
      alt_name: "Udemy",
      color_code: "#FFFFFF99",
    },
    {
      title: "Full Stack Web Development", //Done
      subtitle: "Udemy",
      logo_path: "udemyLogo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-19e67556-049e-466e-ab03-a90073fe625d/",
      alt_name: "deeplearning.ai",
      color_code: "#FFFFFF99",
    },
    {
      title: "Technical Product Management", //Done
      subtitle: "LinkedIn Learning",
      logo_path: "linkedinLogo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/7f8b87ff2b32205b932c6dc4bae704a6f92f1f52db63ea0a3dd0d4769b8e7cb2",
      alt_name: "Microsoft",
      color_code: "#FFFFFF99",
    },
    {
      title: "Productivity with Microsoft 365 copilot agents", //Done
      subtitle: "Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.microsoft.com/en-gb/users/muskanbansal-3717/achievements/nqy87ahf?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      alt_name: "IBM",
      color_code: "#FFFFFF99",
    },
    {
      title: "Workshop on AI Agentic Systems", //Done
      subtitle: "Publicis Sapient",
      logo_path: "psLogo.png",
      certificate_link:
        "https://drive.google.com/file/d/1DMJbEW25njVluGECMG7Qwtbm3_M71i4T/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#FFFFFF99",
    },
    {
      title: "Agile Product Owner", //Done
      subtitle: "LinkedIn Learning",
      logo_path: "linkedinLogo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/32c8105e896c4ad2eec739fbd70278b276c1ea1d6123a9e6e4a972882a08e633?trk=share_certificate",
      alt_name: "Microsoft",
      color_code: "#FFFFFF99",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  description:
    "I am working as frontend developer in an asset management domain where the firm offers institutional and individual investors a deep expertise in traditional and alternative strategies, including municipal bonds, public equities, fixed income, real estate, and natural capital.",
  header_image_path: "pesLogo.png",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Frontend Developer",
          company: "TIAA",
          company_url: "https://www.tiaa.org/public",
          logo_path: "tiaaLogo.png",
          duration: "June 2023 - Present",
          location: "Pune, India",
          description:
            "Built an external facing product(Advisor Portal) to manage Separately Managed Accounts (SMAs) and evaluate multi-asset portfolios. Registered financial professionals use it to access proprietary analytical tools, view restricted investment content, and to scale client operations. As an enhancement developed a sample proposal form application to help users generate proposals based on their portfolio values and asset records reducing paper work by 70%.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Intern",
          company: "TIAA",
          company_url: "https://www.tiaa.org/public",
          logo_path: "tiaaLogo.png",
          duration: "June 2022 - July 2022",
          location: "Remote",
          description:
            "Developed a dynamic job portal site to streamline recruitment process, eliminating the need for excel sheets. Implemented an intuitive dashboard with search and filter functionalities, reducing human effort by 60%. The portal facilitated efficient candidate management, enabling recruiters to easily track applications and schedule interviews, resulting in a 30% faster hiring process.",
          color: "#000000",
        },
        {
          title: "Web Development Intern",
          company: "Sparks Foundation",
          company_url: "https://www.delhivery.com/",
          logo_path: "sparksLogo.png",
          duration: "June 2021 - July 2021",
          location: "Bengaluru, India",
          description:
            "Designed & developed a fully functional, user-friendly payment gateway integration using Razorpay enabling seamless and secure online transaction for users. Gained hands-on experience in implementing API integrations and transaction workflows.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I believe the best way to learn is by building. This space is a reflection of my curiosity and technical versatility—a playground where I've gotten my hands dirty with a wide array of tools and frameworks. Anchored by the efficiency of React and the rapid-styling power of Tailwind CSS, I build applications with a strong emphasis on clean code, performance optimization, and seamless deployments. Whether experimenting with new state managers, playing with APIs, or tweaking hosting configurations, each project marks another step forward in my engineering journey.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Enhancing Safety in Vehicles using Emotion Recognition with AI",
      createdAt: "2022-12-30T00:00:00Z",
      description: "Paper published in IEEE 8th I2CT India Conference 2023",
      url: "https://ieeexplore.ieee.org/document/10126274",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "picofme (1).png",
    description:
      "My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
