'use client'

import Image from 'next/image'

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import CustonLineChart from '@/components/charts/lineChart'
import CustomArea from '@/components/charts/customArea';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page F',
    uv: 2590,
    pv: 2300,
    amt: 1100,
  },
];

const diffPallette = {
  stroke : 'blue', //"#8884d8",
  fill : "#8884d8",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h2>Line Chart</h2>
        <div className='w-full h-[310px]'>
          <CustonLineChart data={data}></CustonLineChart>
        </div>
        <CustonLineChart data={data} pallete={diffPallette}></CustonLineChart>
        <CustomArea data={data}></CustomArea>
      </div>
    </main>
  )
}
