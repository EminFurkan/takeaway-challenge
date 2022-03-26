import './details-modal.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setModalVisibility } from '../../actions/modalActions';

export const DetailsModal = () => {
  const modal = useSelector(state => state.modal);
  const dispatch = useDispatch();
  const { thumb, instructions, title } = modal.data;

  return (
    <section className="modal-container">
      <div className="modal-wrapper">
        <div className='modal-title'>{title}</div>
        <div className='modal-content'>
          <img src={thumb} alt="" />
          <span className='instructions'>{instructions}</span>
        </div>
        <button onClick={() => dispatch(setModalVisibility(false))}>Close</button>
      </div>
    </section>
  )
}