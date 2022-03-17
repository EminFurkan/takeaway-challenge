import { SearchIcon } from '../../assets/SearchIcon';
import './search-bar.scss';

export const SearchBar = () => {
  return (
    <div className='search-box'>
      <span role='button'>
        <SearchIcon />
      </span>
      <input type="text" placeholder="Search for a cocktail..." />
    </div>
  )
}