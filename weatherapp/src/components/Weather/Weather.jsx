import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material';
import Icons from '../Icons';
import Skeleton from '@mui/material/Skeleton'


const Weather = ({ temperature, state }) => {
    return (
        <div>
            {
                state ?
                    <Icons state={state} />
                    :
                    <Skeleton variant="circle" height={20} width={80} />
            }
            {
                temperature ?
                    <Typography variant='h4' display='inline'>{temperature}</Typography>
                    :
                    <Skeleton variant="rect" height={80} width={80} />
            }
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.string
}

export default Weather