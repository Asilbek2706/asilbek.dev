import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import './index.scss';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <GoogleReCaptchaProvider reCaptchaKey="6LfAH2gsAAAAAKLLBq6V09t6nnUhKpfRAEBOKH3b">
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </GoogleReCaptchaProvider>
        </QueryClientProvider>
    </React.StrictMode>
);