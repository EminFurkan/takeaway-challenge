import './card.scss';
import { Heart } from '../../assets/Heart';
import { addToFavorites, removeFromFavorites } from '../../actions/favoriteActions';
import { useDispatch, useSelector } from 'react-redux';

export const Card = ({ id, title, image }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const handleFavorite = () => {
    const foundFavorite = favorites.find(favorite => favorite.id === id);
    if (foundFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites({ id, title, image }));
    }
  }

  return (
    <div className='card'>
      <img src={image} alt="" />
      <div className='title'>{title}</div>
      <div className='favorite-btn-wrapper' role='button' onClick={handleFavorite} >
        <Heart style={favorites.find(drink => drink.id === id) && {fill: '#fb6100'}} />
      </div>
      <button className='details-btn'>See Details</button>
    </div>
  )
}