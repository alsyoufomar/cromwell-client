import { useDispatch } from 'react-redux';
import { popupActions } from '../store/popupSlice';

const Popup = ({ errMessage }) => {
  const dispatch = useDispatch();

  const handleErr = () => {
    dispatch(popupActions.fixErr());
  };

  return (
    <div className='err__popup'>
      <div onClick={handleErr} className='err__exit'>
        <i className='fa-solid fa-xmark'></i>
      </div>
      <div className='err__warning-sign'>
        <i className='err__triangle fa-solid fa-triangle-exclamation'></i>
      </div>
      <div className='err__message'>{errMessage}</div>
    </div>
  );
};

export default Popup;
