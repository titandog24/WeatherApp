import React from 'react'
import CityInfo from './CityInfo'
import {render} from '@testing-library/react'
import "@testing-library/jest-dom/";

test('Render CityInfo', async () => { 
    //AAA
    //Arrange
    //Act
    //Assert
    const {findAllByRole} = render(<CityInfo city='La Cruz' country='Costa Rica' />)

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const cityInfoComponent = await findAllByRole("heading")

    expect(cityInfoComponent[0]).toHaveTextContent("La Cruz")
    expect(cityInfoComponent[1]).toHaveTextContent("Costa Rica")
 })