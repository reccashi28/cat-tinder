import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../../assets/Logo.svg'
import { AppState } from '../../types'

function Header() {
    const { categorySelected } = useSelector( (state: AppState) => state.cats)
    const name = categorySelected.name!.charAt(0).toUpperCase() + categorySelected.name!.slice(1);

    return (

        <Grid item container>
            <Grid item >
                <Box pt={4} mb={4}>
                    <img src={logo} alt="logo"/>
                </Box>
                <Box>
                    {categorySelected.name ? <Typography component='p'>{">"} {name}</Typography> : ""}
                </Box>
            </Grid>
        </Grid>
    )
}

export default Header
