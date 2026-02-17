import React, { useState, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { sendQuestion, getQuestions } from '../../services/contactService';
import type { Question, ContactFormData, StatusState } from '../../types';

import ContactForm from './ContactForm';
import QuestionList from './QuestionList';
import ContactStatus from './ContactStatus';

import '../../styles/Contact/Contact.scss';

const Contact: React.FC = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<StatusState | null>(null);

    const { data: questions, isLoading: isListLoading } = useQuery<Question[]>({
        queryKey: ['questions'],
        queryFn: getQuestions,
        refetchInterval: 10000,
    });

    const mutation = useMutation({
        mutationFn: (data: ContactFormData & { recaptcha_token: string }) => sendQuestion(data),
        onSuccess: async (result) => {
            if (result.status) {
                setStatus({ type: 'success', msg: 'Xabar yuborildi! Admin javobini kuting.' });
                setFormData({ name: '', email: '', message: '' });
                await queryClient.invalidateQueries({ queryKey: ['questions'] });
            } else {
                setStatus({ type: 'danger', msg: result.message || 'Xatolik yuz berdi' });
            }
        },
        onError: () => setStatus({ type: 'danger', msg: 'Server bilan aloqa uzildi' })
    });

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submit bosildi...");

        if (!executeRecaptcha) {
            console.error("reCAPTCHA yuklanmagan!");
            setStatus({ type: 'danger', msg: 'reCAPTCHA hali tayyor emas' });
            return;
        }

        try {
            setStatus({ type: 'info', msg: 'Xavfsizlik tekshiruvi...' });

            const token = await executeRecaptcha('contact');
            console.log("reCAPTCHA Token olindi:", token);

            mutation.mutate({ ...formData, recaptcha_token: token });
        } catch (err) {
            console.error("reCAPTCHA xatosi:", err);
            setStatus({ type: 'danger', msg: 'Xavfsizlik tekshiruvidan o\'tilmadi' });
        }
    }, [executeRecaptcha, formData, mutation]);


    return (
        <section className="contact-manga-wrapper">
            <div className="manga-halftone"></div>
            <div className="container relative z-10 py-5">
                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="contact-sidebar-sticky">
                            <ContactForm
                                formData={formData}
                                setFormData={setFormData}
                                onSubmit={handleSubmit}
                                isPending={mutation.isPending}
                            />
                            <ContactStatus status={status} />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <QuestionList questions={questions} isLoading={isListLoading} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;