import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Search from './components/heroes/Search';
import Alert from './components/layout/Alert';
import Hero from './components/heroes/Hero';
import Home from './components/pages/Home';
import Heroespage from './components/pages/Heroespage';
import './App.css';
import axios from 'axios';

const App = () => {
  const [hero, setHero] = useState({});
  const [alert, setAlert] = useState(null);

  // Search for a single Superhero
  const searchHeroes = async (text) => {
    const res = await axios.get(
      'https://akabab.github.io/superhero-api/api/all.json'
    );

    setHero(
      res.data.filter((record) =>
        record.name.toLowerCase().includes(text.toLowerCase())
      )
    );
    console.log(setHero);
  };

  // Set an Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Search searchHeroes={searchHeroes} showAlert={showAlert} />
        <div className='container-fluid px-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='heroes' element={<Heroespage />} />
            <Route path='hero/:id' element={<Hero />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
