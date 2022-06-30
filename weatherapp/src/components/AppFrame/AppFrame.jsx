import React from 'react'
// import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Toolbar  from '@mui/material/Toolbar'
import Link from '@mui/material/Link'
import {Link as LinkRouter} from 'react-router-dom'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import {IconContext} from 'react-icons'
import {WiDaySunny} from 'react-icons/wi'
import Typography  from '@mui/material/Typography'

const AppFrame = ({children}) => {
  return (
    <Grid container justifyContent={'center'}>
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <IconButton color='inherit' arial-label="menu">
                    <Link component={LinkRouter}
                    to="/main" color="inherit" aria-label='menu'>
                        <IconContext.Provider value={{size:'2em'}}>
                            <WiDaySunny />
                        </IconContext.Provider>
                    </Link>
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Weather App
                </Typography>
            </Toolbar>
        </AppBar>
        <Grid item
        xs={12}
        sm={11}
        md={10}
        lg={8}>
            {children}
        </Grid>
    </Grid>
  )
}

AppFrame.propTypes = {}

export default AppFrame