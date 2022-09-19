import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const emptyLogin = { email: '', password: '' };
  const [loginData, setLoginData] = useState(emptyLogin);
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginData((prevLoginData) => {
      return {
        ...prevLoginData,
        [name]: value,
      };
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/landing');
  };
  return (
    <div className='login'>
      <div className='login'>
        <div className='login__main-container'>
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
                value={loginData.email}
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
                value={loginData.password}
                autoComplete='off'
                id='password'
              />
            </div>

            <button className='submit'>submit</button>
            <Link to='/register'>Register</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
