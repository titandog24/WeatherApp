import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from '../components/CityList'
import AppFrame from '../components/AppFrame'
import { Paper } from '@mui/material'


const MainPage = () => {
    const history = useHistory()

    const cities = [
        { city: "London", country: "England" },
        { city: "Bogota", country: "Colombia" },
        { city: "Caracas", country: "Venezuela" },
        { city: "San Jose", country: "Costa Rica" },

    ]

    const onClickHandler = (city, country) => {
        history.push(`/city/${country}/${city}`)
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <h1>Lista de Ciudades</h1>
                <CityList cities={cities} onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}


export default MainPage