import React from 'react';
import type { ContactFormData } from '../../types';

interface ContactFormProps {
    formData: ContactFormData;
    setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
    onSubmit: (e: React.FormEvent) => void;
    isPending: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ formData, setFormData, onSubmit, isPending }) => (
    <div className="manga-card-brutal">
        <h2 className="manga-header-text">SAVOL_YO'LLASH</h2>
        <form onSubmit={onSubmit} className="manga-form-stack">
            <div className="manga-field">
                <label>ISMINGIZ</label>
                <input
                    type="text"
                    className="manga-input"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                />
            </div>
            <div className="manga-field">
                <label>EMAIL MANZIL</label>
                <input
                    type="email"
                    className="manga-input"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                />
            </div>
            <div className="manga-field">
                <label>XABARINGIZ</label>
                <textarea
                    className="manga-input"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                ></textarea>
            </div>
            <button type="submit" className="manga-btn-giant" disabled={isPending}>
                <span>{isPending ? 'YUBORILMOQDA...' : 'YUBORISH_READY'}</span>
            </button>
        </form>
    </div>
);

export default ContactForm;