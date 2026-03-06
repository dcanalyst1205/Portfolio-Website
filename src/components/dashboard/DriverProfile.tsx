'use client';

import { motion } from 'framer-motion';
import { User, MapPin, Flag } from 'lucide-react';

const skills = [
    { name: 'TypeScript', value: 92, color: '#27F4D2' },
    { name: 'Python', value: 90, color: '#27F4D2' },
    { name: 'Azure', value: 88, color: '#C0C0C0' },
    { name: '.NET', value: 85, color: '#C0C0C0' },
    { name: 'React/Next.js', value: 85, color: '#27F4D2' },
    { name: 'C++', value: 80, color: '#C0C0C0' },
];

export default function DriverProfile() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="f1-card p-6 flex flex-col gap-6"
        >
            {/* Header Tag */}
            <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#808080]">
                    DRIVER_PROFILE // ID_001
                </span>
                <div className="h-1.5 w-1.5 rounded-full bg-[#27F4D2]" />
            </div>

            {/* Profile Section */}
            <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="relative shrink-0">
                    <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-[#27F4D2]/20 to-[#1A1A1A] border border-[#1A1A1A] flex items-center justify-center overflow-hidden">
                        <User className="h-10 w-10 text-[#27F4D2]/60" />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -bottom-2 -right-2 h-7 w-7 rounded bg-[#27F4D2] flex items-center justify-center">
                        <span className="text-xs font-black text-[#0A0A0A]">01</span>
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1">
                    <h2
                        className="text-xl font-bold tracking-tight text-white uppercase"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Hadi Khan
                    </h2>
                    <div className="flex items-center gap-2">
                        <Flag className="h-3 w-3 text-[#808080]" />
                        <span className="text-xs font-mono text-[#808080] tracking-wider uppercase">
                            Computer Engineering @ UWaterloo
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-[#808080]" />
                        <span className="text-xs font-mono text-[#808080] tracking-wider uppercase">
                            Kitchener, ON
                        </span>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-[#1A1A1A]" />

            {/* Skill Telemetry */}
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#808080] mb-2">
                    PERFORMANCE_TELEMETRY
                </span>
                {skills.map((skill, i) => (
                    <div key={skill.name} className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-[#808080] w-24 truncate">
                            {skill.name}
                        </span>
                        <div className="flex-1 h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                            <motion.div
                                className="h-full rounded-full"
                                style={{ backgroundColor: skill.color }}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.value}%` }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.5 + i * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            />
                        </div>
                        <span className="text-[10px] font-mono text-[#C0C0C0] w-8 text-right">
                            {skill.value}%
                        </span>
                    </div>
                ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 mt-2">
                {[
                    { label: 'COMMITS', value: '1.2K+' },
                    { label: 'PROJECTS', value: '15+' },
                    { label: 'SEASONS', value: '4' },
                ].map((stat) => (
                    <div
                        key={stat.label}
                        className="flex flex-col items-center gap-1 py-2 rounded bg-[#1A1A1A]/50 border border-[#1A1A1A]"
                    >
                        <span className="text-sm font-bold text-[#27F4D2]">{stat.value}</span>
                        <span className="text-[8px] font-mono text-[#808080] tracking-wider">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
