import React from 'react';
import type { Project } from "../../types";

interface ProjectItemProps {
    project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    return (
        <div className="col-xl-3 col-md-6 col-12 d-flex align-items-stretch">
            <div className="project-card-premium">
                {/* Image Section */}
                <div className="project-card-premium__img-holder">
                    <img
                        src={project.project_image}
                        alt={project.project_name}
                        className="project-card-premium__img"
                    />
                    <div className="project-card-premium__overlay">
                        <a href={project.project_link} target="_blank" rel="noreferrer" className="project-card-premium__btn-sm">
                            KO'RISH
                        </a>
                    </div>
                </div>

                {/* Content Section */}
                <div className="project-card-premium__content">
                    <div className="project-card-premium__header">
                        <h5 className="project-card-premium__title">{project.project_name}</h5>
                        <a href={project.project_github_link} target="_blank" rel="noreferrer" className="project-card-premium__github">
                            <i className="bi bi-github"></i>
                        </a>
                    </div>

                    <p className="project-card-premium__desc">
                        {project.project_description}
                    </p>

                    <div className="project-card-premium__footer">
                        <a href={project.project_link} target="_blank" rel="noreferrer" className="project-card-premium__btn-main">
                            LIVE DEMO
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;