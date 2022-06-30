import React from 'react'
import { Link } from 'react-router-dom'
import AppFrame from '../components/AppFrame'

const NotFoundPage = () => {
    return (
        <AppFrame>
            Not found
            <div>
                <Link to="/main">Ir a Main</Link>
            </div>
        </AppFrame>
    )
}


export default NotFoundPage