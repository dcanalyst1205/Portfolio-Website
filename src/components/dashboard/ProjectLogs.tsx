'use client';

import { motion } from 'framer-motion';
import { Settings, ChevronRight } from 'lucide-react';
import ProjectCard from '@/components/projects/ProjectCard';

const projects = [
    {
        title: "QuantOptions Visualizer",
        description: "Professional-grade option pricing tool implementing the Black-Scholes model for Calls/Puts and interactive 3D-style sensitivity heatmaps.",
        version: "1.5.0",
        lapTime: "2025",
        sectors: ["Next.js 15", "TypeScript", "Recharts"],
        githubUrl: "https://github.com/dcanalyst1205",
        liveUrl: "https://github.com/dcanalyst1205"
    },
    {
        title: "Personal Finance Dashboard",
        description: "Responsive fintech dashboard providing risk indicators for portfolios and interactive 1-30 year investment growth projections.",
        version: "1.2.0",
        lapTime: "2025",
        sectors: ["Next.js 15", "Tailwind CSS", "shadcn/ui"],
        githubUrl: "https://github.com/dcanalyst1205",
        liveUrl: "https://github.com/dcanalyst1205"
    },
    {
        title: "Housing Price Predictor",
        description: "Machine learning model achieving 12% MAE using regression analysis, structured with Scikit-Learn for accelerated training workflows.",
        version: "1.0.0",
        lapTime: "2024",
        sectors: ["Python", "Pandas", "Scikit-Learn"],
        githubUrl: "https://github.com/dcanalyst1205"
    }
];

export default function ProjectLogs() {
    return (
        <div className="mt-12">
            <div className="flex items-center gap-2 mb-3">
                <Settings className="h-3.5 w-3.5 text-[#27F4D2]" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#808080]">
                    PROJECTS // ENGINEERING_BAY
                </span>
            </div>

            <h2
                className="text-3xl font-black tracking-tight text-white leading-none mb-8 italic"
                style={{ fontFamily: 'var(--font-titillium), system-ui, sans-serif' }}
            >
                PROJECT <span className="f1-text-gradient">LOGS</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
