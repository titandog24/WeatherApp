import { useState, useEffect } from 'react'
import axios from 'axios'
import 'moment/locale/es'

import { URLForecast } from '../utilsComponent/URLs'
import getAllForecast from '../utilsComponent/transform/GetForecast'

export const useCityPage = (city) => {
    const [data, setData] = useState(null)
    const [forecastList, setForecastList] = useState(null)


    useEffect(() => {
        const getForecast = async () => {

            try {
                const{ dataAux, forecastItemListAux} = getAllForecast(await axios.get(URLForecast(city)))

                setData((data) => data = dataAux)
                setForecastList((forecastList) => forecastList = forecastItemListAux)
            } catch (error) {
                console.log(error);
            }
        }

        getForecast()
    },[city]);

    return {data, forecastList}
}


