import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/heroes/Hero';
import Home from './components/pages/Home';
import Heroespage from './components/pages/Heroespage';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='container-fluid px-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='heroes' element={<Heroespage />} />
            <Route path='hero' element={<Hero />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
