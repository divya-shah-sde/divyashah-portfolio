/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Divya Shah",
  title: "Hi all, I'm Divya",
  subTitle: emoji(
    "Senior Software Engineer with 4.5+ years of experience building scalable, cloud-native systems and AI-enabled platforms across finance and retail. Expert in Java, Spring Boot, microservices, event-driven architectures, and full-stack development using React, Angular, AWS, Kafka, and Terraform."),
    resumeLink:
    "https://drive.google.com/file/d/1KiKdfcjz5MhBz76UaehMtQG-lTtdF_mc/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/divya-shah-sde",
  linkedin: "https://www.linkedin.com/in/divyashah3899/",
  mail: "divya.shah@savemymails.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "SENIOR SOFTWARE ENGINEER PASSIONATE ABOUT BUILDING SCALABLE, CLOUD-NATIVE SYSTEMS AND AI-ENABLED PLATFORMS THAT DRIVE REAL IMPACT IN FINANCE AND ENTERPRISE TECH.",
  skills: [
    emoji(
      "⚡ Design and develop Java Spring Boot–based distributed systems and microservices architectures, with hands-on experience in asynchronous workflows, idempotent APIs, and graceful degradation for enterprise credit risk and retail platforms."
    ),
    emoji(
      "⚡ Build event-driven, high-throughput backend services using Apache Kafka and RabbitMQ, supporting millions of daily events across order management, inventory, and financial risk pipelines."
    ),
    emoji(
      "⚡ Implement thread-safe, concurrent Java components using advanced concurrency utilities and execution pools to support parallel processing across 15–20 independent business workflows with strict data consistency."
    ),
    emoji(
      "⚡ Architect and deploy cloud-native infrastructure on AWS (EC2, S3, Lambda, RDS, DynamoDB, API Gateway) using Docker, Kubernetes, and Terraform, managing 40+ backend services and reducing infrastructure costs by $70K annually."
    ),
    emoji(
      "⚡ Develop full-stack applications with React.js, Angular, and Next.js, delivering interactive dashboards and operational tools actively used by 200–250+ internal analysts, supply chain, and operations teams."
    ),
    emoji(
      "⚡ Integrate Generative AI and Retrieval-Augmented Generation (RAG) workflows using LangChain and OpenAI APIs, enabling natural language querying over 4M+ regulatory documents and credit artifacts."
    ),
    emoji(
      "⚡ Apply data structures, algorithmic optimization, and database best practices (PostgreSQL, Redis, MongoDB) to improve query performance by 35% and maintain sub-150ms API response times under peak load."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "New York Institute of Technology",
      logo: require("./assets/images/nyit-full-logo-color-300x300.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2023 - May 2025",
      desc: "Focused on building scalable full-stack applications, cloud-native systems, and modern software architecture.",
      descBullets: [
        "Built full-stack web apps using React, .Net, and cloud services like AWS and Azure.",
        "Completed coursework in Web Development, Cloud Computing, Software Architecture, and Distributed Systems.",
        "Worked in agile team settings to design and deploy real-world web solutions.",
        "Integrated RESTful APIs and database systems into modern frontend frameworks."
      ]
    },
    {
      schoolName: "Dharmsinh Desai University",
      logo: require("./assets/images/Dharamsinh_Desai_University_logo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "August 2018 - May 2021",
      desc: "Developed a strong foundation in full-stack web development and core computer engineering concepts.",
      descBullets: [
        "Created full-stack applications using Angular, Spring Boot, and PostgreSQL.",
        "Built real-time features with WebSockets and REST APIs.",
        "Studied Web Security, Operating Systems, and Data Structures.",
        "Worked on team-based projects with version control, CI/CD, and Docker."
      ]
    },
    {
      schoolName: "Gujarat Technological University",
      logo: require("./assets/images/GTU.png"),
      subHeader: "Diploma in Computer Engineering",
      duration: "August 2015 - May 2018",
      desc: "Gained hands-on experience in software development, databases, and basic networking.",
      descBullets: [
        "Developed web applications using HTML, CSS, JavaScript, PHP, and MySQL.",
        "Built CRUD-based systems and worked on UI design fundamentals.",
        "Learned core programming concepts, software testing, and database normalization.",
        "Contributed to group projects simulating real-world client-server architecture."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend Development (Java, Spring Boot, Microservices)",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud & DevOps (AWS, Docker, Kubernetes, Terraform)",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend Development (React.js, Angular, Next.js)",
      progressPercentage: "80%"
    },
    {
      Stack: "Databases & Caching (PostgreSQL, Redis, MongoDB, DynamoDB)",
      progressPercentage: "85%"
    },
    {
      Stack: "Event-Driven & Distributed Systems (Kafka, RabbitMQ)",
      progressPercentage: "83%"
    },
    {
      Stack: "AI & GenAI Integration (LangChain, RAG, OpenAI APIs)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Software Engineer",
      company: "JP Morgan Chase & Co.",
      companylogo: require("./assets/images/jpmorgan.webp"),
      date: "Jan 2025 – Present",
      desc: "Contributing to a Java Spring Boot–based distributed platform for enterprise credit risk and operational resiliency. Built RAG workflows enabling analysts to query 4M+ regulatory documents, provisioned 40+ backend services on Kubernetes with Terraform, and developed React dashboards used by 200+ internal analysts.",
      descBullets: [
        "Implemented thread-safe concurrent processing components supporting parallel risk evaluations across 15–20 independent business workflows.",
        "Built LangChain and OpenAI-powered RAG pipelines for querying regulatory documents and anonymized credit artifacts with source-attributed responses.",
        "Provisioned reusable Terraform IaC modules across Kubernetes clusters, IAM configurations, and managed data stores."
      ]
    },
    {
      role: "Software Engineer",
      company: "KPIT Technologies",
      companylogo: require("./assets/images/kpit.webp"),
      date: "Jan 2020 – Aug 2023",
      desc: "Built Spring Boot microservices for a retail order management and inventory platform handling 600K–900K daily events. Engineered Kafka-based event pipelines, led a MySQL-to-PostgreSQL migration improving query performance by 35%, and maintained 99.8% uptime across 18+ microservices.",
      descBullets: [
        "Managed Redis caching for high-traffic retail endpoints maintaining sub-150ms API response times during peak hours.",
        "Architected Angular dashboards for inventory, order tracking, and returns management used by 250+ operations users daily.",
        "Reduced post-release defects by 30% through comprehensive unit, integration, and load testing with JUnit, Mockito, and JMeter."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle:
    "STARTUPS AND COMPANIES WHERE I CONTRIBUTED TO BUILDING THEIR TECHNOLOGY",
  projects: [
    {
      image: require("./assets/images/patienttracker_logo.png"),
      projectName: "Patient Tracker",
      projectDesc:
        "Developed a secure, full-stack patient management system enabling healthcare providers to track patient records, appointments, and medical histories. Built with modern web technologies and integrated role-based access control for privacy and compliance.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.yourpatienttracker.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/monroe-dental-studio-logo.png"),
      projectName: "Monroe Dental Studio",
      projectDesc:
        "Led the development of a modern, responsive website for a high-end dental practice, focusing on user experience, performance, and SEO optimization.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.monroedentalstudio.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const openSourceWork = {
  title: "Major Projects",
  subtitle:
    "STARTUPS AND COMPANIES WHERE I CONTRIBUTED TO BUILDING THEIR TECHNOLOGY",
  projects: [
    {
      projectName: "Patient Tracker",
      projectDesc:
        "Secure full-stack patient management system with role-based access and modern tech stack.",
      technologies: ["React", "Node.js", "MongoDB"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.yourpatienttracker.com/"
        }
      ]
    },
    {
      projectName: "Monroe Dental Studio",
      projectDesc:
        "Modern website for a dental clinic with SEO and mobile-first design.",
      technologies: ["WordPress", "Elementor", "Yoast SEO"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.monroedentalstudio.com/"
        }
      ]
    },
    {
      projectName: "FinTrack Dashboard",
      projectDesc:
        "Built a finance dashboard for real-time portfolio and market tracking.",
      technologies: ["Vue.js", "Firebase", "Chart.js"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fintrack.example.com"
        }
      ]
    },
    {
      projectName: "EduPath LMS",
      projectDesc:
        "Learning Management System for online courses, assessments, and student tracking.",
      technologies: ["Laravel", "Vue.js", "MySQL"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://edupath.example.com"
        }
      ]
    },
    {
      projectName: "LogiFleet Tracker",
      projectDesc:
        "Fleet management platform with live GPS tracking and maintenance scheduler.",
      technologies: ["React", "Express", "PostgreSQL"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://logifleet.example.com"
        }
      ]
    },
    {
      projectName: "Shopora E-commerce",
      projectDesc:
        "Custom online store with secure checkout, product filters, and admin dashboard.",
      technologies: ["Next.js", "Stripe", "MongoDB"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shopora.example.com"
        }
      ]
    },
    {
      projectName: "TaskZen Pro",
      projectDesc:
        "Kanban-based task management tool for teams with drag-drop and real-time updates.",
      technologies: ["React", "Socket.io", "Node.js"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://taskzen.example.com"
        }
      ]
    },
    {
      projectName: "BlogVerse",
      projectDesc:
        "A responsive blog platform supporting markdown, tags, and SEO optimization.",
      technologies: ["Gatsby", "GraphQL", "Netlify"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://blogverse.example.com"
        }
      ]
    },
    {
      projectName: "Foodie Finder",
      projectDesc:
        "Mobile-friendly web app to discover local restaurants with real-time filters.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://foodiefinder.example.com"
        }
      ]
    },
    {
      projectName: "Portify Portfolio Builder",
      projectDesc:
        "No-code drag-and-drop portfolio builder for designers and developers.",
      technologies: ["React", "Redux", "Node.js"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://portify.example.com"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Developer – Associate",
      subtitle:
        "Skilled in AWS SDKs, CI/CD, and Cloud-Native Development (Valid Until June 2028)",
      image: require("./assets/images/AWS.png"),
      imageAlt: "Amazon Web Services",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1OsiFw4WkF_aF4LzD72J802WJcuTI2PSg/view?usp=drive_link"
        }
      ]
    },
    {
      title: " AWS Certified Cloud Practitioner",
      subtitle:
        "Foundational Cloud Expertise Certified by AWS (Valid Until June 2028)",
      image: require("./assets/images/AWS.png"),
      imageAlt: "Amazon Web Services",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/11a1QNMZAAOTDn8S_QELvrjHeqYUQkGKn/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in working together or have an opportunity to discuss? I’m just a message away.",
  number: "+1 (628) 243-1377",
  email_address: "divya.shah@savemymails.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  openSourceWork
};
