import React, { Fragment } from 'react'
import Heroes from '../heroes/Heroes'

/* Render all heroes using Heroes component */

const Heroespage = () => {
    return (
        <Fragment>
            <h1>Heroes</h1>
            <Heroes/> 
        </Fragment>
    )
}

export default Heroespage