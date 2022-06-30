import React from 'react'
import Grid from '@mui/material/Grid'
import CityInfo from '../components/CityInfo'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import AppFrame from '../components/AppFrame'

const CityPage = () => {
    const city = 'La cruz'
    const country = 'Costa Rica'
    const state = 'sunny'
    const temperature = 20
    const humidity = 90
    const wind = 5



    const data = [
        {
            "dayHour": "Jue 18",
            "min": 14,
            "max": 22,
        },
        {
            "dayHour": "vie 06",
            "min": 18,
            "max": 27,
        },
        {
            "dayHour": "vie 12",
            "min": 18,
            "max": 28,
        },
        {
            "dayHour": "vie 18",
            "min": 18,
            "max": 25,
        },
        {
            "dayHour": "Sab 06",
            "min": 14,
            "max": 22,
        },
        {
            "dayHour": "Sab 12",
            "min": 12,
            "max": 19,
        }
    ]

    const forecastList = [
        { weekDay: 'Saturday', hour: 20, state: 'cloud', temperature: 20 },
        { weekDay: 'Saturday', hour: 20, state: 'cloud', temperature: 20 },
        { weekDay: 'Saturday', hour: 20, state: 'cloud', temperature: 20 }
    ]
    return (
        <AppFrame>
            <Grid container
                justifyContent={'center'}>
                <Grid container item xs={12} justifyContent={'center'} alignContent={'flex-end'}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12} justifyContent={'center'}>
                    <Grid container item xs={12} justifyContent={'center'}>
                        <Weather state={state} temperature={temperature} />
                    </Grid>
                    <Grid container item xs={12} justifyContent={'center'}>
                        <WeatherDetails humidity={humidity} wind={wind} />
                    </Grid>
                </Grid>
                <Grid container item xs={12} justifyContent={'center'}>
                    <ForecastChart data={data} />
                </Grid>
                <Grid container item xs={12}>
                    <Forecast forecastItemList={forecastList} />
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage