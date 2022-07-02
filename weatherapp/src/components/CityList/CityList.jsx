import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import convertUnits from 'convert-units'
import token from './token'

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, allWeather) => {
    const { city, country } = cityAndCountry
    return (
        <ListItem button key={city} onClick={eventOnClickCity}>
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

const CityList = ({ cities, onClickCity }) => {
    const [allWeather, setAllWeather] = useState({})

    useEffect(() => {
        const setWeather = (city, country) => {

            const appid = token()
            debugger
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`)
                .then(response => {
                    const { data } = response
                    const temperature = Number(convertUnits(data.main.temp).from('K').to('C').toFixed(0))
                    const state = data.weather[0].main
                    const propName = `${city}-${country}`
                    const propValue = { temperature, state }
                    setAllWeather((allWeather) => {
                        const result = { ...allWeather, [propName]: propValue }
                        return result
                    })
                }).catch(error => {
                    console.log(error);
                })
        }

        cities.forEach(({ city, country }) => {
            setWeather(city, country)
        })

    }, [cities])

    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
            }
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default CityList