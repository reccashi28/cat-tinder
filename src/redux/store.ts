import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { AppState } from '../types';
import createRootReducer from './reducers';

const middlewares = [thunk];
let composeEnhancers = compose;

const initState: AppState = {
    cats: {
        catsCategories: [],
        image: ''
    }
}

const store = createStore(createRootReducer() , initState ,composeEnhancers(applyMiddleware(...middlewares)));

export default store;
