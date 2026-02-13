import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAboutInfo } from '../../services/aboutService';
import { useAboutStore } from '../../store/useAboutStore';
import type { AboutData } from '../../types';

const About: React.FC = () => {
    const storeAbout = useAboutStore((state) => state.aboutInfo);

    const { data: about, isLoading, isError } = useQuery<AboutData>({
        queryKey: ['about'],
        queryFn: getAboutInfo,
        initialData: storeAbout || undefined,
    });

    const principles = [
        {
            title: "Toza Kod",
            desc: "Kodning o'qilishi va arxitekturaviy barqarorligi loyiha davomiyligi uchun kalit hisoblanadi.",
            icon: "bi-code-square",
            bg: "rgba(13, 110, 253, 0.05)",
            color: "#0d6efd"
        },
        {
            title: "Xavfsizlik",
            desc: "Backend va Frontend o'rtasidagi ma'lumotlar almashinuvida xavfsizlik protokollariga qat'iy amal qilaman.",
            icon: "bi-shield-lock",
            bg: "rgba(25, 135, 84, 0.05)",
            color: "#198754"
        },
        {
            title: "Foydalanuvchi Tajribasi",
            desc: "Interfeys nafaqat chiroyli, balki intuitiv va har qanday qurilmaga moslashuvchan bo'lishi shart.",
            icon: "bi-stars",
            bg: "rgba(13, 202, 240, 0.05)",
            color: "#0dcaf0"
        }
    ];

    if (isLoading && !about) return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-grow text-primary" role="status"></div>
        </div>
    );

    if (isError || !about) return (
        <div className="container py-5 text-center mt-5">
            <div className="glass-card p-5 border-danger border-opacity-25">
                <i className="bi bi-exclamation-triangle fs-1 text-warning mb-3"></i>
                <h3 className="fw-bold">Ma'lumot topilmadi</h3>
                <p className="text-muted">Iltimos, internet aloqasini tekshiring yoki sahifani yangilang.</p>
            </div>
        </div>
    );

    return (
        <div className="about-modern-page bg-white">
            <section className="py-5 position-relative overflow-hidden">
                <div className="container py-lg-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 text-center">
                            <div className="about-image-wrapper position-relative">
                                <div className="abstract-shape"></div>
                                <img
                                    src={about.image}
                                    alt={about.firstname}
                                    className="img-fluid rounded-4 shadow-2xl position-relative z-1 border border-white border-8"
                                    style={{ width: '100%', maxWidth: '400px', height: '450px', objectFit: 'cover' }}
                                />
                                <div className="experience-badge glass-card-sm p-3 shadow-lg d-flex align-items-center">
                                    <div className="icon-circle bg-primary me-3 text-white">
                                        <i className="bi bi-lightning-charge-fill"></i>
                                    </div>
                                    <div className="text-start">
                                        <h6 className="fw-bold mb-0">2+ Years</h6>
                                        <small className="text-muted">Learning & Building</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="ps-lg-4">
                                <span className="text-primary fw-bold text-uppercase ls-2 mb-3 d-block small">Mening tarixchim</span>
                                <h1 className="display-3 fw-800 text-dark mb-4">
                                    {about.firstname} <span className="text-gradient-blue">{about.lastname}</span>
                                </h1>
                                <div className="about-text-content mb-5">
                                    <p className="lead text-secondary lh-lg mb-4" style={{ textAlign: 'justify' }}>
                                        {about.about_text}
                                    </p>
                                </div>

                                <div className="contact-grid-modern row g-4 mb-5">
                                    <div className="col-sm-6">
                                        <div className="contact-card-sm p-3 rounded-4 border">
                                            <i className="bi bi-envelope-at text-primary fs-4 mb-2 d-block"></i>
                                            <span className="text-muted d-block small mb-1">Email manzili</span>
                                            <a href={`mailto:${about.email}`} className="text-dark fw-bold text-decoration-none">{about.email}</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="contact-card-sm p-3 rounded-4 border">
                                            <i className="bi bi-geo-alt text-primary fs-4 mb-2 d-block"></i>
                                            <span className="text-muted d-block small mb-1">Manzil</span>
                                            <span className="text-dark fw-bold">Tashkent, Uzbekistan</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex gap-3 align-items-center">
                                    <h6 className="mb-0 fw-bold me-2 text-muted">Follow:</h6>
                                    <a href={about.github_link} target="_blank" rel="noreferrer" className="social-icon-box github"><i className="bi bi-github"></i></a>
                                    <a href={about.telegram_link} target="_blank" rel="noreferrer" className="social-icon-box telegram"><i className="bi bi-telegram"></i></a>
                                    <a href={about.instagram_link} target="_blank" rel="noreferrer" className="social-icon-box instagram"><i className="bi bi-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light-soft">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h6 className="text-primary fw-bold text-uppercase ls-2 mb-2">Prinsiplar</h6>
                        <h2 className="display-5 fw-bold text-dark">Mening ish falsafam</h2>
                    </div>
                    <div className="row g-4">
                        {principles.map((item, idx) => (
                            <div key={idx} className="col-md-4">
                                <div className="principle-card p-5 h-100 bg-white shadow-sm border-0 rounded-4">
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

            <section className="py-5">
                <div className="container text-center py-5">
                    <h3 className="fw-bold mb-5 display-6 text-dark">Technical Knowledge</h3>
                    <div className="d-flex flex-wrap justify-content-center gap-2 max-w-800 mx-auto">
                        {['React.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Bootstrap 5', 'Tailwind CSS', 'Golang', 'Django', 'Redis', 'PostgreSQL', 'SQLite3', 'Git', 'Figma'].map((skill) => (
                            <div key={skill} className="skill-chip px-4 py-2 border rounded-pill transition">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .about-modern-page { font-family: 'Plus Jakarta Sans', sans-serif; }
                .fw-800 { font-weight: 800; }
                .ls-2 { letter-spacing: 2.5px; }
                .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); }
                .border-8 { border-width: 8px !important; }

                .text-gradient-blue {
                    background: linear-gradient(90deg, #0d6efd, #0dcaf0);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .abstract-shape {
                    position: absolute;
                    width: 120%;
                    height: 120%;
                    background: radial-gradient(circle, rgba(13, 110, 253, 0.05) 0%, transparent 70%);
                    top: -10%;
                    left: -10%;
                    z-index: 0;
                }

                .experience-badge {
                    position: absolute;
                    bottom: 30px;
                    right: -20px;
                    z-index: 2;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    border-radius: 18px;
                    min-width: 180px;
                }

                .icon-circle {
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .contact-card-sm {
                    background: #fcfcfc;
                    transition: all 0.3s ease;
                }
                .contact-card-sm:hover {
                    background: white;
                    border-color: #0d6efd !important;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                }

                .social-icon-box {
                    width: 45px;
                    height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    text-decoration: none;
                    font-size: 1.2rem;
                    color: #555;
                    background: #f1f3f5;
                    transition: 0.3s;
                }
                .social-icon-box:hover { color: white; transform: translateY(-3px); }
                .github:hover { background: #333; }
                .telegram:hover { background: #0088cc; }
                .instagram:hover { background: #e4405f; }

                .principle-card {
                    transition: all 0.4s ease;
                }
                .principle-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.1) !important;
                }

                .icon-wrapper-modern {
                    width: 60px;
                    height: 60px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.8rem;
                }

                .skill-chip {
                    background: #fff;
                    color: #444;
                    font-weight: 500;
                    cursor: default;
                }
                .skill-chip:hover {
                    background: #0d6efd;
                    color: white;
                    border-color: #0d6efd;
                    transform: scale(1.1);
                }
                
                .bg-light-soft { background-color: #f8fafc; }
                .max-w-800 { max-width: 800px; }

                @media (max-width: 991px) {
                    .experience-badge { right: 10px; bottom: 10px; }
                }
            `}</style>
        </div>
    );
};

export default About;