import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-expand-lg navbar-dark bg-black py-3'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand text-uppercase ml-3'>
          Superheroes
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link' aria-current='page'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='Heroes' className='nav-link'>
                All heroes
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='marvel' className='nav-link'>
                Marvel
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='dc' className='nav-link'>
                DC
              </Link>
            </li>                        
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Games
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
