import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAboutStore } from '../../store/useAboutStore';
import { getProjects } from '../../services/projectService';
import Hero from './Hero';

import type { Project } from '../../types';
import StatsCard from "./StatsCards.tsx";
import SectionHeader from "../../components/Shared/UI/SectionHeader.tsx";
import ProjectCard from "../../components/Shared/UI/ProjectCard.tsx";

import '../../styles/Home/Home.scss';

const Home: React.FC = () => {
  const aboutInfo = useAboutStore((state) => state.aboutInfo);
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  if (!aboutInfo) return null;

  return (
      <div className="home-page-container fade-in">
        <Hero aboutInfo={aboutInfo} />

        <StatsCard />

        <section className="py-5 bg-white">
          <div className="container py-5">
            <SectionHeader
                subtitle="Portfolio"
                title="Oxirgi loyihalar"
                centered
            />
              <div className="row g-4 justify-content-center mt-2">
                  {isLoading ? (
                      <div className="col-12 text-center py-5">
                          <h2 className="n-util-font-mono n-util-text-ink n-util-text-uppercase">
                              Ma'lumotlar yuklanmoqda...
                          </h2>
                      </div>
                  ) : (
                      projects && projects.slice(-2).reverse().map((p, index) => (
                          <div
                              key={`${p.id}-${index}`}
                              className="col-md-6 col-lg-5"
                          >
                              <ProjectCard project={p} />
                          </div>
                      ))
                  )}
              </div>
            <div className="text-center mt-5 pt-3">
              <a href="/projects" className="btn btn-outline-primary px-5 py-3 rounded-pill fw-bold">
                Barcha loyihalarni ko'rish
              </a>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Home;