import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// 510 / 6


type Props = {
    RadarData: number[]
}

const AcquisitionsChart = ({ RadarData }: Props) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const data = {
            labels: [
                'Creativity',
                'Discipline',
                'Social',
                'Fun',
                'Nature',
                'Curiosity',
            ],
            datasets: [ {
                label: 'Interest',
                data: RadarData,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        };

        const chartInstance = new Chart(chartRef.current, {
            type: 'radar',
            data: data,
            options: {
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        min: 0,
                        max: 140,
                        ticks: {
                            display: false
                        }
                    }
                }
            },
        });

        return () => {
            chartInstance.destroy();
        };
    }, []);

    return <canvas ref={chartRef} />;
};

export default AcquisitionsChart;
