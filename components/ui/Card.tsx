import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    title?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
    return (
        <div className={`bg-white rounded-2xl shadow-lg ${className}`}>
            {title && <h3 className="text-xl font-bold text-dark p-6 border-b">{title}</h3>}
            <div className={title ? "p-6" : ""}>
                {children}
            </div>
        </div>
    );
};

export default Card;
