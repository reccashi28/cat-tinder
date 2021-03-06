import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import dontPet from '../../assets/DontPet.svg'
import pet from '../../assets/Pet.svg'
import skip from '../../assets/Skip.svg'
import FetchError from '../FetchError/FetchError'
import { AppState } from '../../types'
import { getCategorySelected, getSelectedCategoryImages, getTotalCatDidNotPet, getTotalCatPet, getTotalCatSeen, getTotalCatSkipped } from '../../redux/actions'

import { Box, Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Dialog, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        maxWidth: 600,
        [theme.breakpoints.up("sm")]: {
            width: 500,
          },
        marginBottom: '5rem'
      },
    media: {
        height: 250,
        width:'100%',
        minWidth: 300,
        [theme.breakpoints.up("sm")]: {
            height: 350
        },
        objectFit: 'contain'
    },
    actionButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnName: {
        fontFamily: 'Inter',
        textTransform: 'lowercase',
        '&:first-letter': {
            textTransform: 'uppercase'
        } 
    },
    question: {
        marginTop: '2rem',
        marginBottom: '2rem',
    },
    btnContainer: {
        marginBottom: 10,
    },
    pawImg: {
        width: '100%',
        height: 250,
        [theme.breakpoints.up("sm")]: {
            height: 350
        },
    },
    textPetit: {
        color: '#43a047'
    }
  }));

type showStatisticSuspense = {
    open: boolean;
}
function ShowStatisticSuspense({open}: showStatisticSuspense){
    return (
        <Dialog open={open} 
        PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              width: 'auto',
              height: '100',
            },
        }}>
            <Box display='flex' flexDirection='column' justifyContent="space-evenly" alignItems='center'>
                <CircularProgress color='primary'  />
                <Typography color='textPrimary' variant="h5">Loading statistics.</Typography>
            </Box>
        </Dialog>
      );
}


function SelectedCategory() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { selectedCategoryImages, categorySelected } = useSelector( (state: AppState) => state.cats)
    const [ index, setIndex ] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    let selectedCategoryForStatisticComponent = {
        ...categorySelected,
        name: "statistics"
    }

    const handleNextImage = () => {
        if(index === 0 || index < selectedCategoryImages.length -1) {
            setIndex(prev => (prev + 1) )
        } else {
            setOpen(true)
            dispatch(getTotalCatSeen(10))
            dispatch(getCategorySelected(selectedCategoryForStatisticComponent))
            setTimeout(() => {
                dispatch(getSelectedCategoryImages([]))
                setOpen(false)
                history.push(`/statistics`)
            }, 500);
        }
      };

      if(!selectedCategoryImages){
            return <FetchError />
      }
  return (
      <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
        <Typography className={classes.question} variant='h6'>
            Would you pet it?
        </Typography>
        <Card className={classes.root}>
            <CardActionArea>
                {!selectedCategoryImages.length ? 
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' className={classes.pawImg}>
                    <PetsIcon className={`${classes.pawImg}`} color='action' />
                    <p>Loading image</p>
                </Box>: <CardMedia
                    component="img"
                    className={classes.media}
                    image={selectedCategoryImages[index]}
                    title="Cat Image"
                /> }
               
                <CardContent>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Typography gutterBottom  component="p" color='textSecondary'>
                            Cat {index + 1}/10
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <Grid container spacing={3} justifyContent="space-evenly" alignItems="center" className={classes.btnContainer}>
                <Grid item>
                    <Button size="small" color="primary" onClick={() => {
                        dispatch(getTotalCatDidNotPet(1))
                        handleNextImage()                    
                    }}>
                        <Box className={classes.actionButton}>
                            <img src={dontPet} alt="Dont Pet"/>
                            <Typography className={classes.btnName} color='error'>Don't Pet it!</Typography>
                        </Box>
                    </Button>
                </Grid>
                <Grid item>
                    <Button size="small" color="primary" onClick={() => {
                        dispatch(getTotalCatSkipped(1))
                        handleNextImage()
                    }
                    } >
                        <Box className={classes.actionButton}>
                            <img src={skip} alt="Skip"/>
                            <Typography className={classes.btnName} color='secondary'>Skip it!</Typography>
                        </Box>
                    </Button>
                </Grid>
                <Grid item>
                    <Button size="small" color="primary" onClick={() => {
                        dispatch(getTotalCatPet(1))
                        handleNextImage()
                    }}>
                        <Box className={classes.actionButton}>
                            <img src={pet} alt="Pet"/>
                            <Typography className={`${classes.btnName} ${classes.textPetit}`} >Pet it!</Typography>
                        </Box>
                    </Button>
                </Grid>
            </Grid>
        </Card>
        <ShowStatisticSuspense open={open} />
    </Box>
  );
}

export default SelectedCategory

