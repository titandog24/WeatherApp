import React from 'react'
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen'
import Grid from '@mui/material/Grid'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import { Typography } from '@mui/material'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'


const WelcomePage = () => {
    return (
        <div>
            <WelcomeScreen>
                <Grid container justifyContent={'center'}
                    alignContent={'center'}
                    direction='column'
                    className='full'>
                    <div className="highlight">
                        <Grid container item
                            justifyContent='center'
                            alignContent={'center'}>
                            <IconContext.Provider value={{ size: '6em' }}>
                                <WiDaySunny />
                            </IconContext.Provider>
                        </Grid>
                        <Grid container item
                            direction={'column'}
                            justifyContent='center'
                            alignContent={'center'}>
                            <Typography variant='h4' color='inherit'>
                                Weather App
                            </Typography>
                            <Link to='/main' component={RouterLink} style={{color: 'white'}} arial-label='menu' textAlign={'center'}>
                                <Typography variant='h6' color='inherit'>
                                    Ingresar
                                </Typography>
                            </Link>
                        </Grid>
                    </div>
                </Grid>
            </WelcomeScreen>
        </div>
    )
}


export default WelcomePage