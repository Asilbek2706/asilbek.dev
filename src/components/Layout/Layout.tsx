import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Loader from "./Loader";
import {useAboutStore} from "../../store/useAboutStore.ts";
import type {AboutData} from "../../types";
import {getAboutInfo} from "../../services/aboutService.ts";

import '../../styles/Layout/Layout.scss';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { setAboutInfo, aboutInfo } = useAboutStore();

    const { data, isLoading, isError } = useQuery<AboutData>({
        queryKey: ['about'],
        queryFn: getAboutInfo,
        staleTime: Infinity,
    });

    useEffect(() => {
        if (data) setAboutInfo(data);
    }, [data, setAboutInfo]);

    if (isLoading || !aboutInfo) return <Loader />;

    if (isError) return (
        <div className="container py-5 text-center">
            <div className="alert alert-manga">Ma'lumotlarni yuklashda xatolik yuz berdi.</div>
        </div>
    );

    return (
        <div className="layout-wrapper d-flex flex-column min-vh-100">
            <Navbar />
            <main className="flex-grow-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;