'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Home,
  FolderGit2,
  User,
  Briefcase,
  MessageSquare,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '/', icon: Home, sector: 'S1' },
  { label: 'PROJECT_LOGS', href: '/projects', icon: FolderGit2, sector: 'S2' },
  { label: 'BIO', href: '/bio', icon: User, sector: 'S3' },
  { label: 'STINTS', href: '/experience', icon: Briefcase, sector: 'S4' },
  { label: 'RADIO_CHECK', href: '/contact', icon: MessageSquare, sector: 'S5' },
];

export default function TelemetryBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-[#1A1A1A] bg-[#0A0A0A]/90 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between">
            {/* Logo / Driver Tag */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex h-8 w-8 items-center justify-center rounded bg-[#27F4D2]">
                <span className="text-sm font-black text-[#0A0A0A] font-[var(--font-display)]">
                  P1
                </span>
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-xs font-semibold text-[#C0C0C0] tracking-[0.2em] uppercase">
                  DRIVER
                </span>
                <span className="text-[10px] text-[#808080] font-mono">
                  {time || '00:00:00'} UTC
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      relative flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-[0.15em]
                      transition-all duration-300 rounded-sm group
                      ${
                        isActive
                          ? 'text-[#27F4D2]'
                          : 'text-[#808080] hover:text-[#C0C0C0]'
                      }
                    `}
                  >
                    <span className="text-[10px] font-mono text-[#333] group-hover:text-[#555] transition-colors">
                      {item.sector}
                    </span>
                    <Icon className="h-3.5 w-3.5" />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#27F4D2]"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Status Indicator */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#27F4D2] animate-teal-pulse" />
                <span className="text-[10px] font-mono text-[#808080] tracking-wider">
                  CONNECTED
                </span>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center h-9 w-9 text-[#C0C0C0] rounded border border-[#1A1A1A] hover:border-[#27F4D2]/30 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Telemetry Scan Line */}
        <div className="telemetry-line h-px w-full" />
      </motion.nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-2xl pt-16"
        >
          <div className="flex flex-col items-center gap-2 p-8">
            {navItems.map((item, i) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      flex items-center gap-4 w-full px-6 py-4 rounded-lg border transition-all duration-300
                      ${
                        isActive
                          ? 'border-[#27F4D2]/30 bg-[#27F4D2]/5 text-[#27F4D2]'
                          : 'border-[#1A1A1A] text-[#808080] hover:text-[#C0C0C0] hover:border-[#27F4D2]/20'
                      }
                    `}
                  >
                    <span className="text-[10px] font-mono text-[#333]">
                      {item.sector}
                    </span>
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium tracking-[0.15em]">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </>
  );
}
