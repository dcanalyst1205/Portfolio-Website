'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Terminal } from 'lucide-react';
import DriverProfile from '@/components/dashboard/DriverProfile';
import CommitTelemetry from '@/components/dashboard/CommitTelemetry';
import PowerUnit from '@/components/dashboard/PowerUnit';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-3">
          <Terminal className="h-3.5 w-3.5 text-[#27F4D2]" />
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#808080]">
            HOME // STARTING_GRID
          </span>
        </div>

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

        {/* Breadcrumb bar */}
        <div className="flex items-center gap-1 mt-4">
          <span className="text-[9px] font-mono text-[#333]">SYS</span>
          <ChevronRight className="h-2.5 w-2.5 text-[#333]" />
          <span className="text-[9px] font-mono text-[#333]">DASHBOARD</span>
          <ChevronRight className="h-2.5 w-2.5 text-[#333]" />
          <span className="text-[9px] font-mono text-[#27F4D2]">HOME</span>
        </div>
      </motion.div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column — Driver Profile */}
        <div className="lg:col-span-4">
          <DriverProfile />
        </div>

        {/* Right Column — Telemetry & Power Unit */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          <CommitTelemetry />
          <PowerUnit />
        </div>
      </div>

      {/* Bottom Race Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-8 p-4 rounded-lg border border-[#1A1A1A] bg-[#111111]/50 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#27F4D2] rounded-full" />
          <div>
            <span
              className="text-sm font-bold text-white tracking-wider block"
              style={{ fontFamily: 'var(--font-titillium), system-ui, sans-serif' }}
            >
              SEASON 2026
            </span>
            <span className="text-[9px] font-mono text-[#808080]">
              CURRENTLY ENGINEERING THE FUTURE
            </span>
          </div>
        </div>
        <motion.a
          href="/projects"
          className="flex items-center gap-2 px-4 py-2 rounded bg-[#27F4D2]/10 border border-[#27F4D2]/20
                     text-[#27F4D2] text-xs font-mono tracking-wider
                     hover:bg-[#27F4D2]/20 hover:border-[#27F4D2]/40 transition-all duration-300
                     animate-shiver"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          VIEW PROJECT_LOGS
          <ChevronRight className="h-3.5 w-3.5" />
        </motion.a>
      </motion.div>
    </div>
  );
}
