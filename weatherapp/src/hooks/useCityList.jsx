import { useState, useEffect } from 'react'
import axios from 'axios'

import { URLWeather } from '../utilsComponent/URLs'
import getAllWeather  from '../utilsComponent/transform/GetAllWeather'
import { getCityAndCountry } from '../utilsComponent/Utils'



export const useCityList = (cities, allWeather, onSetAllWeather) => {
    const [errores, setError] = useState('')

    useEffect(() => {
        const setWeather = async (city, country) => {

            try {

                const propName = getCityAndCountry(city, country)
                onSetAllWeather({[propName]: {}})

                const response = await axios.get(URLWeather(city))
                const transformAllWeather = getAllWeather(response,getCityAndCountry(city, country))

                onSetAllWeather(transformAllWeather)
                
            } catch (error) {
                console.log(error);
                setError('Ha ocurrido un error')
            }
        }

        cities.forEach(({ city, country }) => {
            if (!allWeather[getCityAndCountry(city, country)]) {
                setWeather(city, country)
            } 
        })

    }, [cities, allWeather, onSetAllWeather])

    return { errores, setError }
}