import './card-container.scss';
import { Card } from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getInitialResults } from '../../actions/resultActions';

export const CardContainer = () => {
  const dispatch = useDispatch();
  const { results } = useSelector(state => state.results);

  useEffect(() => {
    dispatch(getInitialResults());
  }, []);

  return (
    <section className='card-container'>
      {results ?
      results.map(drink => <Card key={drink.idDrink} title={drink.strDrink} image={drink.strDrinkThumb} />) : <></>
      }
    </section>
  )
}