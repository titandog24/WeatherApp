import React from 'react'
import WeatherDetails from './WeatherDetails';
import {render} from '@testing-library/react'
import "@testing-library/jest-dom/";

test('WeatherDetails Render', async () => { 
    
    const {findAllByRole} = render(<WeatherDetails humidity={10} wind={20} />)

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const WeatherDetailsComponent = await findAllByRole("heading")

    expect(WeatherDetailsComponent[0]).toHaveTextContent("Humedad: 10%")
    expect(WeatherDetailsComponent[1]).toHaveTextContent("Viento: 20km2")
 })