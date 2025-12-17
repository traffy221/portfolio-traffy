'use client';

import React from 'react';
import { Mail, Phone, Linkedin, ArrowRight, Sparkles } from 'lucide-react';

const contactMethods = [
    {
        href: "mailto:daouda.papan@gmail.com",
        icon: <Mail className="w-6 h-6" />,
        title: "Email",
        value: "daouda.papan@gmail.com",
        gradient: 'from-blue-500 to-cyan-500',
        hoverColor: 'group-hover:text-blue-400'
    },
    {
        href: "tel:+221777443392",
        icon: <Phone className="w-6 h-6" />,
        title: "Téléphone",
        value: "+221 77 744 33 92",
        gradient: 'from-emerald-500 to-teal-500',
        hoverColor: 'group-hover:text-emerald-400'
    },
    {
        href: "https://www.linkedin.com/in/papa-daouda-ndiaye-43711b208/",
        icon: <Linkedin className="w-6 h-6" />,
        title: "LinkedIn",
        value: "Profil professionnel",
        gradient: 'from-violet-500 to-purple-500',
        hoverColor: 'group-hover:text-violet-400',
        external: true
    }
];

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-28 px-6 relative bg-black overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-600/10 via-violet-600/5 to-transparent rounded-full blur-3xl"></div>

            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

            <div className="max-w-3xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-rose-400 text-sm font-semibold mb-4 tracking-wider uppercase">Contact</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Travaillons <span className="bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">ensemble</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-md mx-auto">
                        Un projet en tête ? Je suis ouvert aux nouvelles opportunités.
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {contactMethods.map((method, i) => (
                        <a
                            key={i}
                            href={method.href}
                            target={method.external ? "_blank" : undefined}
                            rel={method.external ? "noopener noreferrer" : undefined}
                            className="group bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl"
                        >
                            <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                {method.icon}
                            </div>
                            <h3 className={`text-white font-semibold mb-1 ${method.hoverColor} transition-colors`}>
                                {method.title}
                            </h3>
                            <p className="text-zinc-500 text-sm">{method.value}</p>
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="mailto:daouda.papan@gmail.com?subject=Nouveau%20Projet"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-violet-600 to-rose-600 hover:from-blue-500 hover:via-violet-500 hover:to-rose-500 text-white font-semibold rounded-full transition-all shadow-xl shadow-violet-500/20 hover:shadow-violet-500/30 group"
                    >
                        <Sparkles className="w-5 h-5" />
                        Démarrer un projet
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
