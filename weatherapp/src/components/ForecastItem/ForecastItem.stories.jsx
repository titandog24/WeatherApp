import React from 'react';
import ForecastItem from './ForecastItem';

export default {
    title: 'ForecastItem',
    component: ForecastItem
}

export const ForecastItemExample = () => <ForecastItem weekDay='Saturday' hour={20} state='sunny' temperature={10} />