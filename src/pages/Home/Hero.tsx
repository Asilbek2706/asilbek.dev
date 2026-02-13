import React from 'react';
import { Link } from 'react-router-dom';
import type {AboutData} from "../../types";

interface HeroProps {
    aboutInfo: AboutData;
}

const Hero: React.FC<HeroProps> = ({ aboutInfo }) => (
    <section className="hero-modern py-5 mb-5 bg-white">
        <div className="container py-lg-4">
            <div className="row align-items-center g-5">
                <div className="col-lg-6 order-2 order-lg-1">
                    <div className="hero-badge mb-3 d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-light border">
                        <span className="pulse-dot"></span>
                        <span className="text-primary fw-bold text-uppercase small ls-2">Active Developer</span>
                    </div>
                    <h1 className="display-2 fw-800 text-dark mb-3">
                        I'm {aboutInfo.firstname} <span className="text-gradient-blue">{aboutInfo.lastname}</span>
                    </h1>
                    <p className="lead text-secondary mb-4 fs-5 fw-light lh-lg">
                        {aboutInfo.firstname} — Acharya University talabasi. Men zamonaviy <strong>Frontend</strong> va <strong>Full-stack</strong> mantiqlari ustida ishlayman.
                    </p>
                    <div className="d-flex flex-wrap gap-3 mt-5">
                        <Link to="/contact" className="btn btn-primary btn-premium shadow-lg px-5 py-3 rounded-4">
                            Bog'lanish <i className="bi bi-arrow-right-short ms-2"></i>
                        </Link>
                        <Link to="/projects" className="btn btn-outline-dark btn-premium-outline px-5 py-3 rounded-4">
                            Loyihalar
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center position-relative">
                    <div className="blob-bg-circle"></div>
                    <img
                        src={aboutInfo.image}
                        alt={aboutInfo.firstname}
                        className="img-fluid profile-img-modern position-relative z-1"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Hero;