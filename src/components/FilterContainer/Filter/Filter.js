import './filter.scss';
import { Option } from './Option/Option';
import { useState } from 'react';

export const Filter = ({ filterBy, data }) => {
  const [query, setQuery] = useState('');

  const optionKeyMap = {
    Ingredients: 'strIngredient1',
    Categories: 'strCategory',
    Glasses: 'strGlass'
  }

  const handleSearch = () => {
    if (query.length){
      return data.filter(option => option[optionKeyMap[filterBy]].includes(query));
    }
    return data;
  }

  return (
    <>
      <div className="filter-title">{filterBy}</div>
      <div className="filter-box">
        <input type="text" placeholder={`Search ${filterBy}`} onChange={(e) => setQuery(e.target.value.trim())} />
        <div className="filter-options">
          {
            handleSearch().map((option, index) => <Option key={index} text={option[optionKeyMap[filterBy]]} />)
          }
        </div>
      </div>
    </>
  )
}