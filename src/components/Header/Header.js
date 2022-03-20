import './header.scss';
import { Logo } from '../../assets/Logo';
import { SearchBar } from './SearchBar/SearchBar';
import { FavoritesCart } from './FavoritesCart/FavoritesCart';

export const Header = () => {
  return (
    <nav>
      <Logo />
      <SearchBar />
      <FavoritesCart />
    </nav>
  )
}