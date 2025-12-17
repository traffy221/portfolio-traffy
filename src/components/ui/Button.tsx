'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    children: React.ReactNode;
    icon?: React.ReactNode;
    href?: string;
    download?: boolean | string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', children, icon, href, download, ...props }, ref) => {

        // Modern "Linear-style" buttons
        const variants = {
            primary: "bg-white text-black hover:bg-zinc-200 border border-transparent font-semibold shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]",
            secondary: "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700",
            outline: "bg-transparent text-white border border-zinc-700 hover:bg-zinc-900",
            ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/50"
        };

        const baseStyles = "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

        const content = (
            <>
                {children}
                {icon && <span className="shrink-0">{icon}</span>}
            </>
        );

        if (href) {
            return (
                <a
                    href={href}
                    download={download}
                    className={cn(baseStyles, variants[variant], className)}
                    target={!href.startsWith('/') && !href.startsWith('#') ? "_blank" : undefined}
                    rel={!href.startsWith('/') && !href.startsWith('#') ? "noopener noreferrer" : undefined}
                >
                    {content}
                </a>
            );
        }

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], className)}
                {...props}
            >
                {content}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
