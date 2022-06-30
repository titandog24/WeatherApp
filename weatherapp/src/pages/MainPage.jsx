import React from 'react'
import {  useHistory } from 'react-router-dom'
import CityList from '../components/CityList'
import AppFrame from '../components/AppFrame'
import { Paper } from '@mui/material'


const MainPage = () => {
    const history = useHistory()

    const cities = [
        {city:"Liberia", country:"Costa Rica"},
        {city:"Bogotá", country:"Colombia"},
        {city:"Caracas", country:"Venezuela"},
        {city:"Managua", country:"Nicaragua"},
    
    ]

    const onClickHandler = () => {
        history.push("/city")
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