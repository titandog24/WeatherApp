import React from 'react';
import Forecast from './Forecast';

export default {
    title: 'Forecast',
    component: Forecast
}
const lista = [
    {weekDay:'Saturday', hour:20, state:'cloud', temperature:20},
    {weekDay:'Saturday', hour:20, state:'cloud', temperature:20},
    {weekDay:'Saturday', hour:20, state:'cloud', temperature:20}
]
export const ForecastExample = () => <Forecast forecastItemList={lista} />