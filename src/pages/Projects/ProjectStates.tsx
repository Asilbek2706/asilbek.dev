import React from 'react';

export const ProjectLoading: React.FC = () => (
    <div className="col-12 project-state-loading">
        <div className="project-state-loading__wrapper">
            <div className="project-state-loading__spinner" role="status">
                <span className="visually-hidden">Yuklanmoqda...</span>
            </div>
            <h3 className="project-state-loading__text">Ma'lumotlar yuklanmoqda...</h3>
        </div>
    </div>
);

export const ProjectError: React.FC = () => (
    <div className="col-12 project-state-error">
        <div className="project-state-error__card">
            <div className="project-state-error__icon-box">
                <i className="bi bi-exclamation-octagon-fill"></i>
            </div>
            <h2 className="project-state-error__title">Tizimda xatolik!</h2>
            <p className="project-state-error__lead">Loyihalarni yuklab bo'lmadi. Keyinroq qayta urinib ko'ring.</p>
            <div className="project-state-error__footer-line"></div>
        </div>
    </div>
);

export const ProjectEmpty: React.FC = () => (
    <div className="col-12 project-state-empty">
        <div className="project-state-empty__box">
            <i className="bi bi-archive project-state-empty__icon"></i>
            <p className="project-state-empty__text">Hozircha arsenal bo'sh...</p>
            <div className="project-state-empty__decoration"></div>
        </div>
    </div>
);