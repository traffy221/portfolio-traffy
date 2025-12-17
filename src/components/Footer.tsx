'use client';

import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 px-6 border-t border-zinc-900 bg-black relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-blue-600/5 to-transparent blur-3xl"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <div className="text-2xl font-bold mb-2">
                            <span className="text-white">Papa Daouda </span>
                            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">NDIAYE</span>
                        </div>
                        <div className="text-zinc-500 text-sm">
                            Architecte Logiciel & Stratège Digital
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href="mailto:daouda.papan@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium rounded-full transition-all hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/20"
                    >
                        Contactez-moi
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Links & Social */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-zinc-900">
                    {/* Copyright */}
                    <div className="text-zinc-600 text-sm">
                        © {currentYear} Papa Daouda NDIAYE. Tous droits réservés.
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/traffy221"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all"
                            title="GitHub"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/papa-daouda-ndiaye-43711b208/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                            title="LinkedIn"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                            href="mailto:daouda.papan@gmail.com"
                            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                            title="Email"
                        >
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
