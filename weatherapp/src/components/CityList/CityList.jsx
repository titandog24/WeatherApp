import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry

    return (
        <ListItem button key={city} onClick={eventOnClickCity}>
            <Grid container justifyContent={'center'} alignContent={'center'}>
                <Grid item xs={12} md={9}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Weather temperature={10} state="cloud" />
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default CityList