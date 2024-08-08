import React from 'react'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const LineChartData = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
    datasets: [
        {
            label: "Steps",
            data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
            borderColor: "rgb(75, 192, 192)"
        },
        {
            label: "Steps",
            data: [5000, 2000, 7000, 4000, 8000, 9000, 3000],
            borderColor: "#9ea9c3"
        }
    ]
}

function LineChartComponent() {
    const options = {}
    const data = LineChartData

    return (
        <Line options={options} data={data} />
    )
}

export default LineChartComponent
