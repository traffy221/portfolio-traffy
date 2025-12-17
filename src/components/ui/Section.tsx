import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    title?: string;
    subtitle?: string;
    fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({
    children,
    id,
    className,
    title,
    subtitle,
    fullWidth = false
}) => {
    return (
        <section
            id={id}
            className={cn(
                "relative w-full py-24 md:py-32 border-b border-zinc-900", // Subtle separator
                className
            )}
        >
            <div className={cn("mx-auto px-6", fullWidth ? "w-full" : "max-w-7xl")}>

                {(title || subtitle) && (
                    <div className="mb-16 md:mb-24">
                        {/* Minimalist Header */}
                        {title && (
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                                {title}
                            </h2>
                        )}

                        {subtitle && (
                            <p className="text-xl text-zinc-500 max-w-2xl font-light">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                {children}
            </div>
        </section>
    );
};

export default Section;
