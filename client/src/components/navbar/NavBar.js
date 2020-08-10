import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/logo';
import './navbar.css';


const navbar = (props) =>{    //Functional navigation component
  if(!props.logged){          //It shows different content based on tha props value it gets 
    return (                   
      <div className="nav">
        <Logo/>
        <div className="logs-container">
            <Link className="logs" to={"/sign-up"}>Sign Up</Link>
            <Link className="logs" id="m" to={"/sign-in"}>Login</Link>
        </div>
    </div>
    )
  }
  else{
    return(
      <div className="nav">
        <Logo/>
        <div className="logs-container">
            <p style={{display: "inline-block",fontSize: "1.4rem"}}>{props.username}</p>
            <Link className="logs" id="m" to={"/sign-in"}>Logout</Link>
        </div>
    </div>
    )
  }

}

export default navbar;
