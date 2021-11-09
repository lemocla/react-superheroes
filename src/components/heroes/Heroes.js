import React, {Fragment} from 'react';
import HeroItem from './HeroItem';
import '../../App.css';

/*
- Create an array of numbers  (listId) up to 25 (can be changed) as id
- For each id in the list of numbers --> render component HeroItem and pass the id
*/

const Heroes = () => {

    // Array of numbers ID
    const listId = Array.from({length:25},(v,k)=>k+1)
    console.log(listId);
    
    // For each number id --> render component
    const listItems = listId.map(id=> <HeroItem key={id} id={id} />);
   
    return (

       <Fragment className="container">
      <div className="row flex justify-content-center">{listItems}</div>
       </Fragment>
        ) 
    }

export default Heroes