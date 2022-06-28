import React from 'react';
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain } from 'react-icons/wi'
import { IconContext } from 'react-icons'
import PropTypes from 'prop-types'

const validState = [
    'cloud','cloudy','fog','sunny','rain'
]

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
const Icons = state => {
    return (
        <IconContext.Provider value={{ size: '5em' }}>
                {renderState(state)}
        </IconContext.Provider>
    );
}

Icons.propTypes = {
    state: PropTypes.oneOf(validState).isRequired
}

export default Icons;
