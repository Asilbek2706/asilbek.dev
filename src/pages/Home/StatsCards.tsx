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
        <section className="stats-card-modern">
            <div className="container">
                <div className="row g-4">
                    {/* Education Section */}
                    <div className="col-lg-7">
                        <div className="stats-card-modern__card">
                            <h4 className="stats-card-modern__title">
                                <i className="bi bi-mortarboard-fill"></i> Education
                            </h4>
                            <div className="stats-card-modern__timeline">
                                <div className="stats-card-modern__timeline-item">
                                    <span className="stats-card-modern__date">2024 — 2028</span>
                                    <h5 className="stats-card-modern__school">Acharya University Uzbekistan</h5>
                                    <p className="stats-card-modern__text">
                                        Hozirda 2-kurs talabasiman. Men bu yerda murakkab algoritmlar va dasturiy ta'minot muhandisligini o'rganmoqdaman.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Arsenal Section */}
                    <div className="col-lg-5">
                        <div className="stats-card-modern__card">
                            <h4 className="stats-card-modern__title">
                                <i className="bi bi-cpu-fill"></i> Arsenal
                            </h4>
                            <div className="stats-card-modern__skills-grid">
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