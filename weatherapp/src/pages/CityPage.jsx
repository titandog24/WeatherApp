import React, {useMemo} from 'react'
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import LinearProgress  from '@mui/material/LinearProgress'

import AppFrame from '../components/AppFrame'
import CityInfo from '../components/CityInfo'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import { useCityPage } from '../hooks/useCityPage'
import { useCityList } from '../hooks/useCityList'
import { getCityAndCountry } from '../utilsComponent/Utils'



const CityPage = ({onSetAllWeather, allWeather}) => {
    const params = useParams();
    const { city, country } = params

    const cities = useMemo(() =>([{city, country}]), [city, country])
    
    const {data, forecastList} = useCityPage(city)

    useCityList(cities,allWeather, onSetAllWeather)

    const weather = allWeather[getCityAndCountry(city, country)]

    const humidity = weather && weather.humidity
    const wind = weather && weather.wind


    return (
        <AppFrame>
             <Grid container
                justifyContent={'center'}>
                <Grid container item xs={12} justifyContent={'center'} alignContent={'flex-end'}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12} justifyContent={'center'}>
                    <Grid container item xs={12} justifyContent={'center'}>
                        <Weather
                            temperature={weather && weather.temperature}
                            state={weather && weather.state} />
                    </Grid>
                    <Grid container item xs={12} justifyContent={'center'}>
                       { weather && <WeatherDetails humidity={humidity} wind={wind} />}
                    </Grid>
                </Grid>
                <Grid container item xs={8} justifyContent={'center'}>
                   {
                    !data && !forecastList && <LinearProgress color="secondary" />
                   } 
                </Grid>
                <Grid container item xs={12} justifyContent={'center'}>
                    {
                        data && <ForecastChart data={data} />
                    }
                </Grid>
                <Grid container item xs={12}>
                    {
                        forecastList && <Forecast forecastItemList={forecastList} />
                    }
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage