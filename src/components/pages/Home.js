import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


/* 
Render two cards for Marvel & DC Comics Super Heroes 
To do:
   - pass a "marvel" or "dc comics" to only display relevant publishers
   state: { message: 'hello, im a passed message!' }
   Link to={{ pathname: '/heroes', state: {publisher: {marvel} }}}
*/

const Home = () => {
  
  
  
  //{{ pathname: '/heroes', state: {publisher: 'Marvel Comics'}}}

  return (
    <Fragment>
      <div className='row d-flex justify-content-center align-content-center mt-5 p0'>
      <h1 className="text-center mb-4 mt-3">Meet the super heroes</h1>
      <p className="text-center fs-5">Discover all there is to know about your favourite super heroes and more!</p>
      <p className='text-center fs-5 mb-5'>Watch this space for more games to come...</p>
      <Link to='/marvel' className='card card-home-width shadow p0 mx-2'>
          <img
            className='card-img-top img-card-home radius-top'
            src='https://i.guim.co.uk/img/media/e191a8c89021d04e57d54dadda6a12b79a8c86ea/0_26_800_480/master/800.jpg?width=1200&quality=85&auto=format&fit=max&s=2368d242e91f23f896d63fb5bfaaf1b2'
            alt='marvel heroes'
          />
          <div className='card-body bg-black py-4 radius-bottom'>
            <h5 className='card-title text-center text-white'>MARVEL</h5>
          </div>
        </Link>

        <Link to='/dc' className='card card-home-width shadow mx-2 p0'>
          <img
            className='card-img-top img-card-home radius-top'
            src='https://www.dccomics.com/sites/default/files/DCVol2Marquee_57466713405381.60938022.jpg'
            alt='DC heroes'
          />
          <div className='card-body bg-black py-4 radius-bottom'>
            <h5 className='card-title text-center text-white'>DC COMICS</h5>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
