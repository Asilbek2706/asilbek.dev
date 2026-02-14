import React from 'react';

const principles = [
    { title: "Toza Kod", desc: "Kodning o'qilishi va arxitekturaviy barqarorligi kalit hisoblanadi.", icon: "bi-code-square", bg: "rgba(13, 110, 253, 0.05)", color: "#0d6efd" },
    { title: "Xavfsizlik", desc: "Backend va Frontend o'rtasida xavfsizlik protokollariga amal qilaman.", icon: "bi-shield-lock", bg: "rgba(25, 135, 84, 0.05)", color: "#198754" },
    { title: "UX/UI", desc: "Interfeys nafaqat chiroyli, balki intuitiv bo'lishi shart.", icon: "bi-stars", bg: "rgba(13, 202, 240, 0.05)", color: "#0dcaf0" }
];

const PrinciplesSection: React.FC = () => (
    <section className="py-5 bg-light-soft">
        <div className="container py-5">
            <div className="text-center mb-5">
                <h2 className="display-5 fw-bold text-dark">Mening ish falsafam</h2>
            </div>
            <div className="row g-4">
                {principles.map((item, idx) => (
                    <div key={idx} className="col-md-4">
                        <div className="principle-card p-5 h-100 bg-white shadow-sm rounded-4">
                            <div className="icon-wrapper-modern mb-4" style={{ backgroundColor: item.bg, color: item.color }}>
                                <i className={`bi ${item.icon}`}></i>
                            </div>
                            <h4 className="fw-bold mb-3">{item.title}</h4>
                            <p className="text-muted mb-0 lh-lg">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default PrinciplesSection;