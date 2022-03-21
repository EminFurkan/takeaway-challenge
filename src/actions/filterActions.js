import { CATEGORY_LIST_QUERY, INGREDIENT_LIST_QUERY, GLASS_LIST_QUERY } from "../constants/endpoints";
import { GET_FILTER_OPTIONS } from "../constants/cocktail.constants";
import axios from 'axios';

export const getFilterOptions = () => async (dispatch, getState) => {
  try {
    const ingredients = await axios.get(INGREDIENT_LIST_QUERY);
    const categories = await axios.get(CATEGORY_LIST_QUERY);
    const glasses = await axios.get(GLASS_LIST_QUERY);

    dispatch({
      type: GET_FILTER_OPTIONS,
      payload: {
        ingredients: ingredients.data.drinks,
        categories: categories.data.drinks,
        glasses: glasses.data.drinks
      }
    });
  } catch (error) {
    console.log(error);
  }
}