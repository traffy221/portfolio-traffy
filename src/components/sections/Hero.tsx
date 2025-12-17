'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, ChevronDown, Sparkles } from 'lucide-react';

const roles = [
    "Architecte Logiciel",
    "Développeur Full Stack",
    "Stratège Digital",
    "Expert Sécurité"
];

const Hero: React.FC = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setRoleIndex((prev) => (prev + 1) % roles.length);
                setIsVisible(true);
            }, 400);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-black">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[128px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_20%,transparent_100%)]"></div>

            <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Status Badge */}
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 mb-12 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm text-emerald-300 font-medium">
                        Disponible pour nouveaux projets
                    </span>
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>

                {/* Main Title */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[0.95]">
                    <span className="text-white block mb-2">Papa Daouda</span>
                    <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">NDIAYE</span>
                </h1>

                {/* Animated Role */}
                <div className="h-14 md:h-16 flex items-center justify-center mb-8">
                    <div
                        className={`text-xl sm:text-2xl md:text-3xl transition-all duration-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        <span className="bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent font-medium">{roles[roleIndex]}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed">
                    Je transforme des idées complexes en{' '}
                    <span className="text-white font-medium">solutions digitales élégantes</span>.
                    <br />
                    <span className="text-zinc-500">Architecture logicielle • Sécurité • Performance</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={scrollToProjects}
                        className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center gap-3"
                    >
                        Voir mes projets
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a
                        href="/cv.pdf"
                        download
                        className="px-8 py-4 text-zinc-300 hover:text-white font-medium rounded-full border border-zinc-700 hover:border-zinc-500 transition-all duration-300 flex items-center gap-3 bg-zinc-900/50 backdrop-blur-sm"
                    >
                        <Download className="w-4 h-4" />
                        Télécharger CV
                    </a>
                </div>

                {/* Social Links */}
                <div className="mt-16 flex items-center justify-center gap-4">
                    {[
                        { href: "https://github.com/traffy221", label: "GitHub", color: "hover:text-white hover:border-zinc-600", icon: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /> },
                        { href: "https://www.linkedin.com/in/papa-daouda-ndiaye-43711b208/", label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-500/50", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
                        { href: "mailto:daouda.papan@gmail.com", label: "Email", color: "hover:text-emerald-400 hover:border-emerald-500/50", icon: <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /> }
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target={social.href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className={`w-11 h-11 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-500 ${social.color} transition-all duration-300`}
                            title={social.label}
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">{social.icon}</svg>
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 cursor-pointer hover:text-blue-400 transition-colors" onClick={scrollToProjects}>
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
            </div>
        </section>
    );
};

export default Hero;
