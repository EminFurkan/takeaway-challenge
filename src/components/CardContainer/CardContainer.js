import './card-container.scss';
import { Card } from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getInitialResults } from '../../actions/resultActions';


export const CardContainer = () => {
  const dispatch = useDispatch();
  const results = useSelector(state => state.results);
  const filters = useSelector(state => state.filters);

  const filteredResults = () => {
    const { categories, glasses, ingredients } = filters.activeFilters;

    const filteredResults = results.filter(result => {
      return (categories && result.strCategory === categories) ||
        (glasses && result.strGlass === glasses);
    });

    if (filteredResults.length) {
      return filteredResults;
    } else {
      return results;
    }
  }

  useEffect(() => {
    dispatch(getInitialResults());
  }, []);

  return (
    <section className='card-container'>
      {results ?
        filteredResults().map(drink => <Card key={drink.idDrink} id={drink.idDrink} title={drink.strDrink} thumb={drink.strDrinkThumb} instructions={drink.strInstructions} tags={drink.strTags} />) : <></>
      }
    </section>
  )
}