import React, { useEffect } from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useCategoryImage from '../../hooks/useCategoryImage';
import { Box, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
      position: 'absolute',
      bottom: "16px",
      alignSelf: 'center',
    },
    categoryImg: {
      position: 'relative',
    },
    img: {
      width: '90%'
    }
  }),
);

type CategoryPropType = {
    name: string
    id: number
}

function Category({name, id}: CategoryPropType) {
    const classes = useStyles();  
    const image = useCategoryImage(id);

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Box className={classes.categoryImg} display='flex' flexDirection='column'>
              <img className={classes.img} src={image} alt={name} />
              <Button variant='contained' className={classes.button}>{name}</Button>
            </Box>
          </Grid>      
        </Grid>
      </div>
    )
}

export default Category
