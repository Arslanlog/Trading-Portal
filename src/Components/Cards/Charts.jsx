import React from 'react'
import { Bar } from 'react-chartjs-2';
const Charts = () => {
    const rand = () => Math.round(Math.random() * 20 - 10);

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                type: 'line',
                label: 'Dataset 1',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 2,
                fill: false,
                data: [rand(), rand(), rand(), rand(), rand(), rand()],
            },
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: 'rgb(102, 227, 243)',
                data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
                borderColor: 'white',
                borderWidth: 2,
            },
            {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: 'rgb(250, 250, 86)',
                data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
            },
        ],
    };
    return (
        <>
            <div className="chart">
                <Bar data={data} />
            </div>

        </>
    )
}

export default Charts
