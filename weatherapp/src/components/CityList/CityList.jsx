import React from 'react'
import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import PropTypes from 'prop-types'

import CityInfo from '../CityInfo'
import Weather from '../Weather'
import { useCityList } from '../../hooks/useCityList'
import { getCityAndCountry } from '../../utilsComponent/Utils'



const renderCityAndCountry = eventOnClickCity => (cityAndCountry, allWeather) => {
    const { city, country } = cityAndCountry

    return (
        <ListItem button key={city} onClick={() => eventOnClickCity(city, country)}>
            <Grid container justifyContent={'center'} alignContent={'center'}>
                <Grid item xs={12} md={9}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Weather
                        temperature={allWeather && allWeather.temperature}
                        state={allWeather && allWeather.state} />
                </Grid>
            </Grid>
        </ListItem>
    )
}



const CityList = ({ data, cities, onClickCity, actions}) => {

    const {allWeather} = data 
    const {errores, setError } = useCityList(cities, allWeather, actions)

    return (
        <>
            {
                errores !== ''
                    ? <Alert severity="error" onClose={() => setError('')}>{errores}</Alert>
                    : ""
            }
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[getCityAndCountry(cityAndCountry.city, cityAndCountry.country)]))
                }
            </List>
        </>

    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default CityList