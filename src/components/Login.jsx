import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { popupActions } from '../store/popupSlice';
import { authAction } from '../store/authSlice';
import Popup from './Popup';
import '../styles/login.css';

const Login = () => {
  const host = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isPoped } = useSelector((state) => state.popup);
  const loginCredentials = useSelector((state) => state.auth.login);

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch(
      authAction.setLoginCredentials({ ...loginCredentials, [name]: value })
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginCredentials),
    };

    fetch(`${host}/user/login`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          dispatch(popupActions.setErrMessage(res.error));
          dispatch(popupActions.throwErr());
        } else {
          localStorage.setItem('jwt', res.token);
          dispatch(authAction.setLoginCredentials({ email: '', password: '' }));
          navigate('/landing');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='login'>
      <div className='login__main-container'>
        {isPoped && <Popup />}
        <div className='login__image-container'>
          <h3>Make it special...</h3>
        </div>
        <form onSubmit={handleSubmit} className='login__form'>
          <div className='login__input-container'>
            <label htmlFor='email'>Email</label>
            <br />
            <input
              type='email'
              placeholder='Email'
              onChange={handleChange}
              name='email'
              value={loginCredentials.email}
              autoComplete='off'
              id='email'
            />
          </div>

          <div className='login__input-container'>
            <label htmlFor='password'>Password</label>
            <br />
            <input
              type='password'
              placeholder='Password'
              onChange={handleChange}
              name='password'
              value={loginCredentials.password}
              autoComplete='off'
              id='password'
            />
          </div>

          <button className='submit'>submit</button>
          <Link to='/register'>Register</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
