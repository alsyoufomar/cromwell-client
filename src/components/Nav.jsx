import '../styles/nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const handleLogout = () => {
    localStorage.removeItem('jwt');
  };
  return (
    <div className='nav'>
      <ul className='nav__pages'>
        <li className='nav__logo--item'>
          <Link to='/home'>
            <i className='fa-solid fa-burst logo'></i>
          </Link>
        </li>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/forum'>Forum</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <div onClick={handleLogout} className='nav__logout'>
        <Link to='/'>
          <i className='fa-solid fa-right-from-bracket'></i>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
