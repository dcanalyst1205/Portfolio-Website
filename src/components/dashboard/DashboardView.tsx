'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Terminal } from 'lucide-react';
import DriverProfile from '@/components/dashboard/DriverProfile';
import CommitTelemetry from '@/components/dashboard/CommitTelemetry';
import PowerUnit from '@/components/dashboard/PowerUnit';
import ProjectLogs from '@/components/dashboard/ProjectLogs';
import PitWallTimeline from '@/components/dashboard/PitWallTimeline';
import TelemetryBar from '@/components/layout/TelemetryBar';

export default function DashboardView() {
    return (
        <div className="relative min-h-screen bg-[#050505]">
            {/* Fixed Telemetry Bar at Top */}
            <TelemetryBar />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <Terminal className="h-3.5 w-3.5 text-[#27F4D2]" />
                        <span className="text-[10px] font-mono tracking-[0.25em] text-[#808080]">
                            HOME // STARTING_GRID
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1
                                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-none mb-2"
                                style={{ fontFamily: 'var(--font-titillium), system-ui, sans-serif', fontStyle: 'italic' }}
                            >
                                RACE <span className="f1-text-gradient">CONTROL</span>
                            </h1>
                            <p className="text-sm text-[#808080] font-mono max-w-xl">
                                Welcome to the cockpit. All systems are nominal.
                                Monitoring real-time engineering telemetry and performance data.
                            </p>
                        </div>

                        {/* Live Metrics Overlay (Simplified Telemetry Bar requirement) */}
                        <div className="flex items-center gap-6 px-6 py-3 bg-[#111111] border border-[#1A1A1A] rounded text-[10px] font-mono">
                            <div className="flex flex-col">
                                <span className="text-[#333]">SYSTEM</span>
                                <span className="text-[#27F4D2] font-bold">ONLINE</span>
                            </div>
                            <div className="w-px h-8 bg-[#1A1A1A]" />
                            <div className="flex flex-col">
                                <span className="text-[#333]">LATENCY</span>
                                <span className="text-white font-bold">14ms</span>
                            </div>
                            <div className="w-px h-8 bg-[#1A1A1A]" />
                            <div className="flex flex-col">
                                <span className="text-[#333]">DRS</span>
                                <span className="text-[#27F4D2] font-bold animate-pulse">ACTIVE</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Core Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column — Driver Profile */}
                    <div className="lg:col-span-4">
                        <DriverProfile />
                    </div>

                    {/* Right Column — Telemetry & Power Unit */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <CommitTelemetry />
                        <PowerUnit />
                    </div>
                </div>

                {/* Project Logs Section */}
                <ProjectLogs />

                {/* Experience Section (Pit Wall) */}
                <PitWallTimeline />

                {/* Bottom Race Banner */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-6 rounded-lg border border-[#1A1A1A] bg-[#111111]/50 backdrop-blur flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-1.5 bg-[#27F4D2] rounded-full shadow-[0_0_15px_rgba(39,244,210,0.5)]" />
                        <div>
                            <span
                                className="text-lg font-black text-white tracking-widest block uppercase"
                                style={{ fontFamily: 'var(--font-titillium), system-ui, sans-serif' }}
                            >
                                SEASON 2026
                            </span>
                            <span className="text-[11px] font-mono text-[#808080] tracking-widest">
                                DRIVING THE FUTURE OF DIGITAL ENGINEERING
                            </span>
                        </div>
                    </div>
                    <motion.div
                        className="flex items-center gap-3 px-6 py-3 bg-[#27F4D2] text-[#0A0A0A] font-black text-xs tracking-[0.2em] italic skew-x-[-12deg] cursor-default"
                        whileHover={{ scale: 1.05 }}
                    >
                        PU_MODE: QUALIFYING
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
