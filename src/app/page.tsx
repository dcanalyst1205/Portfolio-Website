'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SteeringWheel from '@/components/ui/SteeringWheel';
import DashboardView from '@/components/dashboard/DashboardView';

export default function Home() {
  const [viewMode, setViewMode] = useState<'COMMAND' | 'RACE'>('COMMAND');

  const handleUnlock = () => {
    setViewMode('RACE');
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <AnimatePresence mode="wait">
        {viewMode === 'COMMAND' ? (
          <motion.div
            key="command-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              scale: 2.5,
              opacity: 0,
              filter: 'blur(10px)',
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <SteeringWheel onUnlock={handleUnlock} />
          </motion.div>
        ) : (
          <motion.div
            key="race-dashboard"
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <DashboardView />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Telemetry Overlay (Semi-persistent) */}
      {viewMode === 'RACE' && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gradient-to-r from-transparent via-[#27F4D2] to-transparent opacity-50"
        />
      )}
    </main>
  );
}
