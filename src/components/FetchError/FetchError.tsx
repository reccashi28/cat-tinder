import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../../types'

import { Button, Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        minHeight: '60vh'
    },
    btnError: {
        marginTop: 20,
        backgroundColor: 'orange',
        color: 'white'
    },
    errorText: {
        marginTop: 20,
    },
    errorText1: {
        marginTop: 20,
    },
  });


function FetchError() {
    const classes = useStyles();
    const handleRefresh = (): void =>  window.location.reload()
    const { errorMessage } = useSelector( (state: AppState) => state.cats)
 
    return (
        <>
            <Grid className={classes.root} container justifyContent='center' spacing={3} alignItems='center' direction='column'> 
                <Grid item>
                    <Typography>Ooops! Something went wrong. Please try again.</Typography>
                    {!errorMessage ? <Typography className={classes.errorText1}> <i>Error Occured </i></Typography> :   <Typography className={classes.errorText}> <i>Error: {errorMessage} </i></Typography> }
                </Grid>
                <Grid item>
                    <Button className={classes.btnError} variant="contained" onClick={() => handleRefresh()}>Retry</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default FetchError
