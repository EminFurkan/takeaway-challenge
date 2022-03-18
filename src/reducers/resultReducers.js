import { GET_QUERY_RESULTS, GET_INITIAL_RESULTS } from '../constants/cocktail.constants';

export const resultReducers = (
  state = { results: [] },
  action
) => {
  switch (action.type) {
    case GET_QUERY_RESULTS:
      const newResults = action.payload.drinks;
      return {
        results: [...newResults],
      }
    case GET_INITIAL_RESULTS:
      const initialResults = action.payload.drinks;
      return {
        results: [...initialResults],
      }
    default:
      return state;
  }
}