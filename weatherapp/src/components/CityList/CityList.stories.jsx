import React from 'react';
import CityList from './CityList';

export default {
    title: 'CityList',
    component: CityList
}

const cities = [
    {city:"Liberia", country:"Costa Rica"},
    {city:"Bogotá", country:"Colombia"},
    {city:"Caracas", country:"Venezuela"},
    {city:"Managua", country:"Nicaragua"},

]

export const CityListExample = () => <CityList cities={cities} />