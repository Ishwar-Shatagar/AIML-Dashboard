import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { CgpaData } from '../../types';

interface CgpaChartProps {
    data: CgpaData[];
}

const CgpaChart: React.FC<CgpaChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorCgpa" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
                <XAxis dataKey="semester" tick={{fontSize: 12, fill: '#6B7280'}} axisLine={false} tickLine={false} />
                <YAxis domain={[7.5, 9.5]} tick={{fontSize: 12, fill: '#6B7280'}} axisLine={false} tickLine={false} />
                <Tooltip 
                    contentStyle={{
                        borderRadius: '0.75rem',
                        borderColor: '#E5E7EB',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                    }}
                />
                <Area type="monotone" dataKey="cgpa" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorCgpa)" strokeWidth={3} activeDot={{ r: 8 }} />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default CgpaChart;