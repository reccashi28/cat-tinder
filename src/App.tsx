import React from 'react';
import logo from './logo.svg';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div style={{width: '90%', maxWidth: '1300px', margin: 'auto'}}>
    <Container fluid>
      <Row>
       <Col lg={10} md={10} sm={10}>
          <BrowserRouter>
            <Header />
            <Route path="/">
              <Home />
            </Route>
          </BrowserRouter>
        </Col>
      </Row>
          
        </Container>

     </div>

  );
}

export default App;
