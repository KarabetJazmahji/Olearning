import React from 'react';
import img from './logo.png';

const logo = () => {      // Functional component for displaying the platform logo 
    return(
        <img className="logo" src={img} alt="Platform Logo"/>
    )
}


export default logo;