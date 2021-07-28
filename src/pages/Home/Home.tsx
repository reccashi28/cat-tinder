import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Category from '../../components/Category/Category'
import { fetchCategories } from '../../redux/actions/cats';

import { Col, Container, Row } from 'react-bootstrap'

function Home() {
    const dispatch = useDispatch();
    
    useEffect( () => {
        dispatch(fetchCategories())
    }, [])
    
    return (
        <Container>
            <Row>
                <Col>
                    <h3>Select a Category</h3>
                </Col>
            </Row>
            <Category />
        </Container>
    )
}

export default Home
