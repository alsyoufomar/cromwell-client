import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authAction } from '../store/authSlice';
import '../styles/register.css';

const Register = () => {
  const host = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const regCredentials = useSelector((state) => state.auth.register);

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch(
      authAction.setRegCredentials({ ...regCredentials, [name]: value })
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(regCredentials),
    };

    fetch(`${host}/user/register`, options)
      .then((res) => {
        if (!res.ok && res.error) {
          console.log(res.error);
          throw Error('could not fetch the data from the source');
        }
        return res.json();
      })
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        dispatch(
          authAction.setLoginCredentials({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPass: '',
          })
        );
        navigate('/landing');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='register'>
      <div className='reg__main-container'>
        <div className='reg__image-container'>
          <h3>Make it special...</h3>
        </div>
        <form onSubmit={handleSubmit} className='reg__form'>
          <div className='reg__fullname'>
            <div className='reg__input-container'>
              <label htmlFor='firstname'>First Name</label>
              <br />
              <input
                type='text'
                placeholder='First Name'
                onChange={handleChange}
                name='firstname'
                value={regCredentials.firstname}
                autoComplete='off'
                id='firstname'
              />
            </div>
            <div className='reg__input-container'>
              <label htmlFor='lastname'>Last Name</label>
              <br />
              <input
                type='text'
                placeholder='Last Name'
                onChange={handleChange}
                name='lastname'
                value={regCredentials.lastname}
                autoComplete='off'
                id='lastname'
              />
            </div>
          </div>

          <div className='reg__input-container'>
            <label htmlFor='regEmail'>Email</label>
            <br />
            <input
              type='email'
              placeholder='Email'
              onChange={handleChange}
              name='email'
              value={regCredentials.email}
              autoComplete='off'
              id='regEmail'
            />
          </div>

          <div className='reg__input-container'>
            <label htmlFor='regPassword'>Password</label>
            <br />
            <input
              type='password'
              placeholder='Password'
              onChange={handleChange}
              name='password'
              value={regCredentials.password}
              autoComplete='off'
              id='regPassword'
            />
          </div>

          <div className='reg__input-container'>
            <label htmlFor='confirm-pass'>Confirm Password</label>
            <br />
            <input
              type='password'
              placeholder='Confirm Password'
              onChange={handleChange}
              name='confirmPass'
              value={regCredentials.confirmPass}
              autoComplete='off'
              id='confirm-pass'
            />
          </div>

          <button className='submit'>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
