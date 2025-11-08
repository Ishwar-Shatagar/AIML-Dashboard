import React from 'react';
import Card from '../ui/Card';

interface CgpaChartProps {
    cgpa: number;
}

const CgpaChart: React.FC<CgpaChartProps> = ({ cgpa }) => {
    const percentage = (cgpa / 10) * 100;
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <Card className="flex flex-col items-center justify-center p-6">
            <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="text-gray-200"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                    />
                    <circle
                        className="text-primary"
                        strokeWidth="10"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                        transform="rotate(-90 50 50)"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-dark">{cgpa.toFixed(2)}</span>
                    <span className="text-sm text-gray-500">CGPA</span>
                </div>
            </div>
        </Card>
    );
};

export default CgpaChart;
