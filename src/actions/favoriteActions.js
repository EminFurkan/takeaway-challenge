export const addToFavorites = (item) => async (dispatch, getState) => {  
  if (getState().favorites.find(favorite => favorite.id === item.id)) return;

  try {
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: item,
    });

    localStorage.setItem('favorites', JSON.stringify(getState().favorites));
  } catch (error) {
    console.log(error);
  }
}

export const removeFromFavorites = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'REMOVE_FROM_FAVORITES',
      payload: id,
    });
    localStorage.setItem('favorites', JSON.stringify(getState().favorites));
  } catch (error) {
    console.log(error);
  }
}