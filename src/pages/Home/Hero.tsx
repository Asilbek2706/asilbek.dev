import React from 'react';
import { Link } from 'react-router-dom';
import type { AboutData } from "../../types";

interface HeroProps {
    aboutInfo: AboutData;
}

const Hero: React.FC<HeroProps> = ({ aboutInfo }) => (
    <section className="hero-modern">
        <div className="container">
            <div className="row align-items-center g-5">
                <div className="col-lg-6 order-2 order-lg-1">
                    <div className="hero-modern__badge">
                        <span className="hero-modern__pulse"></span>
                        <span className="hero-modern__badge-text">Active Developer</span>
                    </div>

                    <h1 className="hero-modern__title">
                        I'm {aboutInfo.firstname} <span className="hero-modern__title--outline">{aboutInfo.lastname}</span>
                    </h1>

                    <div className="hero-modern__description">
                        {aboutInfo.firstname} — Acharya University talabasi. Men zamonaviy <strong>Frontend</strong> va <strong>Full-stack</strong> mantiqlari ustida ishlayman.
                    </div>

                    <div className="hero-modern__actions">
                        <Link to="/contact" className="hero-modern__btn hero-modern__btn--primary">
                            Bog'lanish <i className="bi bi-arrow-right-short ms-2"></i>
                        </Link>
                        <Link to="/projects" className="hero-modern__btn hero-modern__btn--outline">
                            Loyihalar
                        </Link>
                    </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 text-center position-relative">
                    <div className="hero-modern__blob"></div>
                    <img
                        src={aboutInfo.image}
                        alt={aboutInfo.firstname}
                        className="hero-modern__img"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Hero;