'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, FileText, ChevronRight } from 'lucide-react';

export default function BioPage() {
    const certifications = [
        "Azure AI Fundamentals",
        "Azure Fundamentals",
        "Career Essentials in Data Analysis",
        "Career Essentials in Cybersecurity"
    ];

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
                    <FileText className="h-3.5 w-3.5 text-[#27F4D2]" />
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#808080]">
                        DRIVER_BIO // TECHNICAL_PROFILE
                    </span>
                </div>

                <h1
                    className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-none mb-4 uppercase"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                >
                    HADI <span className="f1-text-gradient">KHAN</span>
                </h1>

                <div className="flex items-center gap-1 mt-6">
                    <span className="text-[9px] font-mono text-[#333]">SYS</span>
                    <ChevronRight className="h-2.5 w-2.5 text-[#333]" />
                    <span className="text-[9px] font-mono text-[#333]">DASHBOARD</span>
                    <ChevronRight className="h-2.5 w-2.5 text-[#333]" />
                    <span className="text-[9px] font-mono text-[#27F4D2]">BIO</span>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Main Bio & Education */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="lg:col-span-8 flex flex-col gap-8"
                >
                    {/* Summary Card */}
                    <div className="f1-card p-8">
                        <h3 className="text-xs font-mono text-[#27F4D2] mb-6 tracking-widest uppercase">
              // CAREER_OVERVIEW
                        </h3>
                        <p className="text-lg text-white font-medium leading-relaxed mb-6">
                            Computer Engineering student at the University of Waterloo with a focus on
                            high-performance computing, cloud architecture, and technical software engineering.
                            Proven track record in optimizing cloud deployments, implementing fraud detection systems,
                            and migrating legacy architectures.
                        </p>
                        <p className="text-[#808080] leading-relaxed">
                            Consistently pushing the boundaries of technical efficiency. Experienced in full-stack
                            development with .NET and JavaScript, automation strategies in Azure/AWS, and
                            quantitative analysis for fintech applications. Dedicated to precision engineering
                            across both software and hardware domains.
                        </p>
                    </div>

                    {/* Education Card */}
                    <div className="f1-card p-8">
                        <div className="flex items-start justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <GraduationCap className="h-5 w-5 text-[#27F4D2]" />
                                <h3 className="text-xs font-mono text-[#C0C0C0] tracking-widest uppercase">
                                    EDUCATION // ACADEMIC_TRACK
                                </h3>
                            </div>
                            <span className="text-[10px] font-mono text-[#808080] border border-[#1A1A1A] px-2 py-0.5 rounded">
                                ENGR_HK_2023
                            </span>
                        </div>

                        <div className="relative pl-6 border-l border-[#27F4D2]/30">
                            <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-[#27F4D2]" />
                            <div className="flex flex-col gap-1 mb-2">
                                <span className="text-xl font-bold text-white uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                                    Bachelor of Applied Sciences, Computer Engineering
                                </span>
                                <span className="text-sm font-mono text-[#27F4D2]">University of Waterloo</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono text-[#808080]">SEP 2023 — PRESENT</span>
                                <span className="text-[10px] font-mono text-[#808080] italic">KITCHENER, ON</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column - Certs & Technical Skills summary */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="lg:col-span-4 flex flex-col gap-8"
                >
                    {/* Certifications Card */}
                    <div className="f1-card p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="h-5 w-5 text-[#27F4D2]" />
                            <h3 className="text-xs font-mono text-[#C0C0C0] tracking-widest uppercase">
                                CERTIFICATIONS
                            </h3>
                        </div>

                        <div className="flex flex-col gap-3">
                            {certifications.map((cert) => (
                                <div key={cert} className="flex items-center justify-between p-3 rounded bg-[#0A0A0A] border border-[#1A1A1A] group hover:border-[#27F4D2]/30 transition-all">
                                    <span className="text-[10px] font-mono text-[#C0C0C0] uppercase tracking-wider">{cert}</span>
                                    <div className="h-1.5 w-1.5 rounded-full bg-[#27F4D2] opacity-20 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Technical KPIs */}
                    <div className="f1-card p-6 bg-gradient-to-br from-[#111111] to-[#0A0A0A]">
                        <h3 className="text-xs font-mono text-[#808080] mb-6 tracking-widest uppercase text-center">
              // TELEMETRY_SUMMARY
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-2xl font-black text-white">95%</span>
                                <span className="text-[8px] font-mono text-[#808080] tracking-tighter uppercase text-center">FRD_DETECTION</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-2xl font-black text-white">0.3s</span>
                                <span className="text-[8px] font-mono text-[#808080] tracking-tighter uppercase text-center">AVG_REP_TIME</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 pt-4 border-t border-[#1A1A1A]">
                                <span className="text-2xl font-black text-white">40%</span>
                                <span className="text-[8px] font-mono text-[#808080] tracking-tighter uppercase text-center">MA_WORKLOAD_RED</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 pt-4 border-t border-[#1A1A1A]">
                                <span className="text-2xl font-black text-white">12%</span>
                                <span className="text-[8px] font-mono text-[#808080] tracking-tighter uppercase text-center">PRD_MAE_ACC</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
