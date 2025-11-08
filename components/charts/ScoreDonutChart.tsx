import React from 'react';
import Card from '../ui/Card';

interface ScoreDonutChartProps {
    score: number;
    maxScore: number;
    title: string;
}

const ScoreDonutChart: React.FC<ScoreDonutChartProps> = ({ score, maxScore, title }) => {
    const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <Card className="flex flex-col items-center justify-center text-center p-6">
            <div className="relative w-32 h-32">
                 <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="text-gray-200"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                    />
                    <circle
                        className="text-accent"
                        strokeWidth="8"
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
                    <span className="text-2xl font-bold text-dark">{score}</span>
                    <span className="text-xs text-gray-500">out of {maxScore}</span>
                </div>
            </div>
            <p className="mt-4 font-semibold text-dark">{title}</p>
        </Card>
    );
};

export default ScoreDonutChart;
