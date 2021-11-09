import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/heroes/Hero';
import Home from './components/pages/Home';
import Heroespage from './components/pages/Heroespage';
import './App.css';


const App = () => {
  return (
    <div>

      <div className="container-fluid px-5">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="heroes" element={<Heroespage/>}/>
        <Route path="hero" element={<Hero/>} />
      </Routes>
    </BrowserRouter>
      </div>
    </div>
    
  );
}

export default App;
