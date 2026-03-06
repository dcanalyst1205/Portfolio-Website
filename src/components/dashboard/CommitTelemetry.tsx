'use client';

import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
} from 'recharts';

// Simulated coding activity data for the last 7 days
const telemetryData = [
    { lap: 'MON', commits: 8, linesAdded: 420, linesRemoved: 180 },
    { lap: 'TUE', commits: 12, linesAdded: 680, linesRemoved: 220 },
    { lap: 'WED', commits: 5, linesAdded: 310, linesRemoved: 90 },
    { lap: 'THU', commits: 15, linesAdded: 890, linesRemoved: 340 },
    { lap: 'FRI', commits: 22, linesAdded: 1200, linesRemoved: 410 },
    { lap: 'SAT', commits: 3, linesAdded: 150, linesRemoved: 60 },
    { lap: 'SUN', commits: 9, linesAdded: 540, linesRemoved: 200 },
];

interface TooltipPayloadItem {
    color: string;
    name: string;
    value: number;
}

function CustomTooltip({
    active,
    payload,
    label,
}: {
    active?: boolean;
    payload?: TooltipPayloadItem[];
    label?: string;
}) {
    if (!active || !payload) return null;

    return (
        <div className="bg-[#111111] border border-[#27F4D2]/30 rounded-lg p-3 shadow-lg shadow-[#27F4D2]/5">
            <p className="text-[10px] font-mono text-[#27F4D2] tracking-wider mb-2">
                LAP: {label}
            </p>
            {payload.map((entry: TooltipPayloadItem, index: number) => (
                <div key={index} className="flex items-center gap-2">
                    <div
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-[10px] font-mono text-[#808080]">
                        {entry.name}:
                    </span>
                    <span className="text-[10px] font-mono text-[#C0C0C0] font-semibold">
                        {entry.value}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default function CommitTelemetry() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="f1-card p-6 flex flex-col gap-4"
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-[#27F4D2]" />
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#808080]">
                        LIVE_COMMIT_TELEMETRY
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#27F4D2] animate-teal-pulse" />
                    <span className="text-[10px] font-mono text-[#27F4D2] tracking-wider">
                        LIVE
                    </span>
                </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-3">
                {[
                    { label: 'TOTAL_COMMITS', value: '74', delta: '+12%' },
                    { label: 'AVG_VELOCITY', value: '10.6/day', delta: '+8%' },
                    { label: 'PEAK_LAP', value: 'FRI', delta: '22 commits' },
                ].map((stat) => (
                    <div
                        key={stat.label}
                        className="flex flex-col gap-0.5 py-2 px-3 rounded bg-[#0A0A0A] border border-[#1A1A1A]"
                    >
                        <span className="text-[8px] font-mono text-[#808080] tracking-wider">
                            {stat.label}
                        </span>
                        <span className="text-lg font-bold text-white">{stat.value}</span>
                        <span className="text-[9px] font-mono text-[#27F4D2]">
                            {stat.delta}
                        </span>
                    </div>
                ))}
            </div>

            {/* Chart */}
            <div className="h-52 w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={telemetryData}>
                        <defs>
                            <linearGradient id="tealGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#27F4D2" stopOpacity={0.3} />
                                <stop offset="100%" stopColor="#27F4D2" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="silverGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#C0C0C0" stopOpacity={0.15} />
                                <stop offset="100%" stopColor="#C0C0C0" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#1A1A1A"
                            horizontal
                            vertical={false}
                        />
                        <XAxis
                            dataKey="lap"
                            tick={{ fontSize: 10, fill: '#808080', fontFamily: 'monospace' }}
                            axisLine={{ stroke: '#1A1A1A' }}
                            tickLine={false}
                        />
                        <YAxis
                            tick={{ fontSize: 10, fill: '#808080', fontFamily: 'monospace' }}
                            axisLine={false}
                            tickLine={false}
                            width={30}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                            type="monotone"
                            dataKey="linesAdded"
                            stroke="#27F4D2"
                            strokeWidth={2}
                            fill="url(#tealGradient)"
                            dot={false}
                            activeDot={{
                                r: 4,
                                fill: '#27F4D2',
                                stroke: '#0A0A0A',
                                strokeWidth: 2,
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="linesRemoved"
                            stroke="#C0C0C0"
                            strokeWidth={1.5}
                            fill="url(#silverGradient)"
                            dot={false}
                            strokeDasharray="4 4"
                            activeDot={{
                                r: 3,
                                fill: '#C0C0C0',
                                stroke: '#0A0A0A',
                                strokeWidth: 2,
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 pt-1">
                <div className="flex items-center gap-2">
                    <div className="h-0.5 w-4 bg-[#27F4D2] rounded" />
                    <span className="text-[9px] font-mono text-[#808080] tracking-wider">
                        LINES_ADDED
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-0.5 w-4 bg-[#C0C0C0] rounded border-t border-dashed border-[#C0C0C0]" />
                    <span className="text-[9px] font-mono text-[#808080] tracking-wider">
                        LINES_REMOVED
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
