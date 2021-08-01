import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { AppState } from '../types';
import createRootReducer from './reducers';

const middlewares = [thunk];
let composeEnhancers = compose;

const initState: AppState = {
    cats: {
        selectedCategoryImages: [],
        categorySelected: {
            id: null,
            name: ""
        },
        catsSeen: 0,
        catSkipped: 0,
        catDidNotPet: 0,
        catPetted: 0,
        errorMessage: ""
    }
}

const store = createStore(createRootReducer() , initState ,composeEnhancers(applyMiddleware(...middlewares)));

export default store;
