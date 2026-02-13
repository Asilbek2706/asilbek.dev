import React, { useState } from 'react';
import { useAboutStore } from "../../../store/useAboutStore.ts";
import Logo from './Logo';
import NavLinks from './NavLinks';

import '../../../styles/Layout/Navbar.scss';


const Navbar: React.FC = () => {
    const aboutInfo = useAboutStore((state) => state.aboutInfo);
    const [isOpen, setIsOpen] = useState(false);

    if (!aboutInfo) return null;

    return (
        <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
            <div className="container">
                <Logo firstname={aboutInfo.firstname} />

                <button
                    className={`navbar-toggler border-0 shadow-none ${isOpen ? 'active' : ''}`}
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="manga-hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : 'x'}`} id="navbarNav">
                    <NavLinks />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;