import React from 'react'
import { useHistory } from 'react-router-dom';

import useCategoryImage from '../../hooks/useCategoryImage';

import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { fetchCatsByCategory } from '../../redux/actions';

const useStyles = makeStyles({
    btnCategorySelected: {
      textTransform: 'lowercase',
      position: 'absolute',
      bottom: "16px",
      alignSelf: 'center',
    },
    categoryImg: {
      position: 'relative',
      flexDirection: "column",
      width: '100%',
      height: 250,
      backgroundColor: 'lightgray'
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
    const dispatch = useDispatch(); 
    const history = useHistory();
    const image: string = useCategoryImage(id);
    return (
      <>
           {!image ? <CircularProgress  /> : 
            
              <Box className={classes.categoryImg} display='flex' flexWrap="wrap" flexDirection='row'>
                <img className={classes.img} src={image} alt={name} />
                  <Button color='primary' variant='contained' className={ classes.btnCategorySelected} onClick={() => {
                    dispatch(fetchCatsByCategory(id, name))
                    history.push(`/categorydetails/${name}/${id!}`)  
                  }}>
                    <Typography color='textSecondary'>{name}</Typography>
                  </Button>
              </Box>

          }     
      </>
    )
}

export default Category
