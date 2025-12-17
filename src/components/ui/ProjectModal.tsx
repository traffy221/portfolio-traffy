'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Globe, Layers } from 'lucide-react';
import Button from './Button';
import { Project } from '@/lib/projects-data';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-black border border-zinc-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 hover:bg-zinc-900 rounded-full transition-colors z-10"
                            >
                                <X className="w-5 h-5 text-zinc-400 hover:text-white" />
                            </button>

                            <div className="p-8 md:p-12">
                                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                                <div className="h-1 w-12 bg-zinc-800 mb-8" />

                                <p className="text-zinc-300 leading-relaxed mb-8">
                                    {project.longDescription}
                                </p>

                                <div className="mb-8">
                                    <h3 className="text-sm font-mono uppercase text-zinc-500 mb-4 tracking-widest">Stack Technique</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 border-t border-zinc-900 pt-8">
                                    {project.liveUrl && (
                                        <Button
                                            variant="primary"
                                            href={project.liveUrl}
                                            icon={<Globe className="w-4 h-4" />}
                                        >
                                            Voir le site
                                        </Button>
                                    )}
                                    <Button
                                        variant="outline"
                                        href={project.githubUrl}
                                        icon={<Github className="w-4 h-4" />}
                                    >
                                        Code Source
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
