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
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="semester" tick={{fontSize: 12}} />
                <YAxis domain={[7, 10]} tick={{fontSize: 12}} />
                <Tooltip />
                <Area type="monotone" dataKey="cgpa" stroke="#6D28D9" fillOpacity={1} fill="url(#colorCgpa)" strokeWidth={3} />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default CgpaChart;