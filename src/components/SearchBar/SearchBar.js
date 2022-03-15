import { SearchIcon } from '../../assets/SearchIcon';
import './search-bar.scss';

export const SearchBar = () => {
  return (
    <div className='search-box'>
      <SearchIcon />
      <input type="text" placeholder="Search for a cocktail..." />
    </div>
  )
}