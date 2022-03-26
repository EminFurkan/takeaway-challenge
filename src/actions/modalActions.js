import { SET_MODAL_DATA, SET_MODAL_VISIBILITY } from "../constants/cocktail.constants";

export const setModalData = (drink) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SET_MODAL_DATA,
      payload: drink
    })
  } catch (error) {
    console.log(error);
  }
}

export const setModalVisibility = (bool) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SET_MODAL_VISIBILITY,
      payload: bool
    })
  } catch (error) {
    console.log(error);
  }
}