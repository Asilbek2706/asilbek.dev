import React from 'react';

const FooterContact: React.FC<{ email: string; phone: string }> = ({ email, phone }) => (
    <div className="col-lg-3 col-md-6">
        <h6 className="footer-title">Bog'lanish</h6>
        <div className="contact-list">
            <div className="contact-item">
                <i className="bi bi-envelope-at text-primary"></i>
                <span>{email}</span>
            </div>
            <div className="contact-item">
                <i className="bi bi-geo-alt text-primary"></i>
                <span>Bukhara, Uzbekistan</span>
            </div>
            <div className="contact-item">
                <i className="bi bi-telephone text-primary"></i>
                <span>+{phone}</span>
            </div>
        </div>
    </div>
);

export default FooterContact;