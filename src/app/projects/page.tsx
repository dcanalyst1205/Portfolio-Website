'use client';

import { motion } from 'framer-motion';
import { Settings, Cpu, ChevronRight } from 'lucide-react';
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

export default function ProjectsPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
            {/* Header section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-12"
            >
                <div className="flex items-center gap-2 mb-3">
                    <Settings className="h-3.5 w-3.5 text-[#27F4D2]" />
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#808080]">
                        PROJECTS // ENGINEERING_BAY
                    </span>
                </div>

                <h1
                    className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-none mb-4"
                    style={{ fontFamily: 'var(--font-titillium), system-ui, sans-serif', fontStyle: 'italic' }}
                >
                    PROJECT <span className="f1-text-gradient">LOGS</span>
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <p className="text-sm text-[#808080] font-mono max-w-2xl">
                        Accessing technical logs for ongoing and completed engineering sprints.
                        Detailed sector analysis and performance telemetry available for each deployment.
                    </p>

                    <div className="flex items-center gap-4 px-4 py-2 bg-[#111111] border border-[#1A1A1A] rounded">
                        <div className="flex flex-col">
                            <span className="text-[8px] font-mono text-[#808080]">ACTIVE_LOGS</span>
                            <span className="text-sm font-bold text-white uppercase">{projects.length} UNITS</span>
                        </div>
                        <div className="h-8 w-px bg-[#1A1A1A]" />
                        <div className="flex flex-col">
                            <span className="text-[8px] font-mono text-[#808080]">SYSTEM_HEALTH</span>
                            <span className="text-sm font-bold text-[#27F4D2]">OPTIMAL</span>
                        </div>
                    </div>
                </div>

                {/* Breadcrumb bar */}
                <div className="flex items-center gap-1 mt-6">
                    <span className="text-[9px] font-mono text-[#333]">SYS</span>
                    <ChevronRight className="h-2.5 w-2.5 text-[#333]" />
                    <span className="text-[9px] font-mono text-[#333]">DASHBOARD</span>
                    <ChevronRight className="h-2.5 w-2.5 text-[#333]" />
                    <span className="text-[9px] font-mono text-[#27F4D2]">PROJECT_LOGS</span>
                </div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>

            {/* Footer Info */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-16 flex flex-col items-center gap-4"
            >
                <div className="flex items-center gap-3">
                    <div className="h-px w-12 bg-[#1A1A1A]" />
                    <span className="text-[10px] font-mono text-[#333] tracking-[0.3em]">END_OF_TRANS</span>
                    <div className="h-px w-12 bg-[#1A1A1A]" />
                </div>
                <p className="text-[10px] font-mono text-[#808080] tracking-widest text-center uppercase">
                    Precise engineering for the digital circuit // Season 2026
                </p>
            </motion.div>
        </div>
    );
}
