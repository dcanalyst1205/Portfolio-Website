'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Radio, Zap, User } from 'lucide-react';

interface SteeringWheelProps {
    onUnlock: () => void;
}

const buttons = [
    { id: 'DRS', label: 'DRS', icon: Zap, section: 'PROJECT_LOGS', status: 'READY', color: '#27F4D2' },
    { id: 'N', label: 'N', icon: Activity, section: 'TELEMETRY', status: 'SYNCHRONIZED', color: '#C0C0C0' },
    { id: 'RADIO', label: 'COMMS', icon: Radio, section: 'CONTACT', status: 'UPLINK_ACTIVE', color: '#27F4D2' },
    { id: 'BIO', label: 'BIO', icon: User, section: 'DRIVER_PROFILE', status: 'STABLE', color: '#C0C0C0' },
];

export default function SteeringWheel({ onUnlock }: SteeringWheelProps) {
    const [hoveredButton, setHoveredButton] = useState<typeof buttons[0] | null>(null);

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#050505] perspective-1000">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(39,244,210,0.05)_0%,transparent_70%)] pointer-events-none" />

            {/* Main Steering Wheel Container */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                exit={{
                    scale: 5,
                    opacity: 0,
                    z: 500,
                    filter: 'blur(10px)',
                    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
                }}
                className="relative z-10 w-[700px] h-[550px] transition-all duration-700"
            >
                {/* SVG CHASSIS - High Fidelity Mercedes F1 Geometry */}
                <svg viewBox="0 0 700 550" className="absolute inset-0 w-full h-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]">
                    <defs>
                        <pattern id="carbon-fiber" width="4" height="4" patternUnits="userSpaceOnUse">
                            <path d="M0 0h2v2H0zm2 2h2v2H2z" fill="#0D0D0D" />
                            <path d="M2 0h2v2H2zM0 2h2v2H0z" fill="#0A0A0A" />
                        </pattern>
                        <linearGradient id="silver-bevel" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#C0C0C0" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#808080" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#333" stopOpacity="0.2" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Main Body - Authentic Cut-out Shape */}
                    <path
                        d="M 150 50 Q 350 20 550 50 L 620 120 Q 680 200 650 300 L 600 450 Q 350 480 100 450 L 50 300 Q 20 200 80 120 Z"
                        fill="url(#carbon-fiber)"
                        stroke="#1A1A1A"
                        strokeWidth="3"
                    />

                    {/* Internal Beveling / CNC Details */}
                    <path
                        d="M 180 80 Q 350 60 520 80 L 580 140 Q 620 200 590 280 L 550 420 Q 350 440 150 420 L 110 280 Q 80 200 120 140 Z"
                        fill="none"
                        stroke="url(#silver-bevel)"
                        strokeWidth="1"
                        opacity="0.5"
                    />

                    {/* Grips (Ergonomic Textures) */}
                    <path d="M 50 250 Q 30 300 60 350" fill="none" stroke="#000" strokeWidth="20" strokeLinecap="round" opacity="0.8" />
                    <path d="M 650 250 Q 670 300 640 350" fill="none" stroke="#000" strokeWidth="20" strokeLinecap="round" opacity="0.8" />

                    {/* Center Hub Section */}
                    <rect x="230" y="160" width="240" height="230" rx="15" fill="#050505" stroke="#222" strokeWidth="2" />

                    {/* Shift Light Array Top Bar */}
                    <rect x="250" y="90" width="200" height="15" rx="7.5" fill="#111" />
                    {[...Array(15)].map((_, i) => {
                        const colors = ['#0f0', '#0f0', '#0f0', '#0f0', '#0f0', '#f00', '#f00', '#f00', '#f00', '#f00', '#00f', '#00f', '#00f', '#00f', '#00f'];
                        return (
                            <circle
                                key={i}
                                cx={265 + i * 12}
                                cy={97.5}
                                r={3}
                                fill={colors[i]}
                                opacity={0.3}
                                filter="url(#glow)"
                                className="animate-pulse"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            />
                        );
                    })}
                </svg>

                {/* Central Digital Display - High Fidelity F1 Dashboard */}
                <div className="absolute top-[175px] left-[245px] w-[210px] h-[200px] bg-[#000] border-2 border-[#1A1A1A] rounded-lg overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(39,244,210,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-10" />

                    <AnimatePresence mode="wait">
                        {hoveredButton ? (
                            <motion.div
                                key={hoveredButton.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                className="h-full w-full p-4 flex flex-col items-center justify-between"
                            >
                                <div className="w-full flex justify-between items-center text-[10px] font-mono text-[#27F4D2]">
                                    <span>LAP: 1/57</span>
                                    <span>ERS: 94%</span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="text-[12px] font-mono text-[#808080] mb-1">GEAR</div>
                                    <div className="text-7xl font-black text-white italic leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                        {hoveredButton.id === 'DRS' ? '8' : hoveredButton.id === 'BIO' ? '3' : hoveredButton.id === 'RADIO' ? '5' : 'N'}
                                    </div>
                                </div>

                                <div className="w-full">
                                    <div className="flex justify-between text-[8px] font-mono text-[#444] mb-1">
                                        <span>SECTOR: {hoveredButton.section}</span>
                                        <span>{hoveredButton.status}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-[#111] rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-[#27F4D2]"
                                            initial={{ width: 0 }}
                                            animate={{ width: '85%' }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="h-full w-full flex flex-col items-center justify-center space-y-4"
                            >
                                <div className="text-[10px] font-mono text-[#27F4D2] tracking-[0.3em] animate-pulse">SYSTEM_CHECK</div>
                                <div className="text-4xl font-black text-white italic tracking-tighter">AMG-2026</div>
                                <div className="w-32 h-1 bg-[#27F4D2]/20 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-[#27F4D2]"
                                        animate={{ x: [-100, 100], transition: { duration: 2, repeat: Infinity, ease: 'linear' } }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Tactical Buttons - F1 Layout (OT, DRS, RADIO, NEUTRAL) */}
                <div className="absolute inset-0">
                    {/* Top Left: DRS */}
                    <WheelButton
                        item={buttons[0]}
                        className="top-[120px] left-[160px]"
                        onHover={setHoveredButton}
                        onClick={onUnlock}
                    />
                    {/* Top Right: Neutral */}
                    <WheelButton
                        item={buttons[1]}
                        className="top-[120px] right-[160px]"
                        onHover={setHoveredButton}
                        onClick={onUnlock}
                    />
                    {/* Bottom Left: Radio */}
                    <WheelButton
                        item={buttons[2]}
                        className="bottom-[130px] left-[180px]"
                        onHover={setHoveredButton}
                        onClick={onUnlock}
                    />
                    {/* Bottom Right: Bio */}
                    <WheelButton
                        item={buttons[3]}
                        className="bottom-[130px] right-[180px]"
                        onHover={setHoveredButton}
                        onClick={onUnlock}
                    />
                </div>

                {/* Lower Rotary Dials (Decorative but Detailed) */}
                <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 flex gap-16">
                    <RotaryDial label="DIFF" value="12" />
                    <RotaryDial label="ENGINE" value="HI" />
                </div>

                {/* AMG Branding Logo */}
                <div className="absolute bottom-[160px] left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 opacity-20">
                        <div className="text-[10px] font-black italic text-white tracking-widest">MERCEDES-AMG</div>
                        <div className="h-0.5 w-8 bg-white" />
                    </div>
                </div>
            </motion.div>

            {/* Cockpit Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />
        </div>
    );
}

function RotaryDial({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-4 border-[#1A1A1A] bg-[#0A0A0A] flex items-center justify-center relative shadow-lg">
                <div className="absolute w-1 h-4 bg-[#27F4D2] -top-1 rounded-full" />
                <span className="text-[8px] font-black text-white">{value}</span>
            </div>
            <span className="text-[7px] font-mono text-[#444] mt-1 tracking-widest leading-none">{label}</span>
        </div>
    );
}

function WheelButton({
    item,
    className,
    onHover,
    onClick
}: {
    item: typeof buttons[0];
    className: string;
    onHover: (item: typeof buttons[0] | null) => void;
    onClick: () => void;
}) {
    return (
        <motion.button
            onMouseEnter={() => onHover(item)}
            onMouseLeave={() => onHover(null)}
            onClick={onClick}
            whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
            whileTap={{ scale: 0.95 }}
            className={`absolute w-14 h-14 rounded-full border-4 flex items-center justify-center transition-all duration-300 shadow-xl ${className}`}
            style={{
                backgroundColor: '#0A0A0A',
                borderColor: item.id === 'DRS' || item.id === 'RADIO' ? '#27F4D2' : '#FFFFFF',
            }}
        >
            <div className="flex flex-col items-center">
                <item.icon size={16} color={item.id === 'DRS' || item.id === 'RADIO' ? '#27F4D2' : '#FFFFFF'} />
                <span className="text-[7px] font-black mt-1" style={{ color: item.id === 'DRS' || item.id === 'RADIO' ? '#27F4D2' : '#FFFFFF' }}>{item.label}</span>
            </div>

            {/* Tactical Glow for active section */}
            {item.id === 'DRS' && (
                <div className="absolute inset-0 rounded-full bg-[#27F4D2]/10 animate-pulse pointer-events-none" />
            )}
        </motion.button>
    );
}
