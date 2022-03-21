import { CardContainer } from "../CardContainer/CardContainer";
import { FilterContainer } from "../FilterContainer/FilterContainer";
import './dashboard.scss';

export const Dashboard = () => {
  return (
    <main>
      <FilterContainer />
      <CardContainer />
    </main>
  )
}