import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Col, Container, Row } from 'react-bootstrap';
import SelectedCategory from './components/SelectedCategory/SelectedCategory';
import Statistics from './components/Statistics/Statistics';

function App() {
  return (
    <div style={{width: '90%', maxWidth: '1300px', margin: 'auto'}}>
    <Container fluid>
      <Row>
       <Col lg={10} md={10} sm={10}>
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
        </Col>
      </Row>
          
        </Container>

     </div>

  );
}

export default App;
