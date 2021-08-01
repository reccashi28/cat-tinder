import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import useCategoryImage from '../../hooks/useCategoryImage';
import { fetchCatsByCategory } from '../../redux/actions';

import { Box, Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
      position: 'absolute',
      bottom: "16px",
      alignSelf: 'center',
      textDecoration: 'none',
    },
    btnCategorySelected: {
      color: 'white',
      backgroundColor: 'orange',
      textTransform: 'lowercase'
    },
    categoryImg: {
      position: 'relative',
      flexDirection: "column",
      width: '100%',
      height: 290,
    },
    img: {
      width: '100%',
      height: '100%',
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
      <>
           {!image ? <CircularProgress  /> : 
            
              <Box className={classes.categoryImg} display='flex' flexWrap="wrap" flexDirection='row'>
                <img className={classes.img} src={image} alt={name} />
                <Link to={`/categorydetails/${name}/${id}`} className={classes.button} ><Button variant='contained' className={classes.btnCategorySelected} onClick={() => dispatch(fetchCatsByCategory(id, name))}>{name}</Button></Link>
              </Box>

          }     
      </>
    )
}

export default Category
