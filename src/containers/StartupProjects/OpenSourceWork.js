import React, {useContext, useState} from "react";
import "./OpenSourceWork.scss";
import {openSourceWork} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";

export default function OpenSourceWork() {
  const {isDark} = useContext(StyleContext);
  const [showAll, setShowAll] = useState(false);

  if (!openSourceWork.display) return null;

  const openUrlInNewTab = url => {
    if (url) window.open(url, "_blank")?.focus();
  };

  const visibleProjects = showAll
    ? openSourceWork.projects
    : openSourceWork.projects.slice(0, 3);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <h1 className="section-heading">Open Source</h1>

        <div className="projects-container os-container">
          {visibleProjects.map((project, i) => (
            <div
              key={i}
              className={`project-card os-card ${
                isDark ? "dark-mode project-card-dark" : "project-card-light"
              }`}
            >
              <div className="project-detail os-item">
                <h5 className={`card-title ${isDark ? "dark-mode" : ""}`}>
                  {project.projectName}
                </h5>
                <p className={`card-subtitle ${isDark ? "dark-mode" : ""}`}>
                  {project.projectDesc}
                </p>

                <div className="os-techno">
                  <strong>Technologies: </strong>
                  <ul>
                    {project.technologies.map((tech, j) => (
                      <li key={j}>{tech}</li>
                    ))}
                  </ul>
                </div>

                {project.footerLink && (
                  <div className="project-card-footer">
                    {project.footerLink.map((link, k) => (
                      <span
                        key={k}
                        className={`project-tag ${isDark ? "dark-mode" : ""}`}
                        onClick={() => openUrlInNewTab(link.url)}
                      >
                        {link.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {openSourceWork.projects.length > 3 && (
          <div className="show-more-btn-container">
            <div onClick={() => setShowAll(!showAll)}>
              <Button text={showAll ? "Show Less" : "Show More"} />
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
}
