import React, { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { sendQuestion, getQuestions } from '../../services/contactService';
import type { Question } from '../../types';

const Contact: React.FC = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<{ type: string, msg: string } | null>(null);

    const { data: questions, isLoading: isListLoading } = useQuery({
        queryKey: ['questions'],
        queryFn: getQuestions,
        refetchInterval: 10000,
    });

    const mutation = useMutation({
        mutationFn: sendQuestion,
        onSuccess: async (result) => {
            if (result.status) {
                setStatus({ type: 'success', msg: 'Xabar yuborildi! Admin javobini kuting.' });
                setFormData({ name: '', email: '', message: '' });
                await queryClient.invalidateQueries({ queryKey: ['questions'] });
            } else {
                setStatus({ type: 'danger', msg: result.message || 'Xatolik yuz berdi' });
            }
        },
        onError: () => {
            setStatus({ type: 'danger', msg: 'Server bilan aloqa uzildi' });
        }
    });

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            setStatus({ type: 'danger', msg: 'reCAPTCHA hali tayyor emas' });
            return;
        }

        try {
            setStatus({ type: 'info', msg: 'Xavfsizlik tekshiruvi...' });

            const token = await executeRecaptcha('contact_form');

            mutation.mutate({
                ...formData,
                recaptcha_token: token
            });
        } catch (err) {
            setStatus({ type: 'danger', msg: 'Yuborishda xatolik yuz berdi' });
            console.error('Submit error:', err);
        }
    }, [executeRecaptcha, formData, mutation]);

    return (
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-5">
                    <div className="card shadow-sm border-0 sticky-top" style={{ top: '100px' }}>
                        <div className="card-body p-4">
                            <h3 className="fw-bold mb-4">Savol yuborish</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ismingiz"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="form-control"
                                        placeholder="Savolingiz..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 py-2 fw-bold"
                                    disabled={mutation.isPending}
                                >
                                    {mutation.isPending ? 'Yuborilmoqda...' : 'Yuborish'}
                                </button>
                            </form>
                            {status && (
                                <div className={`alert alert-${status.type} mt-3 mb-0 small`}>
                                    {status.msg}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="col-lg-7">
                    <h3 className="fw-bold mb-4">Oxirgi savollar</h3>
                    <div className="questions-wrapper">
                        {isListLoading ? (
                            <p className="text-muted">Yuklanmoqda...</p>
                        ) : questions && questions.length > 0 ? (
                            [...questions].reverse().map((q: Question, index: number) => (
                                <div key={index} className="card border-0 shadow-sm mb-4 border-start border-primary border-4">
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between mb-2">
                                            <h6 className="fw-bold text-dark mb-0">{q.name}</h6>
                                            <span className="badge bg-light text-muted fw-normal border">Savol</span>
                                        </div>
                                        <p className="text-secondary small mb-0">"{q.message}"</p>

                                        {q.answer ? (
                                            <div className="mt-4 p-3 bg-light rounded border-start border-success border-3">
                                                <div className="d-flex align-items-center mb-1">
                                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                    <strong className="text-success small">Javob:</strong>
                                                </div>
                                                <p className="mb-0 text-dark small">{q.answer}</p>
                                            </div>
                                        ) : (
                                            <div className="mt-3">
                                                <small className="text-warning small italic">
                                                    Javob kutilmoqda...
                                                </small>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-muted">Hozircha savollar yo'q.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;