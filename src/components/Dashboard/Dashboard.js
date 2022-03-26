import { CardContainer } from "../CardContainer/CardContainer";
import { FilterContainer } from "../FilterContainer/FilterContainer";
import './dashboard.scss';
import { DetailsModal } from '../DetailsModal/DetailsModal';
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const modal = useSelector(state => state.modal);

  return (
    <main>
      <FilterContainer />
      <CardContainer />
      {
        modal.visibility ?
        <DetailsModal /> :
        <></>
      }
    </main>
  )
}