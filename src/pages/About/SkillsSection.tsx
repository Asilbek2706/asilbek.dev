import React from "react";

const SkillsSection: React.FC = () => {
    const skills = ['React.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Bootstrap 5', 'Tailwind CSS', 'Golang', 'Django', 'Redis', 'PostgreSQL', 'SQLite3', 'Git', 'Figma'];

    return (
        <section className="py-5 overflow-hidden">
            <div className="container-fluid px-0 py-5">
                <h3 className="fw-bold mb-5 display-6 text-dark text-center">Texnik bilimlar</h3>

                <div className="manga-marquee">
                    <div className="marquee-content">
                        {skills.map((skill, idx) => (
                            <div key={`skill-1-${idx}`} className="skill-chip">
                                {skill}
                            </div>
                        ))}
                        {skills.map((skill, idx) => (
                            <div key={`skill-2-${idx}`} className="skill-chip">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;