import React from "react";
import "./SoftwareSkill.scss";

const skillData = [
  {
    title: "Languages",
    skills: ["Java", "C#", "TypeScript", "JavaScript", "Python", "SQL"]
  },
  {
    title: "Frontend Frameworks/Libraries",
    skills: [
      "Angular 10+",
      "React.js",
      "Next.js",
      "Redux",
      "Bootstrap 5",
      "jQuery"
    ]
  },
  {
    title: "Backend Frameworks/Libraries",
    skills: ["Node.js", ".NET Core", "Spring Boot", "J2EE", "Hibernate"]
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "AJAX", "JSON", "XML"]
  },
  {
    title: "Cloud/Application Server",
    skills: [
      "AWS (EC2, S3, Lambda, RDS)",
      "Azure (App Services, Blob Storage)",
      "GCP (Firebase, Cloud Functions)"
    ]
  },
  {
    title: "Database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Oracle",
      "DynamoDB",
      "Firebase Realtime DB"
    ]
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Jenkins",
      "Postman",
      "JIRA",
      "Visual Studio",
      "Figma",
      "Docker",
      "VSCode",
      "IntelliJ",
      "Eclipse",
      "ELK Stack"
    ]
  },
  {
    title: "Testing & Debugging",
    skills: [
      "JUnit",
      "Mockito",
      "Jest",
      "Cypress",
      "Selenium",
      "Chrome DevTools",
      "NUnit",
      "MS Test Unit"
    ]
  },
  {
    title: "Deployment & CI/CD",
    skills: [
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Azure DevOps"
    ]
  }
];

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-list">
        {skillData.map((group, index) => (
          <div className="skills-group-wrap" key={index}>
            <h4>{group.title}</h4>
            <ul className="skills-group">
              {group.skills.map((skill, i) => (
                <li className="skill-item" key={i}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
