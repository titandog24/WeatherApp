import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div>
            Not found
            <div>
                <Link to="/main">Ir a Main</Link>
            </div>
        </div>
    )
}


export default NotFoundPage