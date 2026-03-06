'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Cpu, Clock, Tag, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ProjectProps {
    title: string;
    description: string;
    version: string;
    lapTime: string;
    sectors: string[];
    githubUrl: string;
    liveUrl?: string;
}

export default function ProjectCard({
    title,
    description,
    version,
    lapTime,
    sectors,
    githubUrl,
    liveUrl,
}: ProjectProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="f1-card group relative flex flex-col overflow-hidden"
        >
            {/* Technical Data Sheet Header */}
            <div className="border-b border-[#1A1A1A] bg-[#0A0A0A] p-4 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#808080]">
                        TECHNICAL_DATA_SHEET // {title.toUpperCase().replace(/\s+/g, '_')}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight mt-1" style={{ fontFamily: 'var(--font-display)' }}>
                        {title}
                    </h3>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[9px] font-mono text-[#27F4D2]">STATUS: DEPLOYED</span>
                    <span className="text-[9px] font-mono text-[#808080]">REF: {version}</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-4 flex-1 flex flex-col gap-4">
                <p className="text-xs text-[#C0C0C0] leading-relaxed min-h-[3rem]">
                    {description}
                </p>

                {/* Telemetry Stats */}
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 px-3 py-2 rounded bg-[#0A0A0A] border border-[#1A1A1A]">
                        <Clock className="h-3 w-3 text-[#27F4D2]" />
                        <div className="flex flex-col">
                            <span className="text-[8px] font-mono text-[#808080] tracking-wider uppercase">LAP_TIME</span>
                            <span className="text-[10px] font-mono font-bold text-white">{lapTime}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded bg-[#0A0A0A] border border-[#1A1A1A]">
                        <Tag className="h-3 w-3 text-[#27F4D2]" />
                        <div className="flex flex-col">
                            <span className="text-[8px] font-mono text-[#808080] tracking-wider uppercase">VERSION</span>
                            <span className="text-[10px] font-mono font-bold text-white">{version}</span>
                        </div>
                    </div>
                </div>

                {/* Sector Analysis (Tech Stack) */}
                <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#808080] uppercase">SECTOR_ANALYSIS</span>
                    <div className="flex flex-wrap gap-1.5">
                        {sectors.map((sector, i) => (
                            <span
                                key={sector}
                                className="text-[9px] font-mono px-2 py-0.5 rounded border border-[#1A1A1A] bg-[#1A1A1A]/50 text-[#C0C0C0] group-hover:border-[#27F4D2]/30 transition-colors"
                            >
                                S{i + 1}: {sector}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* DRS Wing (Action Overlay) */}
            <div className="relative h-10 bg-[#1A1A1A] group-hover:bg-[#27F4D2]/5 transition-colors duration-300">
                <AnimatePresence>
                    {isHovered ? (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            exit={{ height: 0 }}
                            className="absolute bottom-0 left-0 right-0 bg-[#27F4D2] overflow-hidden z-10"
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="h-full flex items-center justify-between px-4">
                                <span className="text-[10px] font-black text-[#0A0A0A] tracking-widest uppercase">DRS // OPEN</span>
                                <div className="flex items-center gap-4">
                                    <a
                                        href={githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-[10px] font-black text-[#0A0A0A] hover:opacity-70 transition-opacity"
                                    >
                                        <Github className="h-3 w-3" />
                                        SOURCE
                                    </a>
                                    {liveUrl && (
                                        <a
                                            href={liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-[10px] font-black text-[#0A0A0A] hover:opacity-70 transition-opacity"
                                        >
                                            <ExternalLink className="h-3 w-3" />
                                            LIVE_FEED
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-between px-4">
                            <span className="text-[10px] font-mono text-[#808080] tracking-widest uppercase">DRS // CLOSED</span>
                            <ChevronRight className="h-3.5 w-3.5 text-[#808080] animate-pulse" />
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {/* Shiver effect overlay */}
            <div className="absolute inset-0 pointer-events-none border border-transparent group-hover:animate-shiver" />
        </motion.div>
    );
}
