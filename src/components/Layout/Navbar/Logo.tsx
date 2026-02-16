import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
    firstname: string;
}

const Logo: React.FC<LogoProps> = ({ firstname }) => {
    return (
        <Link className="navbar-brand d-flex align-items-center" to="/">
            <div className="logo-box me-2">
                {firstname.charAt(0)}
            </div>
            <span className="logo-text">
                {firstname}-karomatov<span className="text-primary">.dev</span>
            </span>
        </Link>
    );
};

export default Logo;