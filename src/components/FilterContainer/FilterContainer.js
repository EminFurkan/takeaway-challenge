import { Filter } from "./Filter/Filter";
import './filter-container.scss';
import { useDispatch, useSelector } from "react-redux";
import { getFilterOptions, setActiveFilters } from "../../actions/filterActions";
import { useEffect, useState } from "react";

export const FilterContainer = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    ingredients: [],
    glasses: null,
    categories: null
  });
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  useEffect(() => {
    dispatch(setActiveFilters(selectedFilters));
  }, [selectedFilters])

  useEffect(() => {
    dispatch(getFilterOptions());
  }, []);

  return (
    <section className="filter-container">
      <Filter filterBy={'Ingredients'}  data={filters.filterOptions.ingredients} setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} />
      <Filter filterBy={'Categories'} data={filters.filterOptions.categories} setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} />
      <Filter filterBy={'Glasses'} data={filters.filterOptions.glasses} setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} />
    </section>
  );
}