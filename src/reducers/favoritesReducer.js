import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../constants/cocktail.constants';

const initialState = localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : [];

export const favoritesReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      return [...state.filter(favorite => favorite.id !== action.payload)];
    default:
      return state;
  }
}