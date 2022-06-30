import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
 

const WeatherDetails = ({humidity, wind}) => {
  return (
    <div>
        <Typography variant='h6' display={'inline'}>Humedad: {humidity}%</Typography>
        <Typography variant='h6' display={'inline'}>Viento: {wind}km2</Typography>
    </div>
  )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherDetails