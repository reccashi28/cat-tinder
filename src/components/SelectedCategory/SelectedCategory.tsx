import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../types'

import dontPet from '../../assets/DontPet.svg'
import pet from '../../assets/Pet.svg'
import skip from '../../assets/Skip.svg'


import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { getCategorySelected, getTotalCatDidNotPet, getTotalCatPet, getTotalCatSeen, getTotalCatSkipped } from '../../redux/actions'
import useCategories from '../../hooks/useCategories'

const useStyles = makeStyles({
    imageContainer: {
        position: 'relative',
        maxWidth: 345,
        height: 250,
        overflow: 'hidden',
        borderRadius: 5,
        backgroundColor: 'black',
    },
    root: {
        maxWidth: 345,
        height: 250,
      },
      media: {
          width: '100%',
        height: '100%',
        borderRadius: 5,
        objectFit: 'cover'
      },
      actionButton: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
      },
      btnName: {
        fontFamily: 'Inter',
      }
  });

function SelectedCategory() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { selectedCategoryImages, categorySelected } = useSelector( (state: AppState) => state.cats)
    const [ index, setIndex ] = useState<number>(0);

    let selectedCategoryForStatisticComponent = {
        ...categorySelected,
        name: "statistics"
    }

    // console.log(id, "params")
    const handleNextImage = () => {
        if(index < selectedCategoryImages.length -1) {
            setIndex(prev => (prev + 1) )
        } else {
            dispatch(getTotalCatSeen(10))
            dispatch(getCategorySelected(selectedCategoryForStatisticComponent))
           history.push(`/statistics`)
        }
      };
  return (
      <Box> 
        <Box className={classes.imageContainer} boxShadow={3}> 
            <div className={classes.root} >
                <img
                className={classes.media}
                src={selectedCategoryImages[index]}
                alt="Cats"
                />              
            </div>
        </Box>
        <Grid container spacing={3}>
            <Grid item >
                <Button size="small" color="primary" onClick={() => {
                    dispatch(getTotalCatDidNotPet(1))
                    handleNextImage()                    
                }}>
                    <Box className={classes.actionButton}>
                        <img src={dontPet} alt="Dont Pet"/>
                        <Typography className={classes.btnName}>Don't Pet it!</Typography>
                    </Box>
                </Button>
                <Button size="small" color="primary" onClick={() => {
                    dispatch(getTotalCatSkipped(1))
                    handleNextImage()
                }
                } >
                    <Box className={classes.actionButton}>
                        <img src={skip} alt="Skip"/>
                        <Typography className={classes.btnName}>Skip it!</Typography>
                    </Box>
                </Button>
                <Button size="small" color="primary" onClick={() => {
                    dispatch(getTotalCatPet(1))
                    handleNextImage()
                }}>
                    <Box className={classes.actionButton}>
                        <img src={pet} alt="Pet"/>
                        <Typography className={classes.btnName}>Pet it!</Typography>
                    </Box>
                </Button>
            </Grid>
        </Grid>
      </Box>
  );
}

export default SelectedCategory

