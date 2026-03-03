import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNav } from '../../../context/NavContext';
import styles from '../../../styles/Layout/Navbar/NavLinks.module.scss';

const NavLinks: React.FC = () => {
    const { setIsMenuOpen } = useNav();

    const links = [
        { path: "/", label: "Asosiy" },
        { path: "/about", label: "Men haqimda" },
        { path: "/projects", label: "Loyihalar" },
        { path: "/contact", label: "Bog'lanish" }
    ];

    const socials = [
        { icon: "bi-telegram", url: "https://t.me/username" },
        { icon: "bi-github", url: "https://github.com/username" },
        { icon: "bi-instagram", url: "https://instagram.com/username" }
    ];

    return (
        <div className={styles.navWrapper}>
            <ul className={styles.navList}>
                {links.map((link, index) => (
                    <li key={link.path} className={`m-reveal delay-${index + 1}`}>
                        <NavLink
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className={`${styles.socialLinks} m-reveal delay-5`}>
                {socials.map((social, idx) => (
                    <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                    >
                        <i className={`bi ${social.icon}`}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default NavLinks;