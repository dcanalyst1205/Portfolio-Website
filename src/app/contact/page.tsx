'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MessageSquare, ChevronRight, Zap } from 'lucide-react';

export default function ContactPage() {
    const contactInfo = [
        {
            label: 'EMAIL',
            value: 'h32khan@uwaterloo.ca',
            href: 'mailto:h32khan@uwaterloo.ca',
            icon: Mail,
            desc: 'DIRECT_ENCRYPTED_LINE'
        },
        {
            label: 'PHONE',
            value: '+1 437-933-8125',
            href: 'tel:+14379338125',
            icon: Phone,
            desc: 'VOICE_TELEMETRY'
        },
        {
            label: 'LINKEDIN',
            value: 'linkedin.com/in/hadi-khan',
            href: 'https://linkedin.com/in/hadi-khan-1205hk2005619',
            icon: Linkedin,
            desc: 'PROFESSIONAL_NETWORK'
        },
        {
            label: 'GITHUB',
            value: 'github.com/dcanalyst1205',
            href: 'https://github.com/dcanalyst1205',
            icon: Github,
            desc: 'SOURCE_REPOSITORY'
        }
    ];

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
            {/* Header section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-12"
            >
                <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="h-3.5 w-3.5 text-[#27F4D2]" />
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#808080]">
                        RADIO_CHECK // OPEN_COMMS
                    </span>
                </div>

                <h1
                    className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-none mb-4 uppercase"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                >
                    CONTACT <span className="f1-text-gradient">CHANNELS</span>
                </h1>

                <div className="flex items-center gap-1 mt-6">
                    <span className="text-[9px] font-mono text-[#333]">SYS</span>
                    <ChevronRight className="h-2.5 w-2.5 text-[#333]" />
                    <span className="text-[9px] font-mono text-[#333]">DASHBOARD</span>
                    <ChevronRight className="h-2.5 w-2.5 text-[#333]" />
                    <span className="text-[9px] font-mono text-[#27F4D2]">RADIO_CHECK</span>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Contact info list */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex flex-col gap-4"
                >
                    {contactInfo.map((item, i) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                            className="f1-card p-6 flex items-center justify-between group hover:border-[#27F4D2]/40 transition-all cursor-pointer"
                        >
                            <div className="flex items-center gap-6">
                                <div className="h-12 w-12 rounded bg-[#0A0A0A] border border-[#1A1A1A] flex items-center justify-center group-hover:border-[#27F4D2]/30 transition-colors">
                                    <item.icon className="h-5 w-5 text-[#27F4D2] group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[8px] font-mono text-[#808080] tracking-widest uppercase">
                                        {item.desc}
                                    </span>
                                    <span className="text-sm font-bold text-white tracking-wider group-hover:text-[#27F4D2] transition-colors uppercase">
                                        {item.label}
                                    </span>
                                    <span className="text-xs font-mono text-[#808080]">
                                        {item.value}
                                    </span>
                                </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-[#333] group-hover:text-[#27F4D2] transition-colors" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Message Panel / Decorative */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="f1-card p-8 bg-gradient-to-br from-[#111111] to-[#0A0A0A]"
                >
                    <div className="flex items-center gap-2 mb-8">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#27F4D2] animate-teal-pulse" />
                        <h3 className="text-xs font-mono text-[#27F4D2] tracking-[0.2em] uppercase">
                            STATUS: LISTENING
                        </h3>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="space-y-2">
                            <span className="text-[10px] font-mono text-[#808080] uppercase tracking-widest italic">
                // TRANSMISSION_READY
                            </span>
                            <p className="text-lg text-white font-medium leading-relaxed">
                                Available for software engineering opportunities, research collaborations, or technical discussions.
                                Ready to deploy solutions.
                            </p>
                        </div>

                        <div className="p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded flex items-center gap-4">
                            <Zap className="h-5 w-5 text-[#FFB800]" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-mono text-[#808080]">CONNECTION_LATENCY:</span>
                                <span className="text-xs font-bold text-[#E5E5E5] uppercase tracking-wider">
                                    SUB_24HR_RESPONSE
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col gap-2">
                        <span className="text-[8px] font-mono text-[#333] uppercase">Pit_Wall_Communication_System</span>
                        <div className="h-1 w-full bg-[#1A1A1A] rounded-full overflow-hidden">
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                className="h-full w-24 bg-gradient-to-r from-transparent via-[#27F4D2]/40 to-transparent"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
