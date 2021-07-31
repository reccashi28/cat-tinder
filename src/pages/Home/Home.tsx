import React from 'react'

import { Grid, Typography } from '@material-ui/core';
import useCategories from '../../hooks/useCategories';
import Category from '../../components/Category/Category';

function Home() {
    const categories = useCategories();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h6" component="h4">Select a Category</Typography>
            </Grid>
            <Grid item xs={12} md={6} > 
                {categories.map ( category => {
                return <Category key={category.id} name={category.name} id={category.id!}/>
                })}
            </Grid>            
        </Grid>
    )
}

export default Home
