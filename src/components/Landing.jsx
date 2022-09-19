import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing.css';

const Landing = () => {
  const [userData, setUserData] = useState({});
  const host = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
    };
    fetch(`${host}/user/info`, options)
      .then((res) => {
        if (!res.ok && res.error)
          throw Error('could not fetch the data from the source');
        return res.json();
      })
      .then((res) => {
        setUserData(res.user);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!userData) return <></>;
  return (
    <div className='landing'>
      <div className='landing__hero-container'>
        <h1>Here is your Looovely details!</h1>
        <div className='landing__details'>
          <h2>
            {userData.firstname} {userData.lastname}
          </h2>
          <h2>{userData.email}</h2>
        </div>
        <Link to='/home'>
          <button className='landing__btn'>Continue to Home!</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
