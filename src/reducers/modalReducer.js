import { SET_MODAL_DATA, SET_MODAL_VISIBILITY } from "../constants/cocktail.constants";

const initialState = {};

export const modalReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_MODAL_DATA:
      return {
        ...state,
        data: action.payload
      }
      case SET_MODAL_VISIBILITY:
        return {
          ...state,
          visibility: action.payload
        }
    default:
      return state;
  }
}