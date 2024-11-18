import {useEffect, useState} from 'react';
import { Bar } from 'react-chartjs-2';
import api from "../../../lib/api.ts"

export default function PricingChart() {
const [data,setData] = useState(null);
    useEffect(() => {
        api.get("/api/v1/price/10/all").then(res=>{
            setData(res.data);
        })
    }, []);
    const chartData = {
        labels: data?.map((item) => item.type), // Types: 'buy', 'mortgage', 'rent'
        datasets: [
            {
                label: 'Total Price (Buy)',
                data: data?.map((item) => item.total_price || 0), // Use 0 if total_price is undefined
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Price per Meter (Buy)',
                data: data?.map((item) => item.price_per_meter || 0),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Mortgage (Mortgage)',
                data: data?.map((item) => item.mortgage || 0),
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
            },
            {
                label: 'Normal Price',
                data: data?.map((item) => item.normal_price || 0),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Weekend Price (Rent)',
                data: data?.map((item) => item.weekend_price || 0),
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Pricing Data Overview',
            },
        },
    };

    return <Bar data={chartData} options={options} />;
}
