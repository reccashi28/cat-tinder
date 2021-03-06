import React from 'react'
import { useSelector } from 'react-redux';

import { Box, Grid, Typography } from '@material-ui/core';
import useCategories from '../../hooks/useCategories';
import Category from '../../components/Category/Category';
import { AppState, Categories } from '../../types';
import FetchError from '../../components/FetchError/FetchError';

function Home() {
    const categories: Categories[] = useCategories();
    const { errorMessage } = useSelector( (state: AppState) => state.cats)

    if(errorMessage && !categories.length) {
        return <FetchError />
    }

    return (
        <Grid container spacing={5} justifyContent='center'>
            <Grid item xs={12}>
                <Box display="flex" alignItems="center" width='100%' justifyContent="center"> 
                    <Typography variant="h6" component="h4">Select a Category</Typography>
                </Box>
            </Grid>
            <Grid item container spacing={3} justifyContent='center'> 
                { categories.map ( category => {
                   return (<Grid item xs={12} sm={6} md={4} lg={3} key={category.id!}> 
                        <Category key={category.id} name={category.name} id={category.id!}/>
                    </Grid>  )
                })}
            </Grid>  
        </Grid >
    )
}

export default Home
