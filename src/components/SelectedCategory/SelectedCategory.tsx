import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import clsx from 'clsx';

import dontPet from '../../assets/DontPet.svg'
import pet from '../../assets/Pet.svg'
import skip from '../../assets/Skip.svg'
import FetchError from '../FetchError/FetchError'
import { AppState } from '../../types'
import { getCategorySelected, getTotalCatDidNotPet, getTotalCatPet, getTotalCatSeen, getTotalCatSkipped } from '../../redux/actions'

import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Theme, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        maxWidth: 600,
        [theme.breakpoints.up("sm")]: {
            width: 500,
          },
      },
    media: {
        height: 250,
        width:'100%',
        minWidth: 300,
        [theme.breakpoints.up("sm")]: {
            height: 350
        },
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
    textDontPet: {
    color: 'red',

    },
    textPetted: {
        color: 'green',
    },
    textSkipped: {
     color: 'gray',
    },
    imgIndex: {
        color: 'gray'
    },
    question: {
        marginTop: '2rem',
        marginBottom: '2rem',
    },
    btnContainer: {
        marginBottom: 10,
    }
  }));

function SelectedCategory() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { selectedCategoryImages, categorySelected } = useSelector( (state: AppState) => state.cats)
    const [ index, setIndex ] = useState<number>(0);
    const txtCatDontPet = clsx(classes.btnName,classes.textDontPet)
    const txtCatPetted = clsx(classes.btnName,classes.textPetted)
    const txtCatSkipped = clsx(classes.btnName,classes.textSkipped)

    let selectedCategoryForStatisticComponent = {
        ...categorySelected,
        name: "statistics"
    }

    const handleNextImage = () => {
        if(index < selectedCategoryImages.length -1) {
            setIndex(prev => (prev + 1) )
        } else {
            dispatch(getTotalCatSeen(10))
            dispatch(getCategorySelected(selectedCategoryForStatisticComponent))
           history.push(`/statistics`)
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
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={selectedCategoryImages[index]}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Typography gutterBottom  component="p" className={classes.imgIndex}>
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
                            <Typography className={txtCatDontPet}>Don't Pet it!</Typography>
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
                            <Typography className={txtCatSkipped}>Skip it!</Typography>
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
                            <Typography className={txtCatPetted}>Pet it!</Typography>
                        </Box>
                    </Button>
                </Grid>
            </Grid>
        </Card>
    </Box>
  );
}

export default SelectedCategory

