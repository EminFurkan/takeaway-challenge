import './card-container.scss';
import { Card } from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getInitialResults } from '../../actions/resultActions';


export const CardContainer = () => {
  const dispatch = useDispatch();
  const results = useSelector(state => state.results);
  const filters = useSelector(state => state.filters);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    dispatch(getInitialResults());
  }, []);

  useEffect(() => {
    handleResults();
  }, [filters.activeFilters, results]);

  const handleResults = () => {
    const { categories, glasses, ingredients } = filters.activeFilters;
    setFilteredResults([...results]);

    if (categories || glasses) {
      setFilteredResults(
        filteredResults.filter(result => {
          return (result.strCategory === categories) ||
            (result.strGlass === glasses);
        })
      )
    }

    if (ingredients.length){
      const ingredientFilterAppliedResults = [];

      for (let i = 0; i < filteredResults.length; i++){
        for (let j = 0; j < ingredients.length; j++){
          if (Object.values(filteredResults[i]).includes(ingredients[j])){
            ingredientFilterAppliedResults.push(filteredResults[i]);
          }
        }
      }
      setFilteredResults(ingredientFilterAppliedResults);
    }
  }

  return (
    <section className='card-container'>
      {results ?
      filteredResults.length ?
        filteredResults.map(drink => <Card key={drink.idDrink} id={drink.idDrink} title={drink.strDrink} thumb={drink.strDrinkThumb} instructions={drink.strInstructions} tags={drink.strTags} />)
        : <div className='no-results'>Nothing to see here... 😔</div>
        : <></>
      }
    </section>
  )
}