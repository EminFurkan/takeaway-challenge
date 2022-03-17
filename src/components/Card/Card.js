import './card.scss';
import { Heart } from '../../assets/Heart';

export const Card = () => {
  return (
    <div className='card'>
      <img src={'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg'} alt="" />
      <div className='title'>{'Drink Name'}</div>
      <div className='favorite-btn-wrapper'>
        <Heart />
      </div>
      <button className='details-btn'>See Details</button>
    </div>
  )
}