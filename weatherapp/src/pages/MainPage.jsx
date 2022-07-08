import React, {useCallback} from 'react'
import { useHistory } from 'react-router-dom'
import CityList from '../components/CityList'
import AppFrame from '../components/AppFrame'
import { Paper } from '@mui/material'


const MainPage = ({data, actions}) => {
    const history = useHistory()
    const cities = [
        { city: "London", country: "England" },
        { city: "Bogota", country: "Colombia" },
        { city: "Caracas", country: "Venezuela" },
        { city: "San Jose", country: "Costa Rica" },

    ]

    const onClickHandler = useCallback((city, country) => {
        history.push(`/city/${country}/${city}`)
    }, [history])

    return (
        <AppFrame>
            <Paper elevation={3}>
                <h1>Lista de Ciudades</h1>
                <CityList
                    data={data}
                    cities={cities}
                    onClickCity={onClickHandler}
                    actions={actions} />
            </Paper>
        </AppFrame>
    )
}


export default MainPage