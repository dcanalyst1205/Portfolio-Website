'use client';

import { motion } from 'framer-motion';
import { Calendar, Map, Zap, Target, Award } from 'lucide-react';

const experiences = [
    {
        season: "2025",
        role: "SUMMER INTERN, TECHNOLOGY",
        company: "ONTARIO MEDICAL ASSOCIATION",
        period: "JUN 2025 - AUG 2025",
        location: "TORONTO, ON",
        trackSection: "THE DATA STRAIGHT",
        kpis: [
            { label: "BYOD_POLICY", value: "SECURE", icon: Zap },
            { label: "MIGRATIONS", value: "SUCCESS", icon: Target },
            { label: "TICKETS_RES", value: "HIGH_VOL", icon: Award }
        ],
        summary: "Developed a BYOD policy, migrated organizational systems using .NET/JS, and deployed an asset management dashboard for real-time visibility."
    },
    {
        season: "2024",
        role: "CLOUD NETWORK ENGINEER",
        company: "NASTECH GROUP",
        period: "OCT 2024 - DEC 2024",
        location: "REMOTE / BAHRAIN",
        trackSection: "THE CLOUD APEX",
        kpis: [
            { label: "UPTIME_RES", value: "99.9%", icon: Zap },
            { label: "DOWNTIME_RED", value: "30%", icon: Target },
            { label: "WORKLOAD_RED", value: "40%", icon: Award }
        ],
        summary: "Administered Azure VMs, optimized cloud applications, and implemented automation strategies to reduce manual workload and downtime."
    },
    {
        season: "2024",
        role: "MICROSOFT AZURE INTERN",
        company: "UW / AVANADE / MS",
        period: "JAN 2024 - APR 2024",
        location: "WATERLOO, ON",
        trackSection: "THE AI CHICANE",
        kpis: [
            { label: "FRAUD_DETEC", value: "95%", icon: Zap },
            { label: "THREAT_RESP", value: "-40%", icon: Target },
            { label: "EFFICIENCY", value: "+30%", icon: Award }
        ],
        summary: "Led Azure Logic Apps development for fraud detection and integrated Azure AI into security workflows, earning fundamentals certifications."
    }
];

export default function PitWallTimeline() {
    return (
        <div className="mt-20">
            <div className="flex items-center gap-2 mb-3">
                <Map className="h-3.5 w-3.5 text-[#27F4D2]" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#808080]">
                    EXPERIENCE // PIT_WALL_LOGS
                </span>
            </div>

            <h2
                className="text-3xl font-black tracking-tight text-white leading-none mb-8 italic"
                style={{ fontFamily: 'var(--font-titillium), system-ui, sans-serif' }}
            >
                PIT WALL <span className="f1-text-gradient">TIMELINE</span>
            </h2>

            <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#27F4D2] via-[#1A1A1A] to-[#0A0A0A] hidden md:block" />

                <div className="space-y-12 relative">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={`${exp.season}-${exp.company}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex flex-col md:flex-row gap-8"
                        >
                            <div className="md:w-16 flex md:flex-col items-center gap-4">
                                <div className="h-16 w-16 shrink-0 rounded-full border border-[#27F4D2]/30 bg-[#111111] flex flex-col items-center justify-center relative z-10 shadow-[0_0_15px_rgba(39,244,210,0.1)]">
                                    <span className="text-[10px] font-mono text-[#808080]">SEASON</span>
                                    <span className="text-lg font-black text-white leading-none">{exp.season.substring(2)}</span>
                                </div>
                                <div className="h-px flex-1 bg-[#1A1A1A] md:hidden" />
                            </div>

                            <div className="flex-1 f1-card p-6 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 px-4 py-1 bg-[#27F4D2]/5 border-l border-b border-[#1A1A1A]">
                                    <span className="text-[8px] font-mono text-[#27F4D2] tracking-[0.2em]">{exp.trackSection}</span>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div>
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                            <h3 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] border border-[#1A1A1A] rounded">
                                                <Calendar className="h-3 w-3 text-[#27F4D2]" />
                                                <span className="text-[9px] font-mono text-[#C0C0C0] uppercase tracking-wider">{exp.period}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs font-mono text-[#27F4D2] font-semibold">{exp.company}</span>
                                            <span className="text-[10px] font-mono text-[#808080] uppercase tracking-widest">{exp.location}</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-[#C0C0C0] leading-relaxed max-w-3xl border-l-2 border-[#1A1A1A] pl-4">
                                        {exp.summary}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
