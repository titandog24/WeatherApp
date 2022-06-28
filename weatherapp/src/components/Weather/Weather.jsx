import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material';
import Icons from '../Icons';



const Weather = ({ temperature, state}) => {

    return (
        <div>
            <Icons state={state} />
            <Typography variant='h4' display='inline'>{temperature}</Typography>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired
}

export default Weather