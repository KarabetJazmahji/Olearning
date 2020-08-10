import React from 'react';
import './footer.css';
import Logo from '../assets/logo/logo';

const footer = () =>{  //Functional based component just to display the footer content
   return (
        <div className="footer-container">
            <div style={{float: "left"}}>
                <Logo />
            </div>  
           <div className="footer-description">
               <p>&copy; 2020, Online Learning Platform Created by Talented Developers </p>
           </div>  
        </div>  
   )
}

export default footer;