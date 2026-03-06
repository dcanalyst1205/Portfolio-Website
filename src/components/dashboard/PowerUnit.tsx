'use client';

import { motion } from 'framer-motion';
import { Cpu, Database, Server, Zap, Battery, Cog, Monitor } from 'lucide-react';

const powerUnitParts = [
    {
        id: 'ice',
        label: 'ICE',
        fullName: 'Internal Combustion Engine',
        mapping: 'Web App Ecosystem',
        tech: ['.NET', 'Java', 'TypeScript'],
        power: 92,
        icon: Monitor,
        color: '#27F4D2',
    },
    {
        id: 'mguh',
        label: 'MGU-H',
        fullName: 'Motor Generator Unit - Heat',
        mapping: 'Cloud & Infrastructure',
        tech: ['Azure', 'AWS', 'Docker'],
        power: 95,
        icon: Server,
        color: '#C0C0C0',
    },
    {
        id: 'mguk',
        label: 'MGU-K',
        fullName: 'Motor Generator Unit - Kinetic',
        mapping: 'Intelligence & Data',
        tech: ['Python', 'Scikit-Learn', 'Pandas'],
        power: 88,
        icon: Cpu,
        color: '#27F4D2',
    },
    {
        id: 'battery',
        label: 'ES',
        fullName: 'Energy Store',
        mapping: 'Low-Level Engine',
        tech: ['C++', 'VHDL', 'Assembly'],
        power: 85,
        icon: Battery,
        color: '#C0C0C0',
    },
    {
        id: 'turbo',
        label: 'TURBO',
        fullName: 'Turbocharger',
        mapping: 'Real-Time Systems',
        tech: ['RTOS', 'Logic Apps', 'Git'],
        power: 82,
        icon: Database,
        color: '#27F4D2',
    },
    {
        id: 'control',
        label: 'CE',
        fullName: 'Control Electronics',
        mapping: 'Quant & Analysis',
        tech: ['Black-Scholes', 'Risk', 'SQL'],
        power: 80,
        icon: Cog,
        color: '#C0C0C0',
    },
];

export default function PowerUnit() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="f1-card p-6 flex flex-col gap-5"
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-[#27F4D2]" />
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#808080]">
                        TECH_STACK_POWER_UNIT
                    </span>
                </div>
                <span className="text-[10px] font-mono text-[#333] tracking-wider">
                    PU_SPEC_2026
                </span>
            </div>

            {/* Total Power Output */}
            <div className="flex items-end gap-3">
                <span
                    className="text-4xl font-black f1-text-gradient leading-none"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    1026
                </span>
                <div className="flex flex-col pb-0.5">
                    <span className="text-xs font-mono text-[#808080]">BHP</span>
                    <span className="text-[9px] font-mono text-[#27F4D2]">COMBINED OUTPUT</span>
                </div>
            </div>

            {/* Power Unit Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {powerUnitParts.map((part, i) => {
                    const Icon = part.icon;
                    return (
                        <motion.div
                            key={part.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                            className="group relative rounded-lg border border-[#1A1A1A] bg-[#0A0A0A] p-4
                         hover:border-[#27F4D2]/30 transition-all duration-300 cursor-default
                         hover:shadow-[0_0_15px_rgba(39,244,210,0.05)]"
                        >
                            {/* Part Header */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="h-7 w-7 rounded flex items-center justify-center"
                                        style={{ backgroundColor: `${part.color}15` }}
                                    >
                                        <Icon className="h-3.5 w-3.5" style={{ color: part.color }} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span
                                            className="text-xs font-bold text-white tracking-wider"
                                            style={{ fontFamily: 'var(--font-display)' }}
                                        >
                                            {part.label}
                                        </span>
                                        <span className="text-[8px] font-mono text-[#808080]">
                                            {part.fullName}
                                        </span>
                                    </div>
                                </div>
                                <span
                                    className="text-sm font-bold"
                                    style={{ color: part.color }}
                                >
                                    {part.power}%
                                </span>
                            </div>

                            {/* Power Bar */}
                            <div className="h-1 bg-[#1A1A1A] rounded-full overflow-hidden mb-3">
                                <motion.div
                                    className="h-full rounded-full"
                                    style={{ backgroundColor: part.color }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${part.power}%` }}
                                    transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                                />
                            </div>

                            {/* Mapping */}
                            <span className="text-[9px] font-mono text-[#808080] block mb-2">
                                → {part.mapping}
                            </span>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-1.5">
                                {part.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#1A1A1A] text-[#C0C0C0]
                               border border-[#222] group-hover:border-[#27F4D2]/20 transition-colors"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-[#1A1A1A]">
                <span className="text-[9px] font-mono text-[#808080] tracking-wider">
                    POWER_DEPLOYMENT: OPTIMAL
                </span>
                <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#27F4D2] animate-teal-pulse" />
                    <span className="text-[9px] font-mono text-[#27F4D2] tracking-wider">
                        ALL SYSTEMS NOMINAL
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
