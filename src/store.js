import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { resultReducers } from './reducers/resultReducers';
import { favoriteReducers } from './reducers/favoriteReducers';


const reducer = combineReducers({
  favorites: favoriteReducers,
  results: resultReducers
});

const middleware = [thunk];

const initialState = {
  favorites: [],
  results: []
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;