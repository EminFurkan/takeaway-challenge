import './favorites-cart.scss';
import { useEffect, useState } from 'react';
import { FavoriteItem } from './FavoriteItem/FavoriteItem';
import { useSelector } from 'react-redux';

export const FavoritesCart = () => {
  const [isFavoritesVisible, setIsFavoritesVisible] = useState(false);
  const favorites = useSelector(state => state.favorites);

  const MODAL_VISIBILITY_CONDITION = isFavoritesVisible && favorites.length > 0;

  useEffect(() => {
    if (favorites.length === 0) {
      setIsFavoritesVisible(false);
    }
  }, [favorites]);

  return (
    <div className={`favorites ${MODAL_VISIBILITY_CONDITION ? 'active' : ''}`}>
      <span className='counter'>{favorites.length}</span>
      <button className='favorites-btn' onClick={() => favorites.length > 0 && setIsFavoritesVisible(prev => !prev)}>Favorites</button>
      {
        MODAL_VISIBILITY_CONDITION &&
        <>
          <span className='white-space'></span>
          <div className='favorites-list'>
            {
              favorites.map(favorite =>
                <FavoriteItem key={favorite.id} id={favorite.id} title={favorite.title} image={favorite.image} />
              )
            }
          </div>
        </>
      }
    </div>
  )
}