import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAboutInfo } from '../../services/aboutService';
import { useAboutStore } from '../../store/useAboutStore';
import HeroSection from './HeroSection';
import PrinciplesSection from './PrinciplesSection';
import SkillsSection from './SkillsSection';

import '../../styles/About/About.scss';


const About: React.FC = () => {
    const storeAbout = useAboutStore((state) => state.aboutInfo);
    const { data: about, isLoading, isError } = useQuery({
        queryKey: ['about'],
        queryFn: getAboutInfo,
        initialData: storeAbout || undefined,
    });

    if (isLoading && !about) return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-grow text-primary"></div>
        </div>
    );

    if (isError || !about) return (
        <div className="container py-5 text-center mt-5">
            <div className="glass-card p-5 border-danger border-opacity-25">
                <i className="bi bi-exclamation-triangle fs-1 text-warning mb-3"></i>
                <h3 className="fw-bold">Ma'lumot topilmadi</h3>
            </div>
        </div>
    );

    return (
        <div className="about-modern-page bg-white">
            <HeroSection about={about} />
            <PrinciplesSection />
            <SkillsSection />
        </div>
    );
};

export default About;