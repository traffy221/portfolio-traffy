'use client';

import React from 'react';
import { experienceData } from '@/lib/experience-data';
import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-28 px-6 relative bg-black">
            {/* Background */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[128px]"></div>

            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-16">
                    <p className="text-violet-400 text-sm font-semibold mb-4 tracking-wider uppercase">Parcours</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Expérience <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">professionnelle</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-xl">
                        Mon évolution et les résultats concrets apportés.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line with Gradient */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-zinc-700 to-transparent"></div>

                    <div className="space-y-8">
                        {experienceData.map((exp, index) => (
                            <div key={index} className="relative pl-10 group">
                                {/* Timeline Dot */}
                                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-black border-2 border-violet-500 group-hover:bg-violet-500 group-hover:shadow-lg group-hover:shadow-violet-500/30 transition-all z-10"></div>

                                {/* Card */}
                                <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors">{exp.role}</h3>
                                            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                                                <span className="flex items-center gap-1.5 text-violet-400">
                                                    <Briefcase className="w-3.5 h-3.5" />
                                                    {exp.company}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="flex items-center gap-1.5 text-xs font-medium text-violet-300 bg-violet-500/10 px-3 py-1.5 rounded-full whitespace-nowrap border border-violet-500/20">
                                            <Calendar className="w-3 h-3" />
                                            {exp.period}
                                        </span>
                                    </div>

                                    {/* Highlight */}
                                    {exp.highlight && (
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 text-emerald-400 text-sm font-medium rounded-lg mb-4 border border-emerald-500/20">
                                            <TrendingUp className="w-4 h-4" />
                                            {exp.highlight}
                                        </div>
                                    )}

                                    {/* Description */}
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                                                <span className="text-violet-500 mt-1.5 text-[8px]">●</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
