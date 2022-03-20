import { useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../../../actions/favoriteActions';
import './favorite-item.scss';

export const FavoriteItem = ({ id, title, image }) => {
  const dispatch = useDispatch(removeFromFavorites());

  return (
    <div className='favorite-item'>
      <img src={image} height={40} width={40} alt="" />
      <span className='title'>{title}</span>
      <button className='remove-btn' onClick={() => dispatch(removeFromFavorites(id))}>&#10005;</button>
    </div>
  )
}