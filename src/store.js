import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { resultReducers } from './reducers/resultReducers';
import { favoritesReducer } from './reducers/favoritesReducer';


const reducer = combineReducers({
  favorites: favoritesReducer,
  results: resultReducers
});

const middleware = [thunk];


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
  );

export default store;