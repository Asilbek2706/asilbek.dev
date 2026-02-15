import React from "react";

const SkillsSection: React.FC = () => {
    const skills = [
        'React.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3',
        'Bootstrap 5', 'Tailwind CSS', 'Golang', 'Django',
        'Redis', 'PostgreSQL', 'SQLite3', 'Git', 'Figma'
    ];

    return (
        <section className="skills-section-manga">
            <div className="skills-section-manga__container">
                {/* Sarlavha - Manga uslubida */}
                <div className="skills-section-manga__header">
                    <h3 className="skills-section-manga__title">Texnik bilimlar</h3>
                </div>

                {/* Marquee - To'xtovsiz harakat */}
                <div className="skills-section-manga__marquee">
                    <div className="skills-section-manga__content">
                        {/* Birinchi qator */}
                        {skills.map((skill, idx) => (
                            <div key={`skill-1-${idx}`} className="skills-section-manga__chip">
                                <span className="skills-section-manga__dot"></span>
                                {skill}
                            </div>
                        ))}
                        {/* Takrorlanish (Infinite effect uchun) */}
                        {skills.map((skill, idx) => (
                            <div key={`skill-2-${idx}`} className="skills-section-manga__chip">
                                <span className="skills-section-manga__dot"></span>
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