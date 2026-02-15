import React from 'react';
import type { Question } from '../../types';

interface QuestionListProps {
    questions?: Question[];
    isLoading: boolean;
}

const QuestionList: React.FC<QuestionListProps> = ({ questions, isLoading }) => (
    <div className="manga-questions-stack">
        <h2 className="manga-header-text mb-5">OXIRGI_XABARLAR</h2>
        {isLoading ? (
            <div className="manga-skeleton-card">Loading...</div>
        ) : questions && questions.length > 0 ? (
            [...questions].reverse().map((q, idx) => (
                <div key={idx} className="manga-thread-group">
                    {/* Savol Bloki */}
                    <div className="manga-msg-bubble">
                        <div className="manga-msg-header">
                            <span className="manga-user-tag">{q.name}</span>
                            <span className="manga-timestamp">USER_SENT</span>
                        </div>
                        <p className="manga-text-body">{q.message}</p>
                    </div>

                    {/* Javob Bloki - Faqat javob bo'lsa ko'rinadi */}
                    {q.answer && (
                        <div className="manga-reply-wrapper">
                            <div className="manga-reply-connector"></div>
                            <div className="manga-reply-box">
                                <div className="manga-reply-header">
                                    <span className="manga-admin-badge">ADMIN_CORE</span>
                                    <i className="bi bi-patch-check-fill"></i>
                                </div>
                                <p className="manga-answer-text">{q.answer}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))
        ) : (
            <div className="manga-empty-state">Hozircha xabarlar yo'q...</div>
        )}
    </div>
);

export default QuestionList;