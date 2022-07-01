import React from 'react'
import WelcomeScreen from '../components/WelcomeScreen/'
import Grid from '@mui/material/Grid'
import { IconContext } from 'react-icons'
import { WiRain } from 'react-icons/wi'
import { Typography } from '@mui/material'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
const NotFoundPage = () => {
    return (
        <WelcomeScreen>
                <Grid container justifyContent={'center'}
                    alignContent={'center'}
                    direction='column'
                    className='fullNotFound'>
                    <div>
                        <Grid container item
                            justifyContent='center'
                            alignContent={'center'}>
                            <IconContext.Provider value={{ size: '6em' }}>
                                <WiRain />
                            </IconContext.Provider>
                        </Grid>
                        <Grid container item
                            direction={'column'}
                            justifyContent='center'
                            alignContent={'center'}>
                            <Typography variant='h3' color='inherit'>
                                404! PAGE NOT FOUND
                            </Typography>
                            <Link to='/' component={RouterLink} color='inherit' arial-label='menu' textAlign={'center'}>
                                <Typography variant='h6' color='inherit'>
                                    Back to Main Page
                                </Typography>
                            </Link>
                        </Grid>
                    </div>
                </Grid>
            </WelcomeScreen>
    )
}


export default NotFoundPage