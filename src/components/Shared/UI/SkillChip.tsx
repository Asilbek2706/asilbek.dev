import React from 'react';

interface SkillChipProps {
    name: string;
    icon?: string;
    color?: string;
}

const SkillChip: React.FC<SkillChipProps> = ({ name, icon, color }) => (
    <div className="skill-item-modern d-flex align-items-center gap-2 px-3 py-2 bg-light rounded-pill transition shadow-sm border">
        {icon && <i className={`bi ${icon}`} style={{ color: color || '#0d6efd' }}></i>}
        <span className="fw-medium small text-dark">{name}</span>
    </div>
);

export default SkillChip;