import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    title?: string;
    titleClass?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', title, titleClass = '' }) => {
    return (
        <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
            {title && <h3 className={`text-xl font-bold text-dark mb-4 ${titleClass}`}>{title}</h3>}
            {children}
        </div>
    );
};

export default Card;