import React from "react";
import "./SoftwareSkill.scss";

const skillData = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C#", "C++"]
  },
  {
    title: "Backend & Distributed Systems",
    skills: [
      "Spring Boot",
      "Microservices",
      "RESTful APIs",
      "GraphQL",
      "Hibernate",
      "JPA",
      "Apache Kafka",
      "RabbitMQ",
      "Event-Driven Architecture",
      "Node.js",
      "Express.js",
      "Concurrent & Multithreaded Programming"
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, Lambda, RDS, DynamoDB, API Gateway)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "CI/CD Pipelines",
      "Infrastructure as Code (IaC)",
      "Prometheus",
      "Grafana"
    ]
  },
  {
    title: "Databases & Data Stores",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "DynamoDB",
      "Redis",
      "Elasticsearch"
    ]
  },
  {
    title: "Frontend Technologies",
    skills: [
      "React.js",
      "Angular",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material UI",
      "HTML5",
      "CSS3",
      "SASS"
    ]
  },
  {
    title: "AI & Applied Machine Learning",
    skills: [
      "LangChain",
      "Retrieval-Augmented Generation (RAG)",
      "OpenAI APIs",
      "Hugging Face Transformers",
      "GPT",
      "BERT",
      "MLflow"
    ]
  },
  {
    title: "Testing & Quality Engineering",
    skills: [
      "JUnit",
      "Mockito",
      "Cypress",
      "Selenium",
      "Jest",
      "Chai",
      "Postman",
      "Test-Driven Development (TDD)",
      "JMeter"
    ]
  },
  {
    title: "System Design & Engineering Fundamentals",
    skills: [
      "High-Level & Low-Level Design (HLD/LLD)",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Design Patterns",
      "Scalability",
      "Performance Optimization"
    ]
  },
  {
    title: "Security & Development Practices",
    skills: [
      "OAuth 2.0",
      "JWT",
      "Secure API Design",
      "Git",
      "Jira",
      "Agile/Scrum",
      "Swagger/OpenAPI",
      "VS Code",
      "IntelliJ IDEA"
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
