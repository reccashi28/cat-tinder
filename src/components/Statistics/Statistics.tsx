import React from 'react'

import dontPet from '../../assets/DontPet.svg'
import pet from '../../assets/Pet.svg'
import skip from '../../assets/Skip.svg'

import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCategorySelected } from '../../redux/actions'

const useStyles = makeStyles({
    root: {
        fontFamily: 'Inter',
    },
   statsBoxes: {
       width: '100%',
       display: 'flex',
       justifyContent: 'space-evenly',
       alignItems: 'center',
       height: 50,
       paddingTop: 5,
       paddingBottom: 5
   },
   btnSameCategory: {
       backgroundColor: 'orange',
       color: 'white',
       fontFamily: 'Inter',
       width: '95%'
   },
   btnNewCategory: {
       borderColor: 'black',
       fontFamily: 'Inter',
       width: '95%',
       margin: 10
   },
   text: {
    fontFamily: 'Inter',
    fontSize: 13,
    padding: 2,
   }
  });

function Statistics() {
    const classes = useStyles();  
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <Grid container justifyContent="center" spacing={2} alignItems='center' className={classes.root}>
            <Grid item>
                <Typography>Cat's seen: </Typography>
            </Grid>
            <Grid item container spacing={2} justifyContent="center" alignItems='center'>
                <Grid item xs={12}>
                    <Box className={classes.statsBoxes} border={1} borderColor="grey.500">
                        <img src={dontPet} alt="Didn't Pet"/>
                        <Box display='flex'  alignItems='flex-end' flexDirection='column' justifyContent="center"> 
                                <Box className={classes.text} fontWeight="fontWeightBold"> number</Box>
                                <Box className={classes.text} fontWeight="fontWeightBold"> Cats you didn't pet</Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.statsBoxes}  border={1} borderColor="grey.500">
                        <img src={skip} alt="Didn't Pet"/>
                        <Box display='flex' alignItems='flex-end' flexDirection='column'> 
                            <Box className={classes.text} fontWeight="fontWeightBold"> number</Box>
                            <Box className={classes.text} fontWeight="fontWeightBold">Cats you skipped</Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.statsBoxes}  border={1} borderColor="grey.500">
                        <img src={pet} alt="Didn't Pet"/>
                        <Box display='flex' alignItems='flex-end' flexDirection='column'> 
                            <Box className={classes.text} fontWeight="fontWeightBold"> number</Box>
                            <Box className={classes.text} fontWeight="fontWeightBold">Cats you petted</Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid item>
                <Box display='flex' justifyContent='space-between' alignItems='center' flexDirection='column' mt={5}> 
                    <Button className={classes.btnSameCategory}>RESTART IN SAME CATEGORY</Button>
                    <Button className={classes.btnNewCategory} style={{ border: '2px solid' }} onClick={() => {
                        dispatch(getCategorySelected(""))
                        history.push('/')
                    }}>SELECT NEW CATEGORY</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Statistics
