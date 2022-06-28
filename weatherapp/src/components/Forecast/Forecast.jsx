import React from 'react'
import PropTypes from 'prop-types'
import {Grid} from '@mui/material' 
import ForecastItem from '../ForecastItem/'  

const renderForecastItem = (forecast, index) => {
    const {weekDay, hour, state, temperature} = forecast
    return(
        <Grid item key={index}>
            <ForecastItem   weekDay={weekDay} 
                            hour={hour} 
                            state={state} 
                            temperature={temperature} />
        </Grid>
    )
}

const Forecast = ({forecastItemList}) => {  
  return (
    <Grid container justifyContent={'center'} alignContent={'center'}>
        {
            forecastItemList.map((forecast,index) => renderForecastItem(forecast, index))
        }
    </Grid>
  )
}

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired
    }))
}

export default Forecast