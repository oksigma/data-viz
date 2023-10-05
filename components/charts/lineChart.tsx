import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// import { defaultPallete } from './chartPallete'

interface pallete1 {
    stroke : string;
    stroke2? : string
    fill? : string
}

interface lineChart {
    data : Record<string, any>[];
    pallete? : pallete1
}

export const defaultLine = {
    stroke : 'red', //"#8884d8",
    stroke2 : ' orange',
    fill : "#8884d8",
}

const CustomLineChart: React.FC<lineChart> = ( {data, pallete = defaultLine} ) => {

    const usedPallete = {...defaultLine, ...pallete}

    return (
        // <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke={usedPallete.stroke} activeDot={{ r: 18 }} />
            <Line type="monotone" dataKey="uv" stroke={usedPallete.stroke2} />
            </LineChart>
    //   </ResponsiveContainer>
    );
}

export default CustomLineChart;