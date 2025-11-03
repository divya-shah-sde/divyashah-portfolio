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
    "Data Engineer with 4+ years' experience building scalable data architectures and pipelines across AWS, Azure, and multicloud environments. Expert in ETL/ELT design, real-time data integration, and cloud migration using PySpark, Databricks, Airflow, Kafka, and Snowflake."),
  resumeLink:
    "https://drive.google.com/file/d/1KiKdfcjz5MhBz76UaehMtQG-lTtdF_mc/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/divya-shah-sde",
  linkedin: "https://www.linkedin.com/in/divyashah3899/",
  mail: "divya.s@protectmymails.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE DATA ENGINEER DRIVEN TO BUILD SCALABLE DATA PIPELINES AND CLOUD-NATIVE ARCHITECTURES THAT TRANSFORM RAW DATA INTO ACTIONABLE INSIGHTS.",
  skills: [
    emoji(
      "⚡ Design and build enterprise-grade ETL/ELT pipelines using Apache Spark, PySpark, and Databricks to process petabyte-scale datasets with high performance and reliability."
    ),
    emoji(
      "⚡ Architect cloud-native data solutions on AWS (EMR, Glue, Redshift, S3, Lambda) and Azure (Databricks, Data Factory, Data Lake) with automated workflows and real-time streaming."
    ),
    emoji(
      "⚡ Develop real-time data integration and streaming pipelines using Apache Kafka, Airflow, and event-driven architectures for mission-critical business operations."
    ),
    emoji(
      "⚡ Build and optimize data warehouses and data models using Snowflake, Redshift, and star-schema designs, improving query performance and enabling advanced analytics."
    ),
    emoji(
      "⚡ Create interactive dashboards and analytics solutions with Tableau, Power BI, and Python (Pandas, NumPy) to deliver actionable insights to stakeholders."
    ),
    emoji(
      "⚡ Implement MLOps pipelines and automated machine learning workflows on Databricks, reducing model deployment time and ensuring production-grade reliability."
    ),
    emoji(
      "⚡ Follow best practices in data governance, quality assurance, CI/CD automation using Git, GitHub Actions, Terraform, and Docker for infrastructure-as-code."
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
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Engineering & ETL/ELT",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Platforms (AWS, Azure)",
      progressPercentage: "85%"
    },
    {
      Stack: "Big Data Technologies (Spark, Kafka, Airflow)",
      progressPercentage: "88%"
    },
    {
      Stack: "Programming (Python, SQL, PySpark, Scala)",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Warehousing (Snowflake, Redshift)",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Visualization (Tableau, Power BI)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",
      company: "JP Morgan Chase & Co.",
      companylogo: require("./assets/images/jpmorgan.webp"),
      date: "May 2024 – Present",
      desc: "Lead data architecture and integration strategy for State of Hawaii Child Welfare Modernization Program. Design enterprise-grade data warehouse models, build automated serverless pipelines on AWS, and develop REST/SOAP APIs on Boomi platform—improving query performance by 20%, ensuring 98% data accuracy across 50M+ records, and reducing manual operations by 30%.",
      descBullets: [
        "Architected star-schema data warehouse optimizing analytics and establishing single source of truth.",
        "Built automated AWS data ingestion pipelines (S3, Lambda) with encryption and audit mechanisms.",
        "Developed secure bi-directional APIs for real-time data exchange between state agencies and SaaS platforms."
      ]
    },
    {
      role: "Data Engineer",
      company: "Hexaware Technologies",
      companylogo: require("./assets/images/hexaware.webp"),
      date: "April 2021 – August 2023",
      desc: "Engineered scalable ETL and ML pipelines on Azure Databricks using PySpark and Python, processing terabyte-scale datasets and enhancing data availability by 40%. Automated data workflows reducing manual effort by 30%, implemented MLOps pipelines cutting model deployment time from 3 weeks to 5 days, and built analytics dashboards driving 20% improvement in conversion rates.",
      descBullets: [
        "Designed end-to-end automated modeling pipeline with AutoML and hyperparameter tuning.",
        "Implemented data governance framework reducing data errors by 95% and cleanup time to 30 minutes.",
        "Developed interactive Tableau and Power BI dashboards enabling real-time business insights."
      ]
    },
    {
      role: "Junior Data Engineer",
      company: "KPIT Technologies",
      companylogo: require("./assets/images/kpit.webp"),
      date: "December 2020 – April 2021",
      desc: "Built cloud-native data pipelines and analytics platforms on AWS, Snowflake, and Redshift. Developed 15+ Airflow DAGs achieving 99.8% job success rate, engineered Spark-based ETL pipelines improving data reliability by 20%, and optimized data warehouses boosting query performance by 35%—cutting report times from 12 minutes to under 90 seconds.",
      descBullets: [
        "Designed star-schema data models consolidating 12+ source systems into unified analytical structures.",
        "Optimized Redshift/Snowflake queries through advanced tuning and materialized views.",
        "Automated infrastructure provisioning with Terraform and CI/CD pipelines, achieving 70% faster deployments."
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
  number: "+1 (628) 245-5521",
  email_address: "divya.s@protectmymails.com"
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
