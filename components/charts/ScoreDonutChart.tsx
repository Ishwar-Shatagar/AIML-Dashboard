import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface ScoreDonutChartProps {
    score: number;
}

const ScoreDonutChart: React.FC<ScoreDonutChartProps> = ({ score }) => {
    const data = [
        { name: 'Score', value: score },
        { name: 'Remaining', value: 100 - score },
    ];
    const COLORS = ['#6D28D9', '#E5E7EB'];
    const percentage = score;

    let grade = 'F';
    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B+';
    else if (percentage >= 60) grade = 'B';
    else if (percentage >= 50) grade = 'C';
    else grade = 'D';

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
                 <span className="text-5xl font-extrabold text-dark">{percentage}%</span>
                 <span className="text-xl font-bold text-primary">{grade}</span>
            </div>
        </div>
    );
};

export default ScoreDonutChart;