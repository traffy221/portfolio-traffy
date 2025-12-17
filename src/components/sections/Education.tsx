'use client';

import React from 'react';
import { educationData } from '@/lib/education-data';
import { GraduationCap, Building2, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
    return (
        <section id="education" className="py-28 px-6 relative bg-zinc-950">
            {/* Background */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[128px]"></div>

            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-16">
                    <p className="text-cyan-400 text-sm font-semibold mb-4 tracking-wider uppercase">Formation</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Diplômes & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Certifications</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-xl">
                        Mon parcours académique et mes qualifications.
                    </p>
                </div>

                {/* Education Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="group bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-5">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <span className="flex items-center gap-1.5 text-xs font-medium text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">
                                    <Calendar className="w-3 h-3" />
                                    {edu.period}
                                </span>
                            </div>

                            {/* Degree */}
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                {edu.degree}
                            </h3>

                            {/* School */}
                            <p className="flex items-center gap-2 text-blue-400 text-sm mb-4">
                                <Building2 className="w-4 h-4" />
                                {edu.institution}
                            </p>

                            {/* Status Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-lg font-medium">
                                <Award className="w-4 h-4" />
                                {edu.status}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
