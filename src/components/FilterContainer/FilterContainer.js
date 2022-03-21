import { Filter } from "./Filter/Filter";
import './filter-container.scss';
import { useDispatch, useSelector } from "react-redux";
import { getFilterOptions } from "../../actions/filterActions";
import { useEffect } from "react";

export const FilterContainer = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  useEffect(() => {
    dispatch(getFilterOptions());
  }, []);

  return (
    <section className="filter-container">
      <Filter filterBy={'Ingredients'}  data={filters.filterOptions.ingredients} />
      <Filter filterBy={'Categories'} data={filters.filterOptions.categories} />
      <Filter filterBy={'Glasses'} data={filters.filterOptions.glasses} />
    </section>
  );
}