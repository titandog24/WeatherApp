import React from 'react'
import {render} from '@testing-library/react'
import "@testing-library/jest-dom/";
import Weather from './Weather'

test('Weather Render', async () => { 
    
const {findByRole} = render(<Weather temperature={10}></Weather>)

// eslint-disable-next-line testing-library/prefer-screen-queries
const WeatherComponent = await findByRole("heading")

expect(WeatherComponent).toHaveTextContent("10")

 })