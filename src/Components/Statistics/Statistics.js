import React from 'react';
import { useLoaderData } from 'react-router';
import { LineChart, Line, CartesianGrid, XAxis, YAxis , Tooltip } from 'recharts';

const Statistics = () => {

    const data = [
        {
            name: 'Page A',
            marks: 4000,
            quiz: 8,
            amt: 2400,
        },
        {
            name: 'Page B',
            marks: 3000,
            quiz: 9,
            amt: 2210,
        },
        {
            name: 'Page C',
            marks: 2000,
            quiz: 8,
            amt: 2290,
        },
        {
            name: 'Page D',
            marks: 2780,
            quiz: 11,
            amt: 2000,
        }];
    return (
        <div className='flex justify-center mt-10'>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="quiz" stroke="#FECC81" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;