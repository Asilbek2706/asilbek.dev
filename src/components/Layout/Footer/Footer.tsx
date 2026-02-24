import React from 'react';
import { Link } from 'react-router-dom';
import { useAboutStore } from "../../../store/useAboutStore.ts";
import FooterBrand from './FooterBrand';
import FooterContact from './FooterContact';
import '../../../styles/Layout/Footer.scss';

const Footer: React.FC = () => {
    const aboutInfo = useAboutStore((state) => state.aboutInfo);

    if (!aboutInfo) return null;

    return (
        <footer className="footer-premium text-white">
            <div className="container">
                <div className="footer-main-content py-5">
                    <div className="row g-5">
                        <FooterBrand info={aboutInfo} />
                        <FooterContact email={aboutInfo.email} phone={aboutInfo.phone_number} />

                        <div className="col-lg-4">
                            <div className="cta-box">
                                <h5 className="fw-bold mb-3">Savollaringiz bormi?</h5>
                                <p className="small text-white-50">Loyiha bo'yicha maslahat yoki hamkorlik uchun xabar qoldiring.</p>
                                <Link to="/contact" className="btn btn-primary w-100 fw-bold rounded-0 py-2 mt-2">
                                    Xabar yuborish
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright py-4 border-top border-white border-opacity-10">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <span className="opacity-50 small">
                                &copy; {new Date().getFullYear()} {aboutInfo.firstname}.dev — Barcha huquqlar himoyalangan.
                            </span>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <span className="badge-manga">Build with React</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;