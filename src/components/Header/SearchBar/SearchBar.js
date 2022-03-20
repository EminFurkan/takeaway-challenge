import { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux'

import { getResults } from '../../../actions/resultActions'; 
import { SearchIcon } from '../../../assets/SearchIcon';
import './search-bar.scss';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value.trim().length > 2){
      setQuery(e.target.value);
    }
  }

  const processQuery = useCallback(debounce(() => dispatch(getResults(query)), 500), [query]);

  return (
    <div className='search-box'>
      <span role='button' onClick={processQuery}>
        <SearchIcon />
      </span>
      <input type="text" placeholder="Search for a cocktail..." onChange={handleChange} onKeyDown={e => e.key === 'Enter' && processQuery()} />
    </div>
  )
}