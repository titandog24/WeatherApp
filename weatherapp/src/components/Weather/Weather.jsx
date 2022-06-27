import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material';
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi'
import { IconContext } from 'react-icons'

const Weather = ({ temperature, state}) => {
    
    const stateByName = {
        cloud: WiCloud,
        cloudy: WiDayCloudy,
        fog: WiDayFog,
        sunny: WiDaySunny,
        rain: WiRain
    }

    const renderState = (stateIcon) => {
        const Icon = stateByName[stateIcon] === undefined ? stateByName["sunny"] : stateByName[stateIcon]

        return <Icon />
    }

    return (
        <div>
            <IconContext.Provider value={{ size: '5em' }}>
                {renderState(state)}
            </IconContext.Provider>
            <Typography variant='h4' display='inline'>{temperature}</Typography>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired
}

export default Weather