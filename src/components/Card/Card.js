import './card.scss';
import { Heart } from '../../assets/Heart';
import { addToFavorites, removeFromFavorites } from '../../actions/favoriteActions';
import { useDispatch, useSelector } from 'react-redux';
import { setModalData, setModalVisibility } from '../../actions/modalActions';

export const Card = ({ id, title, thumb, instructions, tags }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const handleFavorite = () => {
    const foundFavorite = favorites.find(favorite => favorite.id === id);
    if (foundFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites({ id, title, thumb }));
    }
  }

  const handleDetails = () => {
    dispatch(setModalData({
      title,
      thumb,
      instructions
    }));
    dispatch(setModalVisibility(true));
  }

  return (
    <div className='card'>
      <img src={thumb} alt="" />
      <div className='title'>{title}</div>
      <div className='tags'>
        {tags ?
          tags.replace(',', ' ').split(' ').map(tag => 
            <div className='tag'>
              {tag}
            </div>
          ) : <></>
        }
      </div>
      <div className='favorite-btn-wrapper' role='button' onClick={handleFavorite} >
        <Heart style={favorites.find(drink => drink.id === id) && {fill: '#fb6100'}} />
      </div>
      <button className='details-btn' onClick={handleDetails}>See Details</button>
    </div>
  )
}