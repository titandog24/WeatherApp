import React from 'react';
import {fireEvent, render} from '@testing-library/react'
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
    const cityListComponent = await findAllByRole("button")

    expect(cityListComponent).toHaveLength(4)
 })

 test('CityList click On Item', async () => { 
    
    const fnClickOnItem = jest.fn()

    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const cityListComponent = await findAllByRole("listitem")

    fireEvent.click(cityListComponent[0])


    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
  })