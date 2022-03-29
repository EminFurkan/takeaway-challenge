import './option.scss';
import { Checkmark } from '../../../../assets/Checkmark';

export const Option = ({ text, filterBy, setSelectedFilters, selectedFilters }) => {

  const handleCheckedOption = (e) => {
    const currentCheckedOption = e.currentTarget;

    if (currentCheckedOption.classList.value.includes('checked')){
      currentCheckedOption.classList.remove('checked');
    } else {
      currentCheckedOption.classList.add('checked');
    }

    // if (filterBy !== 'Ingredients'){
    //   const checkedOptionElements = [...document.getElementsByClassName("checked")];
    //   checkedOptionElements[0]?.classList.remove("checked");
    // }

    if (filterBy === 'Ingredients') {
      if (selectedFilters.ingredients.includes(text)) {
        setSelectedFilters(prev => ({
          ...prev,
          ingredients: prev.ingredients.filter(ingredient => ingredient !== text)
        }));
        return;
      }

      setSelectedFilters(prev => ({ ...prev, ingredients: [...prev.ingredients, text] }));
    } else {
      if (selectedFilters[filterBy.toLowerCase()] === text) {
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
      <span className='checkbox' onClick={handleCheckedOption}>
        <Checkmark />
      </span>
      {text}
    </div>
  )
}