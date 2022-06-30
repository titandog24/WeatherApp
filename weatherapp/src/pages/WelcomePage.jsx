import React from 'react'
import { Link } from 'react-router-dom'
import AppFrame from '../components/AppFrame'


const WelcomePage = props => {
    return (
        <AppFrame>
            Welcome
            <div>
                <Link to="/main">Ir a Main</Link>
            </div>
        </AppFrame>
    )
}


export default WelcomePage