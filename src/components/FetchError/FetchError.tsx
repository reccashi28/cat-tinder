import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../types'

import { Button, Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
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
            <Grid container justifyContent="center" spacing={3} > 
                <Typography>Ooops! Something went wrong. Please try again.</Typography>
                {!errorMessage ? <Typography className={classes.errorText1}> <i>Error Occured </i></Typography> :   <Typography className={classes.errorText}> <i>Error: {errorMessage} </i></Typography> }
                <Button className={classes.btnError} variant="contained" onClick={() => handleRefresh()}>Retry</Button>
            </Grid>
        </>
    )
}

export default FetchError
