import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Products from './components/Products';
import Forum from './components/Forum';
import About from './components/About';

function App() {
  const navigate = useNavigate();
  let token = localStorage.getItem('jwt');
  useEffect(() => {
    if (token === null) navigate('/');
    else navigate('/home');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='App'>
      {token && <Nav />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/products' element={<Products />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
