import './card.scss';
import { Heart } from '../../assets/Heart';

export const Card = ({ title, image }) => {
  return (
    <div className='card'>
      <img src={image} alt="" />
      <div className='title'>{title}</div>
      <div className='favorite-btn-wrapper'>
        <Heart />
      </div>
      <button className='details-btn'>See Details</button>
    </div>
  )
}