import React from "react";
import "./SoftwareSkill.scss";

const skillData = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "Scala", "Java", "R", "Bash/Shell Scripting"]
  },
  {
    title: "Big Data & Distributed Computing",
    skills: [
      "Apache Spark",
      "PySpark",
      "Apache Kafka",
      "Apache Airflow",
      "Apache Hadoop",
      "Apache Hive",
      "Apache Flink",
      "Databricks"
    ]
  },
  {
    title: "Cloud Platforms",
    skills: [
      "AWS (EMR, Glue, Redshift, S3, Lambda, Athena, Kinesis, EC2, DynamoDB)",
      "Azure (Databricks, Data Factory, Data Lake, Blob Storage, SQL Database)",
      "Google Cloud Platform (BigQuery, Dataflow, Pub/Sub)"
    ]
  },
  {
    title: "Data Warehousing & Databases",
    skills: [
      "Snowflake",
      "Amazon Redshift",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Oracle",
      "MongoDB",
      "Cassandra",
      "DynamoDB",
      "HBase"
    ]
  },
  {
    title: "ETL & Data Integration Tools",
    skills: [
      "Apache Airflow",
      "Databricks",
      "Fivetran",
      "Talend",
      "Informatica",
      "SSIS",
      "SSRS",
      "SAS Enterprise Guide",
      "Boomi Integration Platform",
      "DBT (Data Build Tool)"
    ]
  },
  {
    title: "Data Analytics & Visualization",
    skills: [
      "Tableau",
      "Power BI",
      "AWS QuickSight",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Excel"
    ]
  },
  {
    title: "Machine Learning & MLOps",
    skills: [
      "Azure Databricks ML",
      "MLflow",
      "AutoML",
      "Hyperparameter Tuning",
      "Statistical Modeling",
      "Time Series Forecasting",
      "Cox Proportional Hazards"
    ]
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Git",
      "GitHub",
      "GitLab",
      "GitHub Actions",
      "Jenkins",
      "BMC Control-M",
      "CI/CD Pipelines"
    ]
  },
  {
    title: "Data Governance & Quality",
    skills: [
      "Data Modeling",
      "Data Quality Frameworks",
      "Metadata Management",
      "Master Data Management (MDM)",
      "Data Cataloging",
      "HIPAA Compliance"
    ]
  },
  {
    title: "Development Tools & IDEs",
    skills: [
      "VSCode",
      "PyCharm",
      "Jupyter Notebook",
      "IntelliJ IDEA",
      "DataGrip",
      "Postman",
      "JIRA",
      "Confluence"
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
