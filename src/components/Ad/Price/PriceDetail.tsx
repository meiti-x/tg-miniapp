import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import api from '../../../lib/api';
import { useParams } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = () => {
    const [data, setData] = useState(null);
    const [priceType, setPriceType] = useState(null);
    const {id}= useParams()

    useEffect(() => {
        api.get(`/api/v1/ad/${id}`).then(res=>{
            setPriceType(res.data?.message?.category)
            api.get(`/api/v1/price/${id}/all`).then(res=>{
                setData(res.data?.message);
            })
        })
    }, []);

    if (!data) return

    const columnsByPriceType = {
        buy: [
            { label: 'total_price ', key: 'total_price', color: 'rgba(255, 99, 132, 1)', bgColor: 'rgba(255, 99, 132, 0.2)' },
            { label: 'price_per_meter ', key: 'price_per_meter', color: 'rgba(54, 162, 235, 1)', bgColor: 'rgba(54, 162, 235, 0.2)' },
        ],
        mortgage: [
            { label: ' mortgage', key: 'mortgage', color: 'rgba(75, 192, 192, 1)', bgColor: 'rgba(75, 192, 192, 0.2)' },
            { label: ' normal_price', key: 'normal_price', color: 'rgba(255, 206, 86, 1)', bgColor: 'rgba(255, 206, 86, 0.2)' },
        ],
        rent: [
            { label: 'normal_price', key: 'normal_price', color: 'rgba(153, 102, 255, 1)', bgColor: 'rgba(153, 102, 255, 0.2)' },
            { label: 'weekend_price', key: 'weekend_price', color: 'rgba(255, 159, 64, 1)', bgColor: 'rgba(255, 159, 64, 0.2)' },
        ],
    };

    const datasets = columnsByPriceType[priceType]?.map(column => ({
        label: column.label,
        data: data.map(item => item[column.key]),
        borderColor: column.color,
        backgroundColor: column.bgColor,
        borderWidth: 2,
        tension: 0.3,
    })) || [];

    const chartData = {
        labels: data.map(item => new Date(item.fetched_at).toLocaleTimeString()), // Format timestamps as readable time
        datasets,
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Mortgage Values Over Time',
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default ChartComponent;
