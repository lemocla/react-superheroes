  import React, {Fragment} from 'react'
  
  const Game = () => {

  return (
    <Fragment>
      <div className='row d-flex justify-content-center align-content-center mt-5 p0'>
      <h1 className="text-center mb-4 mt-3">Games</h1>
      <p className="text-center fs-3">Coming soon so watch this space!</p>
    
      <div className='card col-12 col-md-3 shadow p0 mx-2'>
          <img
            className='card-img-top img-card-home radius-top'
            src='https://i.guim.co.uk/img/media/e191a8c89021d04e57d54dadda6a12b79a8c86ea/0_26_800_480/master/800.jpg?width=1200&quality=85&auto=format&fit=max&s=2368d242e91f23f896d63fb5bfaaf1b2'
            alt='Card image cap'
          />
          <div className='card-body bg-black py-4 radius-bottom'>
            <h5 className='card-title text-center text-white'>who is who?</h5>
          </div>
        </div>

        <div className='card col-12 col-md-3 shadow mx-2 p0'>
          <img
            className='card-img-top img-card-home radius-top'
            src='https://ichef.bbci.co.uk/news/976/cpsprodpb/E40C/production/_85608385_avengers.jpg'
            alt='Card image cap'
          />
          <div className='card-body bg-black py-4 radius-bottom'>
            <h5 className='card-title text-center text-white'>Battles of Heroes</h5>
          </div>
        </div>

        <div className='card col-12 col-md-3 shadow mx-2 p0'>
          <img
            className='card-img-top img-card-home radius-top'
            src='https://www.dccomics.com/sites/default/files/DCVol2Marquee_57466713405381.60938022.jpg'
            alt='Card image cap'
          />
          <div className='card-body bg-black py-4 radius-bottom'>
            <h5 className='card-title text-center text-white'>Quizz</h5>
          </div>
        </div>

      </div>

      
    </Fragment>
  );
};

export default Game
  
  
