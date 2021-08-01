import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import SelectedCategory from './components/SelectedCategory/SelectedCategory';
import Statistics from './components/Statistics/Statistics';

import { Grid, makeStyles } from '@material-ui/core';
import './App.css';


const useStyles = makeStyles({
  root: {
    maxWidth: 1280,
  }
});

function App() {
  const classes = useStyles();

  return (
    <Grid container  justifyContent='center'>
      <Grid item xs={1} />
        <Grid item xs={10} className={classes.root}>
            <BrowserRouter>
              <Header />
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/categorydetails/:name/:id">
                    <SelectedCategory />
                  </Route>
                  <Route path="/statistics">
                    <Statistics />
                  </Route>
              </Switch>
            </BrowserRouter>
        </Grid>
      <Grid item xs={1} />
    </Grid> 

  );
}

export default App;
