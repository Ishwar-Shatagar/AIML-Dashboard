import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface ScoreDonutChartProps {
    score: number;
    grade: string;
}

const ScoreDonutChart: React.FC<ScoreDonutChartProps> = ({ score, grade }) => {
    const data = [
        { name: 'Score', value: score },
        { name: 'Remaining', value: 100 - score },
    ];
    const COLORS = ['#8B5CF6', '#E5E7EB'];

    return (
        <div className="w-full h-48 relative">
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius="75%"
                        outerRadius="100%"
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                 <span className="text-5xl font-extrabold text-dark">{score}%</span>
                 <span className="text-xl font-bold text-primary-dark">{grade}</span>
            </div>
        </div>
    );
};

export default ScoreDonutChart;