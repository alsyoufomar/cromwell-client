import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';

const Register = () => {
  const emptyRegister = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPass: '',
  };
  const [regData, setRegData] = useState(emptyRegister);
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setRegData((prevRegData) => {
      return {
        ...prevRegData,
        [name]: value,
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/landing');
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
                value={regData.firstname}
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
                value={regData.lastname}
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
              value={regData.email}
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
              value={regData.password}
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
              value={regData.confirmPass}
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
