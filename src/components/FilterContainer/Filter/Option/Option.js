import './option.scss';
import { Checkmark } from '../../../../assets/Checkmark';
import { useState } from 'react';

const Option = ({ text, filterBy, setSelectedFilters, selectedFilters }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckedOption = () => {
    setIsChecked(prev => !prev);

    if (filterBy === 'Ingredients'){
      if(selectedFilters.ingredients.includes(text)){
        setSelectedFilters(prev => ({
          ...prev,
          ingredients: prev.ingredients.filter(ingredient => ingredient !== text)
        }));
        return;
      }

      setSelectedFilters(prev => ({...prev, ingredients: [...prev.ingredients, text]}));        
    } else {
      if(selectedFilters[filterBy.toLowerCase()] === text){
        setSelectedFilters(prev => ({
          ...prev,
          [filterBy.toLowerCase()]: null
        }));
        return;
      }
      setSelectedFilters(prev => ({
        ...prev,
        [filterBy.toLowerCase()]: text
      }));
    }
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