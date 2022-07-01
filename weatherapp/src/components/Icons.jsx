import React from 'react';
import { WiDayCloudy, WiSnow, WiRaindrop, WiThunderstorm, WiDaySunny, WiRain } from 'react-icons/wi'
import { IconContext } from 'react-icons'
import PropTypes from 'prop-types'

const validState = [
    'Clear','Clouds','Rain','Snow','Drizzle','Thunderstorm'
]

const stateByName = {
    drizzle: WiRaindrop,
    clouds: WiDayCloudy,
    clear: WiDaySunny,
    rain: WiRain,
    thunderstorm: WiThunderstorm,
    snow: WiSnow
}

const renderState = (stateIcon) => {
    stateIcon = stateIcon.state.toLowerCase()
    
    const Icon = stateByName[stateIcon] === undefined ? stateByName["clear"] : stateByName[stateIcon]

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
