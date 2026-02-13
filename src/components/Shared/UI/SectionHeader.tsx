import React from 'react';

interface SectionHeaderProps {
    subtitle: string;
    title: string;
    centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title, centered = false }) => (
    <div className={`mb-5 ${centered ? 'text-center' : ''}`}>
        <h6 className="text-primary fw-bold text-uppercase ls-2 mb-2 small">{subtitle}</h6>
        <h2 className="display-5 fw-bold text-dark">{title}</h2>
        {centered && <div className="mx-auto bg-primary rounded mt-2" style={{ width: '50px', height: '4px' }}></div>}
    </div>
);

export default SectionHeader;