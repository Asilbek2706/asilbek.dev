import React from 'react';
import type { AboutData } from '../../types';

interface Props { about: AboutData; }

const HeroSection: React.FC<Props> = ({ about }) => (
    <section className="py-5 position-relative overflow-hidden">
        <div className="container py-lg-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-5 text-center">
                    <div className="about-image-wrapper position-relative">
                        <div className="abstract-shape"></div>
                        <img src={about.image} alt={about.firstname} className="about-img shadow-2xl position-relative z-1" />
                        <div className="experience-badge glass-card-sm p-3 shadow-lg d-flex align-items-center">
                            <div className="icon-circle bg-primary me-3 text-white">
                                <i className="bi bi-lightning-charge-fill"></i>
                            </div>
                            <div className="text-start">
                                <h6 className="fw-bold mb-0">2+ Years</h6>
                                <small className="text-muted">Learning & Building</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="ps-lg-4">
                        <span className="text-primary fw-bold text-uppercase ls-2 mb-3 d-block small">Mening tarixchim</span>
                        <h1 className="display-3 fw-800 text-dark mb-4">
                            {about.firstname} <span className="text-gradient-blue">{about.lastname}</span>
                        </h1>
                        <p className="lead text-secondary lh-lg mb-4 text-justify">{about.about_text}</p>

                        <div className="row g-4 mb-5">
                            <div className="col-sm-6">
                                <div className="contact-card-sm p-3 rounded-4 border">
                                    <i className="bi bi-envelope-at text-primary fs-4 mb-2 d-block"></i>
                                    <span className="text-muted d-block small mb-1">Email</span>
                                    <a href={`mailto:${about.email}`} className="text-dark fw-bold text-decoration-none">{about.email}</a>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="contact-card-sm p-3 rounded-4 border">
                                    <i className="bi bi-geo-alt text-primary fs-4 mb-2 d-block"></i>
                                    <span className="text-muted d-block small mb-1">Manzil</span>
                                    <span className="text-dark fw-bold">Tashkent, Uzbekistan</span>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex gap-3 align-items-center">
                            <h6 className="mb-0 fw-bold me-2 text-muted">Follow:</h6>
                            <a href={about.github_link} target="_blank" className="social-icon-box github"><i className="bi bi-github"></i></a>
                            <a href={about.telegram_link} target="_blank" className="social-icon-box telegram"><i className="bi bi-telegram"></i></a>
                            <a href={about.instagram_link} target="_blank" className="social-icon-box instagram"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;