'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'project' | 'skill';
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
    children,
    className,
    variant = 'default',
    onClick
}) => {
    return (
        <div
            className={cn("bento-card", className)}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Card;
