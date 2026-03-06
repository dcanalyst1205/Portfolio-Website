'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Zap, Gauge, Signal } from 'lucide-react';

export default function SystemStatus() {
    const [latency, setLatency] = useState(14);
    const [drs, setDrs] = useState(true);
    const [fps, setFps] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setLatency(Math.floor(Math.random() * 8) + 10);
            setFps(Math.floor(Math.random() * 5) + 58);
            // Randomly toggle DRS
            if (Math.random() > 0.95) setDrs((prev) => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.footer
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#1A1A1A] bg-[#0A0A0A]/90 backdrop-blur-xl"
        >
            {/* Top scan line */}
            <div className="telemetry-line h-px w-full" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex h-8 items-center justify-between">
                    {/* Left Side - System Status */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-1.5">
                            <Wifi className="h-3 w-3 text-[#27F4D2]" />
                            <span className="text-[10px] font-mono tracking-wider text-[#808080]">
                                SYSTEM:
                            </span>
                            <span className="text-[10px] font-mono font-semibold tracking-wider text-[#27F4D2]">
                                ONLINE
                            </span>
                        </div>

                        <div className="hidden sm:flex items-center gap-1.5">
                            <Signal className="h-3 w-3 text-[#808080]" />
                            <span className="text-[10px] font-mono tracking-wider text-[#808080]">
                                LATENCY:
                            </span>
                            <span className="text-[10px] font-mono font-semibold tracking-wider text-[#C0C0C0]">
                                {latency}ms
                            </span>
                        </div>

                        <div className="hidden sm:flex items-center gap-1.5">
                            <Zap className={`h-3 w-3 ${drs ? 'text-[#27F4D2]' : 'text-[#808080]'}`} />
                            <span className="text-[10px] font-mono tracking-wider text-[#808080]">
                                DRS:
                            </span>
                            <span
                                className={`text-[10px] font-mono font-semibold tracking-wider ${drs ? 'text-[#27F4D2]' : 'text-[#FF3333]'
                                    }`}
                            >
                                {drs ? 'ACTIVE' : 'DISABLED'}
                            </span>
                        </div>
                    </div>

                    {/* Right Side - Performance */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        <div className="hidden sm:flex items-center gap-1.5">
                            <Gauge className="h-3 w-3 text-[#808080]" />
                            <span className="text-[10px] font-mono tracking-wider text-[#808080]">
                                FPS:
                            </span>
                            <span className="text-[10px] font-mono font-semibold tracking-wider text-[#C0C0C0]">
                                {fps}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* Mini telemetry bars */}
                            <div className="flex items-end gap-[2px] h-3">
                                {[60, 80, 45, 90, 70, 55, 85, 65].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-[2px] bg-[#27F4D2]/40 rounded-full"
                                        animate={{ height: [`${h * 0.12}px`, `${(h + 20) * 0.12}px`, `${h * 0.12}px`] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.1,
                                            ease: 'easeInOut',
                                        }}
                                    />
                                ))}
                            </div>
                            <span className="text-[10px] font-mono tracking-wider text-[#808080]">
                                v1.0.0
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
