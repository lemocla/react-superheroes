import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/heroes/Hero';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Game from './components/pages/Game';
import Heroes from './components/heroes/Heroes'

import HeroesState from './components/context/heroes/HeroesState';

import './App.css';

const App = () => {

  return (
    <div>
    <HeroesState>
      <BrowserRouter>
        <Header />
        <div className='container-fluid px-5 main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='marvel' element={<Heroes  publisher="Marvel Comics" title="Marvel Comics"/>} />
            <Route path='dc' element={<Heroes publisher='DC Comics' title="DC Comics"/>}/>
            <Route path='heroes' element={<Heroes  publisher="" title="All DC & Marvel"/>} />
            <Route path='hero/:id' element={<Hero />} />
            <Route path='game' element={<Game />} />
            <Route path='search' element={<Heroes publisher="" title="Search Results"/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </HeroesState>
    </div>
  );
};

export default App;
