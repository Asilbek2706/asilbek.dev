import React from 'react';
import type { StatusState } from '../../types';

interface ContactStatusProps {
    status: StatusState | null;
}

const ContactStatus: React.FC<ContactStatusProps> = ({ status }) => {
    if (!status) return null;

    const statusIcons: Record<StatusState['type'], string> = {
        success: 'bi-check-all',
        danger: 'bi-lightning-fill',
        info: 'bi-shield-shaded'
    };

    return (
        <div className={`manga-status-alert manga-status-${status.type} f-u-mt-20`}>
            <div className="manga-status-header">
                <i className={`bi ${statusIcons[status.type]}`}></i>
                <span className="manga-status-tag">SYSTEM_MESSAGE</span>
            </div>
            <div className="manga-status-body">
                {status.msg}
            </div>
            <div className="manga-status-footer-lines">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default ContactStatus;