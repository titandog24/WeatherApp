import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import token from '../components/token'
import { useParams } from 'react-router-dom'
import convertUnits from 'convert-units'

import AppFrame from '../components/AppFrame'
import CityInfo from '../components/CityInfo'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'
import Grid from '@mui/material/Grid'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'


import 'moment/locale/es'

const CityPage = () => {
    const params = useParams();
    const { city, country } = params
    const [data, setData] = useState(null)
    const [forecastList, setForecastList] = useState(null)

    useEffect(() => {
        const getForecast = async () => {


            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${token()}`

            try {
                const { data } = await axios.get(url)

                const convertToCelsius = (temp) => Number(convertUnits(temp).from('K').to('C').toFixed(0))

                const daysAhead = [0, 1, 2, 3, 4, 5]
                const days = daysAhead.map(d => moment().add(d, 'd'))
                const dataAux = days.map(day => {

                    const tempObjArray = data.list.filter(item => {
                        const dayOfYear = moment.unix(item.dt).dayOfYear()
                        return dayOfYear === day.dayOfYear()
                    })


                    if (tempObjArray.length === 0) {
                        tempObjArray.push(valorPorDefecto)
                    }

                    const temps = tempObjArray.map(item => item.main.temp)

                    return ({
                        dayHour: day.format('ddd'),
                        min: convertToCelsius(Math.min(...temps)),
                        max: convertToCelsius(Math.max(...temps)),
                    })
                })


                setData(dataAux)

                const interval = [4, 8, 12, 16, 20, 24]
                const forecastItemListAux = data.list
                .filter((item, index) => interval.includes(index))
                    .map(item => {
                        return (
                            {
                                hour: moment.unix(item.dt).hour(),
                                weekDay: moment.unix(item.dt).format('dddd'),
                                state: item.weather[0].main.toLowerCase(),
                                temperature: convertToCelsius(item.main.temp),
                            }
                        )
                    })
                setForecastList(forecastItemListAux)
            } catch (error) {
                console.log(error);
            }
        }

        getForecast()
    }, []);

    const state = 'Clear'
    const temperature = 20
    const humidity = 90
    const wind = 5



    const valorPorDefecto =
    {
        "dt": 1656828000,
        "main": {
            "temp": 285.3,
            "feels_like": 284.76,
            "temp_min": 285.3,
            "temp_max": 286.05,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 1015,
            "humidity": 84,
            "temp_kf": -0.75
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "clouds": {
            "all": 49
        },
        "wind": {
            "speed": 2.48,
            "deg": 252,
            "gust": 4.37
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2022-07-03 06:00:00"
    }

    const forecastListExample = [
        { weekDay: 'Saturday', hour: 20, state: 'Clouds', temperature: 20 },
        { weekDay: 'Saturday', hour: 20, state: 'Clouds', temperature: 20 },
        { weekDay: 'Saturday', hour: 20, state: 'Clouds', temperature: 20 }
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