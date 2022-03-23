import './option.scss';
import { Checkmark } from '../../../../assets/Checkmark';
import { useState, useCallback, memo, useEffect } from 'react';

const Option = ({ text, filterBy, selectedFilters, setSelectedFilters }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log('...', selectedFilters);
  }, [selectedFilters])

  const handleCheckedOption = () => {
    setIsChecked(prev => !prev);
    setSelectedFilters(prev => ({
      ...prev,
      [filterBy.toLowerCase()]: text
    }));
  }

  return (
    <div className="option">
      <span className={`checkbox ${isChecked && 'checked'}`} onClick={handleCheckedOption}>
        <Checkmark />
      </span>
      {text}
    </div>
  )
}

export default Option;