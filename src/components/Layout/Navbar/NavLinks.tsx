import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks: React.FC = () => {
    const links = [
        { path: "/", label: "Asosiy" },
        { path: "/about", label: "Men haqimda" },
        { path: "/projects", label: "Loyihalar" },
        { path: "/contact", label: "Bog'lanish" }
    ];

    return (
        <ul className="navbar-nav ms-auto gap-1">
            {links.map((link) => (
                <li className="nav-item" key={link.path}>
                    <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                            `nav-link custom-link ${isActive ? 'active-link' : ''}`
                        }
                    >
                        {link.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;