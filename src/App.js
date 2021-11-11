import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/heroes/Hero';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Heroespage from './components/pages/Heroespage';
import Game from './components/pages/Game';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='container-fluid px-5 main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='marvel' element={<Heroespage filter='All' publisher="Marvel Comics" title="Marvel Comics"/>} />
            <Route path='dc' element={<Heroespage filter='All' publisher="DC Comics" title="DC Comics"/>}/>
            <Route path='heroes' element={<Heroespage filter='All' publisher="" title="All DC & Marvel Super Heroes"/>} />
            <Route path='hero/:id' element={<Hero />} />
            <Route path='game' element={<Game />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};//render={ props => <Home {...props} />}

export default App;
