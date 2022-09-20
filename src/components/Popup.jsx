import { useDispatch, useSelector } from 'react-redux';
import { popupActions } from '../store/popupSlice';

const Popup = () => {
  const dispatch = useDispatch();
  const errMessage = useSelector((state) => state.popup.errMessage);

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
