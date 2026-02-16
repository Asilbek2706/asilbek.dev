import React from 'react';
import type {AboutData} from "../../../types";

const FooterBrand: React.FC<{ info: AboutData }> = ({ info }) => (
    <div className="col-lg-5">
        <div className="footer-brand mb-4">
            <span className="logo-text text-white">
                {info.firstname}-karomatov<span className="text-primary">.dev</span>
            </span>
        </div>
        <p className="footer-quote mb-4">
            "Kod yozish — bu san'at, interfeys yaratish esa — bu foydalanuvchi qalbini zabt etishdir."
        </p>
        <div className="social-grid">
            <a href={info.github_link} target="_blank" rel="noreferrer" className="social-pill">
                <i className="bi bi-github"></i> <span>GitHub</span>
            </a>
            <a href={info.telegram_link} target="_blank" rel="noreferrer" className="social-pill">
                <i className="bi bi-telegram"></i> <span>Telegram</span>
            </a>
        </div>
    </div>
);

export default FooterBrand;