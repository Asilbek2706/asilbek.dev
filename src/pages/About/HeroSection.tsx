import React from 'react';
import type { AboutData } from '../../types';

interface Props { about: AboutData; }

const HeroSection: React.FC<Props> = ({ about }) => (
    <section className="about-hero-manga">
        <div className="container">
            <div className="row g-5 align-items-center">

                {/* 1. IMAGE QISMI (Abstract shape va Badge bilan) */}
                <div className="col-lg-5 text-center">
                    <div className="about-hero-manga__img-container">
                        <div className="about-hero-manga__abstract-shape"></div>
                        <img
                            src={about.image}
                            alt={about.firstname}
                            className="about-hero-manga__profile-img"
                        />
                        {/* Experience Badge - Scoped style */}
                        <div className="about-hero-manga__exp-badge">
                            <div className="about-hero-manga__exp-icon">
                                <i className="bi bi-lightning-charge-fill"></i>
                            </div>
                            <div className="text-start">
                                <h6 className="about-hero-manga__exp-title">2+ Years</h6>
                                <small className="about-hero-manga__exp-sub">Learning & Building</small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. TEXT VA MA'LUMOTLAR QISMI */}
                <div className="col-lg-7">
                    <div className="about-hero-manga__info-wrapper">
                        <span className="about-hero-manga__meta">Mening tarixim</span>
                        <h1 className="about-hero-manga__main-title">
                            {about.firstname} <span className="about-hero-manga__title-outline">{about.lastname}</span>
                        </h1>
                        <p className="about-hero-manga__lead-text">{about.about_text}</p>

                        {/* Contact Cards - Sening original kodingdagi mantiq */}
                        <div className="row g-4 mb-5">
                            <div className="col-sm-6">
                                <div className="about-hero-manga__contact-card">
                                    <i className="bi bi-envelope-at"></i>
                                    <div>
                                        <span className="about-hero-manga__contact-label">Email</span>
                                        <a href={`mailto:${about.email}`} className="about-hero-manga__contact-link">{about.email}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="about-hero-manga__contact-card">
                                    <i className="bi bi-geo-alt"></i>
                                    <div>
                                        <span className="about-hero-manga__contact-label">Manzil</span>
                                        <span className="about-hero-manga__contact-value">Bukhara, Uzbekistan</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="about-hero-manga__footer">
                            <h6 className="about-hero-manga__footer-label">Follow:</h6>
                            <div className="about-hero-manga__social-grid">
                                <a href={about.github_link} target="_blank" className="about-hero-manga__social-btn github"><i className="bi bi-github"></i></a>
                                <a href={about.telegram_link} target="_blank" className="about-hero-manga__social-btn telegram"><i className="bi bi-telegram"></i></a>
                                <a href={about.instagram_link} target="_blank" className="about-hero-manga__social-btn instagram"><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;