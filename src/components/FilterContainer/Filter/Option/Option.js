import './option.scss';
import { Checkmark } from '../../../../assets/Checkmark';

export const Option = ({ text, filterBy, setSelectedFilters, selectedFilters }) => {

  const handleCheckedOption = (e) => {
    const checkedOptionElement = [...document.getElementsByClassName("checked")];
    console.log(checkedOptionElement);
    checkedOptionElement[0]?.classList.remove("checked");

    const currentCheckedOption = e.currentTarget;
    console.log(currentCheckedOption);
    currentCheckedOption.classList.add('checked');

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