import { combineReducers } from 'redux';

import cats from './cats'

const createRootReducer = () => 
    combineReducers( {
        cats
    })

export default createRootReducer;