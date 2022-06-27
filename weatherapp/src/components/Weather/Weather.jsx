import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material';

const Weather = ({ temperature }) => {
    return (
        <>
            <Typography variant='h4'>{temperature}</Typography>
        </>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired
}

export default Weather