import './filter.scss';
import Option from './Option/Option';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveFilters } from '../../../actions/filterActions';

export const Filter = ({ filterBy, data }) => {
  const [query, setQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    ingredients: [],
    glasses: null,
    categories: null
  });
  const dispatch = useDispatch();

  const optionKeyMap = {
    Ingredients: 'strIngredient1',
    Categories: 'strCategory',
    Glasses: 'strGlass'
  }

  useEffect(() => {
    // dispatch(setActiveFilters(selectedFilters));
    console.log(selectedFilters)
  }, [selectedFilters])

  const handleSearch = () => {
    if (query.length) {
      return data.filter(option => option[optionKeyMap[filterBy]].toLowerCase().includes(query.toLowerCase()));
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
            handleSearch().map((option, index) => <Option key={index} text={option[optionKeyMap[filterBy]]} setSelectedFilters={setSelectedFilters} filterBy={filterBy} selectedFilters={selectedFilters} />)
          }
        </div>
      </div>
    </>
  )
}