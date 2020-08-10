import React from 'react';
import homeimg from './smartphone.png';


const homeimage = () =>{     // Functional component for displaying Landing Page image 
    return(
        <img className="home-image"src={homeimg} alt="Mobile" />
    )
}

export default homeimage;