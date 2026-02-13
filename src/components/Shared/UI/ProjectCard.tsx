import React from 'react';
import type {Project} from "../../../types";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
    <div className="project-card-premium shadow-hover border rounded-4 overflow-hidden h-100 bg-white">
        <div className="project-img-container position-relative overflow-hidden">
            <img src={project.project_image} alt={project.project_name} className="img-fluid w-100" style={{ height: '250px', objectFit: 'cover' }} />
            <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 transition">
                <a href={project.project_link} target="_blank" rel="noreferrer" className="btn btn-light rounded-pill px-4 fw-bold shadow">Demoni ko'rish</a>
            </div>
        </div>
        <div className="p-4">
            <div className="d-flex justify-content-between align-items-start mb-2">
                <h5 className="fw-bold text-dark m-0">{project.project_name}</h5>
                <a href={project.project_github_link} target="_blank" rel="noreferrer" className="text-dark fs-5 hover-primary transition">
                    <i className="bi bi-github"></i>
                </a>
            </div>
            <p className="text-muted small mb-4 text-truncate-2" style={{ height: '40px' }}>{project.project_description}</p>
            <div className="pt-3 border-top d-flex align-items-center">
                <span className="badge bg-primary bg-opacity-10 text-primary fw-normal rounded-pill px-3">Live Project</span>
            </div>
        </div>
    </div>
);

export default ProjectCard;