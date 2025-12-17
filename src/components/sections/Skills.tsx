'use client';

import React from 'react';
import { skillsData, skillCategories } from '@/lib/skills-data';
import { Code2, Layers, Database, Shield } from 'lucide-react';

const categoryConfig: Record<string, { icon: React.ReactNode; gradient: string; accent: string }> = {
    'Langages': {
        icon: <Code2 className="w-5 h-5" />,
        gradient: 'from-orange-500 to-rose-500',
        accent: 'text-orange-400'
    },
    'Frameworks': {
        icon: <Layers className="w-5 h-5" />,
        gradient: 'from-blue-500 to-cyan-500',
        accent: 'text-blue-400'
    },
    'Bases de données': {
        icon: <Database className="w-5 h-5" />,
        gradient: 'from-emerald-500 to-teal-500',
        accent: 'text-emerald-400'
    },
    'Sécurité & Outils': {
        icon: <Shield className="w-5 h-5" />,
        gradient: 'from-violet-500 to-purple-500',
        accent: 'text-violet-400'
    }
};

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-28 px-6 relative bg-zinc-950">
            {/* Background */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[128px]"></div>

            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-16">
                    <p className="text-cyan-400 text-sm font-semibold mb-4 tracking-wider uppercase">Compétences</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Stack <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">technique</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-xl">
                        Les technologies que je maîtrise.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {skillCategories.map((category) => {
                        const categorySkills = skillsData.filter(s => s.category === category);
                        const config = categoryConfig[category] || {
                            icon: <Code2 className="w-5 h-5" />,
                            gradient: 'from-zinc-500 to-zinc-600',
                            accent: 'text-zinc-400'
                        };

                        return (
                            <div key={category} className="group bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-zinc-700">
                                {/* Gradient top line */}
                                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                                {/* Header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white shadow-lg`}>
                                        {config.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">{category}</h3>
                                        <p className={`${config.accent} text-xs font-medium`}>{categorySkills.length} technologies</p>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                    {categorySkills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className="px-3 py-1.5 text-sm text-zinc-300 bg-zinc-800/80 hover:bg-zinc-700/80 hover:text-white rounded-lg transition-colors cursor-default border border-zinc-700/50"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { value: '5+', label: "Années d'expérience", color: 'from-blue-500 to-violet-500' },
                        { value: '25+', label: 'Projets livrés', color: 'from-emerald-500 to-cyan-500' },
                        { value: '20+', label: 'Technologies', color: 'from-orange-500 to-rose-500' },
                        { value: '100%', label: 'Satisfaction', color: 'from-violet-500 to-pink-500' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl group hover:border-zinc-700 transition-colors">
                            <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>{stat.value}</div>
                            <div className="text-zinc-500 text-xs uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
