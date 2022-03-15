import './header.scss';
import { Logo } from '../../assets/Logo';
import { SearchBar } from '../SearchBar/SearchBar';

export const Header = () => {
  return (
    <nav>
      <Logo />
      <SearchBar />
      <div className='favorites'>
        <span className='counter'>{0}</span>
        Favorites
      </div>
    </nav>
  )
}