import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/heroes/Hero';
import Home from './components/pages/Home';
import Heroes from './components/heroes/Heroes';
import Footer from './components/layout/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='container-fluid px-5 main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='marvel' element={<Heroes publisher="Marvel Comics" title="Marvel Comics"/>} />
            <Route path='dc' element={<Heroes publisher="DC Comics" title="DC Comics"/>}/>
            <Route path='heroes' element={<Heroes publisher="" title="All DC & Marvel Super Heroes"/>} />
            <Route path='hero/:id' element={<Hero />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};//render={ props => <Home {...props} />}

export default App;
