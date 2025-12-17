'use client';

import React, { useState } from 'react';
import { projectsData, Project } from '@/lib/projects-data';
import { ArrowUpRight, ExternalLink, Github, X } from 'lucide-react';

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Color schemes for variety
    const colorSchemes = [
        { gradient: 'from-blue-500 to-violet-500', glow: 'group-hover:shadow-blue-500/20', accent: 'text-blue-400', border: 'hover:border-blue-500/30' },
        { gradient: 'from-emerald-500 to-cyan-500', glow: 'group-hover:shadow-emerald-500/20', accent: 'text-emerald-400', border: 'hover:border-emerald-500/30' },
        { gradient: 'from-orange-500 to-rose-500', glow: 'group-hover:shadow-orange-500/20', accent: 'text-orange-400', border: 'hover:border-orange-500/30' },
        { gradient: 'from-violet-500 to-pink-500', glow: 'group-hover:shadow-violet-500/20', accent: 'text-violet-400', border: 'hover:border-violet-500/30' },
        { gradient: 'from-cyan-500 to-blue-500', glow: 'group-hover:shadow-cyan-500/20', accent: 'text-cyan-400', border: 'hover:border-cyan-500/30' },
    ];

    return (
        <section id="projects" className="py-28 px-6 relative bg-zinc-950">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[128px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[128px]"></div>

            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-16">
                    <p className="text-blue-400 text-sm font-semibold mb-4 tracking-wider uppercase">Portfolio</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Projets <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">sélectionnés</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-xl">
                        Une sélection de mes réalisations les plus impactantes.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projectsData.map((project, index) => {
                        const colors = colorSchemes[index % colorSchemes.length];
                        return (
                            <div
                                key={project.title}
                                onClick={() => setSelectedProject(project)}
                                className={`group relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${colors.glow} ${colors.border} ${index === 0 ? 'md:col-span-2' : ''
                                    }`}
                            >
                                {/* Gradient Accent Line */}
                                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className={`text-xl font-semibold text-white group-hover:${colors.accent} transition-colors mb-2`}>
                                            {project.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-all group-hover:scale-110`}>
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.technologies.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/80 rounded-full border border-zinc-700/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="px-3 py-1 text-xs text-zinc-500 bg-zinc-800/50 rounded-full">
                                            +{project.technologies.length - 4}
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedProject(null)}
                >
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-md"></div>

                    <div
                        className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] animate-fade-in-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header with gradient */}
                        <div className="relative p-8 border-b border-zinc-800 bg-gradient-to-br from-blue-900/20 via-violet-900/20 to-transparent">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                    <p className="text-zinc-400">{selectedProject.description}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 overflow-y-auto">
                            <div className="mb-8">
                                <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">À propos</h3>
                                <p className="text-zinc-300 leading-relaxed">{selectedProject.longDescription}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-4">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 text-sm font-medium text-zinc-200 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-blue-500/50 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-zinc-800 flex gap-3">
                            {selectedProject.liveUrl && (
                                <a
                                    href={selectedProject.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium rounded-xl text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Voir le site
                                </a>
                            )}
                            <a
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl text-center transition-all flex items-center justify-center gap-2 border border-zinc-700"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
