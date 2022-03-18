import axios from 'axios';
import { INITIAL_QUERY, SEARCH_QUERY } from '../constants/endpoints';

axios.defaults.baseURL = 'https://www.thecocktaildb.com';

export const getResults = (query) => async (dispatch, getState) => {
  try {
    const cocktails = await axios.get(SEARCH_QUERY + query);
  
    dispatch({
      type: 'GET_QUERY_RESULTS',
      payload: cocktails.data,
    })
  } catch (error) {
    console.log(error);
  }
}

export const getInitialResults = () => async (dispatch, getState) => {
  try {    
    const cocktails = await axios.get(INITIAL_QUERY);

    console.log(cocktails)
  
    dispatch({
      type: 'GET_INITIAL_RESULTS',
      payload: cocktails.data,
    })
  } catch (error) {
    console.log(error);
  }
}