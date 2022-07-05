import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material' 
import Icons from '../../utilsComponent/Icons'


const ForecastItem = ({weekDay, hour, state, temperature}) => {
  return (
    <Grid container direction="column" justifyContent={'center'} alignContent={'center'}>
        <Grid item textAlign={'center'}>
            <Typography>{weekDay}</Typography>
        </Grid>
        <Grid item textAlign={'center'}>
            <Typography>{hour}</Typography>
        </Grid>
        <Grid item textAlign={'center'}>
            <Typography><Icons state={state}></Icons></Typography>
        </Grid>
        <Grid item textAlign={'center'}>
            <Typography>{temperature} °</Typography>
        </Grid>
    </Grid>
  )
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
}

export default ForecastItem