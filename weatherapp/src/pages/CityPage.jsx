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



const CityPage = ({actions, datos}) => {
    const params = useParams();
    const { city, country } = params
    const {allWeather, charData, forecastList} = datos

    const cities = useMemo(() =>([{city, country}]), [city, country])
    
    useCityPage(city, actions, charData, forecastList)
    useCityList(cities, allWeather, actions)

    const weather = allWeather[getCityAndCountry(city, country)]
    const allCharData = charData && charData[city]
    const allForecastList =forecastList && forecastList[city]
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
                    { weather && <Weather
                            temperature={weather && weather.temperature}
                            state={weather && weather.state} />}
                    </Grid>
                    <Grid container item xs={12} justifyContent={'center'}>
                       { humidity && wind && <WeatherDetails humidity={humidity} wind={wind} />}
                    </Grid>
                </Grid>
                <Grid container item xs={8} justifyContent={'center'}>
                   {
                    !allCharData && !allForecastList && <LinearProgress color="secondary" />
                   } 
                </Grid>
                <Grid container item xs={12} justifyContent={'center'}>
                    {
                        allCharData && <ForecastChart data={allCharData} />
                    }
                </Grid>
                <Grid container item xs={12}>
                    {
                        allForecastList && <Forecast forecastItemList={allForecastList} />
                    }
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage