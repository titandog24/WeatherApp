import React from 'react';
import {render} from '@testing-library/react'
import CityList from './CityList';
import "@testing-library/jest-dom/";

const cities = [
    {city:"Liberia", country:"Costa Rica"},
    {city:"Bogotá", country:"Colombia"},
    {city:"Caracas", country:"Venezuela"},
    {city:"Managua", country:"Nicaragua"},

]
test('should first', async () => { 
    
    const {findAllByRole} = render(<CityList cities={cities} />)

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const cityListComponent = await findAllByRole("listitem")

    expect(cityListComponent).toHaveLength(4)
 })