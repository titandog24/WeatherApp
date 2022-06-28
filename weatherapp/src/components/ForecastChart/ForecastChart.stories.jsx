import React from 'react';
import ForecastChart from './';

const data = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

export default {
    title: 'ForecastChart',
    component: ForecastChart
}

export const ForecastChartExample = () => <ForecastChart data={data} />