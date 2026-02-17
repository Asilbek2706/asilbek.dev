import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useAboutStore } from "../../../store/useAboutStore.ts";
import Logo from './Logo';
import NavLinks from './NavLinks';

import '../../../styles/Layout/Navbar.scss';

const Navbar: React.FC = () => {
    const aboutInfo = useAboutStore((state) => state.aboutInfo);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!aboutInfo) return null;

    return (
        <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
            {isOpen && <div className="navbar-overlay" onClick={() => setIsOpen(false)}></div>}

            <div className="container">
                <Logo firstname={aboutInfo.firstname} />

                <button
                    className={`navbar-toggler border-0 shadow-none ${isOpen ? 'active' : ''}`}
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <div className="manga-hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <div className="navbar-nav-wrapper">
                        <NavLinks />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;