import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../../services/projectService';
import type { Project } from '../../types';

const Projects: React.FC = () => {
    // TanStack Query orqali loyihalarni olish
    const { data: projects, isLoading, isError } = useQuery<Project[]>({
        queryKey: ['projects'],
        queryFn: getProjects,
    });

    if (isLoading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Yuklanmoqda...</span>
                </div>
                <p className="mt-3 text-muted">Loyihalar ro'yxati yuklanmoqda...</p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="container py-5 text-center">
                <div className="alert alert-danger shadow-sm" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    Ma'lumotlarni yuklashda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.
                </div>
            </div>
        );
    }

    return (
        <section className="projects-section py-5 bg-white">
            <div className="container">
                {/* Sarlavha qismi */}
                <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold text-dark">Mening loyihalarim</h2>
                    <p className="lead text-muted">Men tomonidan yaratilgan eng so'nggi va qiziqarli ishlar</p>
                    <div className="mx-auto bg-primary rounded" style={{ width: '60px', height: '4px' }}></div>
                </div>

                <div className="row g-4">
                    {projects && projects.length > 0 ? (
                        projects.map((project) => (
                            <div key={project.id} className="col-md-6 col-lg-4">
                                <div className="card h-100 border-0 shadow-sm overflow-hidden project-card transition-all">
                                    <div className="position-relative" style={{ height: '220px' }}>
                                        <img
                                            src={project.project_image}
                                            alt={project.project_name}
                                            className="w-100 h-100 shadow-sm"
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="card-overlay d-flex align-items-center justify-content-center">
                                            <a
                                                href={project.project_link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn btn-light btn-sm rounded-pill px-3 fw-bold shadow-sm"
                                            >
                                                Ko'rish <i className="bi bi-eye ms-1"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-2 text-dark">{project.project_name}</h5>
                                        <p className="card-text text-muted small mb-4" style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            minHeight: '4.5em'
                                        }}>
                                            {project.project_description}
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center mt-auto">
                                            <a
                                                href={project.project_link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn btn-primary btn-sm px-4 rounded-pill fw-bold"
                                            >
                                                Demo
                                            </a>
                                            <a
                                                href={project.project_github_link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn btn-outline-dark btn-sm rounded-circle p-2"
                                                title="GitHub kodini ko'rish"
                                            >
                                                <i className="bi bi-github fs-5"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <i className="bi bi-folder-x display-1 text-light"></i>
                            <p className="text-muted mt-3 fs-4">Hozircha loyihalar mavjud emas.</p>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                .project-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .project-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 1rem 3rem rgba(0,0,0,.12) !important;
                }
                .card-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.4);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .project-card:hover .card-overlay {
                    opacity: 1;
                }
            `}</style>
        </section>
    );
};

export default Projects;