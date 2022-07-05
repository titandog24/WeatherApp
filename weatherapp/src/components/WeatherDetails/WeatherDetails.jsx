import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Skeleton } from '@mui/material'
 

const WeatherDetails = ({humidity, wind}) => {
  return (
    <div>
      {
        humidity ?
          <Typography variant='h6' display={'inline'}>Humedad: {humidity}%</Typography>
          : <Skeleton variant='rectangular' width={40} height={30} />
      }
      {
        wind ?
        <Typography variant='h6' display={'inline'}>Viento: {wind}km2</Typography>
        : <Skeleton variant='rectangular' width={40} height={30} />
      }

    </div>
  )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherDetails