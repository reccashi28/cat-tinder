import React from 'react'

import dontPet from '../../assets/DontPet.svg'
import pet from '../../assets/Pet.svg'
import skip from '../../assets/Skip.svg'

import { Box, Button,  Grid, makeStyles, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCatsByCategory, getCategorySelected } from '../../redux/actions'
import { AppState } from '../../types'
import useCategories from '../../hooks/useCategories'

import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
        fontFamily: 'Inter',
    },
   statsBoxes: {
       width: '100%',
       display: 'flex',
       justifyContent: 'space-evenly',
       alignItems: 'center',
       height: 60,
       paddingTop: 5,
       paddingBottom: 5,
       paddingLeft: 2,
       paddingRight: 2,
   },
   btnSameCategory: {
       backgroundColor: 'orange',
       color: 'white',
       fontFamily: 'Inter',
       width: '95%',
   },
   btnNewCategory: {
       borderColor: 'black',
       fontFamily: 'Inter',
       width: '95%',
       margin: 10
   },
   text: {
    fontFamily: 'Inter',
   },
   textDontPet: {
       color: 'red',
       fontWeight: 600,
   },
   textPetted: {
       color: 'green',
       fontWeight: 600,
   },
   textSkipped: {
    color: 'gray',
    fontWeight: 600,
}, 
txtCatSeen: {
    marginTop: 20,
    marginBottom: 10,
}
  });

function Statistics() {
    const classes = useStyles();  
    const history = useHistory();
    const dispatch = useDispatch();
    const { catSkipped, catDidNotPet, catPetted, catsSeen, categorySelected } = useSelector( (state: AppState) => state.cats)
    const categories = useCategories();
    const txtCatDontPet = clsx(classes.text,classes.textDontPet)
    const txtCatPetted = clsx(classes.text,classes.textPetted)
    const txtCatSkipped = clsx(classes.text,classes.textSkipped)


    let findCategoryIndex = categories.findIndex( category => category.id! === categorySelected.id!)
    const sameCategory = categories[findCategoryIndex]
    let refreshSelectedCategory = {
        name: '',
        id: null
    }

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item>
                <Typography className={classes.txtCatSeen}>Cat's seen: {catsSeen} </Typography>
            </Grid>
            <Grid item container spacing={3} justifyContent="center" alignItems='center' sm={12}>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.statsBoxes} border={1} borderColor="grey.500" >
                        <img src={dontPet} alt="Didn't Pet"/>
                        <Box display='flex'  alignItems='flex-end' flexDirection='column' justifyContent="center" > 
                                <Typography  className={txtCatDontPet} > {catDidNotPet}</Typography>
                                <Typography className={classes.text} > Cats you didn't pet</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.statsBoxes}  border={1} borderColor="grey.500">
                        <img src={skip} alt="Didn't Pet"/>
                        <Box display='flex' alignItems='flex-end' flexDirection='column'> 
                            <Typography className={txtCatSkipped}> {catSkipped}</Typography>
                            <Typography className={classes.text} >Cats you skipped</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.statsBoxes}  border={1} borderColor="grey.500">
                        <img src={pet} alt="Didn't Pet"/>
                        <Box display='flex' alignItems='flex-end' flexDirection='column'> 
                            <Typography className={txtCatPetted} > {catPetted}</Typography>
                            <Typography className={classes.text} >Cats you petted</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid item container justifyContent='center'>
                <Box display='flex' justifyContent='space-between' alignItems='center' flexDirection='column' mt={5}> 
                    <Button className={classes.btnSameCategory} onClick={() => {
                        dispatch(getCategorySelected(refreshSelectedCategory))
                        dispatch(fetchCatsByCategory(sameCategory.id!, sameCategory.name))
                        history.push(`/categorydetails/${sameCategory.name}/${sameCategory.id!}`)   
                    }}>
                        RESTART IN SAME CATEGORY
                    </Button>

                    <Button className={classes.btnNewCategory} style={{ border: '1px solid gray' }} onClick={() => {
                        dispatch(getCategorySelected(refreshSelectedCategory))
                        history.push('/')
                    }}>SELECT NEW CATEGORY</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Statistics
