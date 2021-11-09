import React, {useEffect, useState, Fragment,  } from 'react';
import Api from '../Api/Api';
import '../../App.css';
import { useParams } from 'react-router';
const Hero = ({match}) => {

      // API Call
  const [heroData, setHeroData] = useState([]);
  const [ready, setReady] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await Api.get(`/${id}`);
      
      setHeroData(data);
      setReady(true);
      
    };
    fetchApi();
    console.log("api")
    console.log(id)
    console.log(heroData)
  }, [id]);

    return ready ? (
       <Fragment>
        <h1>Hero page {heroData.name}</h1>
        </Fragment>
    ) : null
}

export default Hero