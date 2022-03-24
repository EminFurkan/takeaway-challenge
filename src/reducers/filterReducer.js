import { GET_FILTER_OPTIONS, SET_ACTIVE_FILTERS } from "../constants/cocktail.constants";

const initialState = {
  filterOptions: {
    ingredients: [],
    glasses: [],
    categories: []
  },
  activeFilters: {
    ingredients: [],
    glasses: null,
    categories: null
  }
}

export const filterReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_FILTER_OPTIONS:
      return {
        ...state,
        filterOptions: action.payload
      }
    case SET_ACTIVE_FILTERS:
      return {
        ...state,
        activeFilters: action.payload
      }
    default:
      return state;
  }
}