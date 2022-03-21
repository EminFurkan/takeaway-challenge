import './option.scss';
import { Checkmark } from '../../../../assets/Checkmark';

export const Option = ({ text }) => {
  return (
    <div className="option">
      <span className='checkbox checked'>
        <Checkmark />
      </span>
      {text}
    </div>
  )
}