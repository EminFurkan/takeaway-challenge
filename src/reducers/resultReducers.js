import { GET_QUERY_RESULTS, GET_INITIAL_RESULTS } from '../constants/cocktail.constants';

const initialState = [];

export const resultReducers = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_QUERY_RESULTS:
      const newResults = action.payload.drinks;
      return [...newResults];
    case GET_INITIAL_RESULTS:
      const initialResults = action.payload.drinks;
      return [...initialResults];
    default:
      return state;
  }
}