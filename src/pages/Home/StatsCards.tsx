import React from 'react';
import SkillChip from "../../components/Shared/UI/SkillChip.tsx";

const StatsCard: React.FC = () => {
    const skills = [
        { name: 'React.js', icon: 'bi-code-slash', color: '#61DAFB' },
        { name: 'TypeScript', icon: 'bi-filetype-tsx', color: '#3178C6' },
        { name: 'Golang', icon: 'bi-cpu-fill', color: '#00ADD8' },
        { name: 'Redis', icon: 'bi-database-fill-check', color: '#DC382D' },
        { name: 'Python', icon: 'bi-terminal-fill', color: '#3776AB' },
        { name: 'SASS', icon: 'bi-palette-fill', color: '#CC6699' }
    ];

    return (
        <section className="py-5 bg-light-soft">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-7">
                        <div className="glass-card-premium h-100 p-4 p-md-5 bg-white border rounded-4 shadow-sm">
                            <h4 className="fw-bold mb-4 d-flex align-items-center">
                                <i className="bi bi-mortarboard-fill text-primary me-3 fs-3"></i> Education
                            </h4>
                            <div className="modern-timeline ps-3 border-start border-primary border-2">
                                <div className="mb-0">
                                    <span className="badge bg-primary bg-opacity-10 text-primary mb-2">2024 — 2028</span>
                                    <h5 className="fw-bold">Acharya University Uzbekistan</h5>
                                    <p className="text-muted small lh-lg mb-0">Hozirda 2-kurs talabasiman. Men bu yerda murakkab algoritmlar va dasturiy ta'minot muhandisligini o'rganmoqdaman.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="glass-card-premium h-100 p-4 p-md-5 bg-white border rounded-4 shadow-sm">
                            <h4 className="fw-bold mb-4 d-flex align-items-center">
                                <i className="bi bi-cpu-fill text-primary me-3 fs-3"></i> Arsenal
                            </h4>
                            <div className="d-flex flex-wrap gap-2">
                                {skills.map(skill => (
                                    <SkillChip key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsCard;