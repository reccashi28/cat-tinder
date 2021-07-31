import React from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useCategoryImage from '../../hooks/useCategoryImage';
import { Box, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchCatsByCategory } from '../../redux/actions';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      fontFamily: 'Inter',
    },
    button: {
      position: 'absolute',
      bottom: "16px",
      alignSelf: 'center',
      textDecoration: 'none'
    },
    categoryImg: {
      position: 'relative',
    },
    img: {
      width: '90%'
    }
   }
);

type CategoryPropType = {
    name: string
    id: number
}

function Category({name, id}: CategoryPropType) {
    const classes = useStyles();  
    const image = useCategoryImage(id);
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box className={classes.categoryImg} display='flex' flexDirection='column'>
              <img className={classes.img} src={image} alt={name} />
              <Link to={`/categorydetails/${name}/${id}`} className={classes.button} ><Button variant='contained' onClick={() => dispatch(fetchCatsByCategory(id, name))}>{name}</Button></Link>
            </Box>
          </Grid>      
        </Grid>
      </div>
    )
}

export default Category
