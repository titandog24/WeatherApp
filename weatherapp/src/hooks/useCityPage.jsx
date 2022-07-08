import { useEffect } from 'react'
import axios from 'axios'
import 'moment/locale/es'

import { URLForecast } from '../utilsComponent/URLs'
import getAllForecast from '../utilsComponent/transform/GetForecast'

export const useCityPage = (city, actions, charData, forecastList) => {
    
    useEffect(() => {
        const getForecast = async () => {

            try {
                
                const{ dataAux, forecastItemListAux} = getAllForecast(await axios.get(URLForecast(city)))

                actions({type: 'SET_CHAR_DATA', payload: {[city]: dataAux}})
                actions({type: 'SET_FORECAST_LIST_ITEM', payload: {[city]: forecastItemListAux}})
            } catch (error) {
                console.log(error);
            }
        }
        if (charData && charData[city] && forecastList && forecastList[city]) 
            return 
        else
            getForecast()
        
    },[city, actions,charData,forecastList]);

    return {}
}


