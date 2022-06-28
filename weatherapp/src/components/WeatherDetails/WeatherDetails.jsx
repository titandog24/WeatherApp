import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
 

const WeatherDetails = ({humidity, wind}) => {
  return (
    <div>
        <Typography variant='h4'>Humedad: {humidity}%</Typography>
        <Typography variant='h4'>Viento: {wind}km2</Typography>
    </div>
  )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherDetails