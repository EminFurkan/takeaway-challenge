import { GET_FILTER_OPTIONS } from "../constants/cocktail.constants";

const initialState = {
  filterOptions: {
    ingredients: [],
    glasses: [],
    categories: []
  }
}

export const filterReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_FILTER_OPTIONS:
      return {
        filterOptions: action.payload
      }
    default:
      return state;
  }
}