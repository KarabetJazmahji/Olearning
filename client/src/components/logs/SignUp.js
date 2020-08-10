import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Footer from "../ui/Footer";
import Logo from '../assets/logo/logo';
import './logs.css'
import axios from 'axios';

class Signup extends Component{
    state = {
        success: false,
        error: false
    }
    submitForm (e) {                                                             
        e.preventDefault();
        const user = {
            username: e.target.username.value,
            firstname: e.target.fname.value,
            lastname: e.target.lname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            usertype: e.target.type.value
        } 
        
        
        axios.post('/api/register',user)
        .then(res =>{
            this.setState({success: true, error:false});
        })
        .catch(err =>{
            this.setState({error: true})
        })
    }

    render(){
        let Errors = '';
        if(this.state.error){
            Errors = <p style={{textAlign:'center', color: 'red'}}>Sorry an error occured please try again</p>
        }
        else{
            Errors = '';
        }

        let Results = '';
        if(this.state.success){
            Results = <p style={{textAlign:'center', color: 'green'}}>Congrats!! You have registered, you can LogIn now</p>
        }
        else{
            Results = '';
        }
        return (
            <div>
                <Link to={"/"}><Logo/></Link>
                <h1>Sign Up</h1> 
                {Errors}
                {Results}   

            <form style={{margin: "50px auto"}} onSubmit={this.submitForm.bind(this)}>  {/* Form element for user information inputs */}
                <div className="input-container">
                    <label>Username</label>
                    <input type="text"
                           className="form-control"
                           name="username" 
                           placeholder="Username" />
                </div>
                
                
                <div className="input-container">
                    <label>First name</label>
                    <input type="text"
                           name="fname"
                           className="form-control" 
                           placeholder="First name" />
                </div>

                <div className="input-container">
                    <label>Last name</label>
                    <input type="text"
                           className="form-control"
                           name="lname" 
                           placeholder="Last name" />
                </div>

                <div className="input-container">
                    <label>Email address</label>
                    <input type="email" 
                           className="form-control"
                           name="email" 
                           placeholder="Enter email" />
                </div>

                <div className="input-container">
                    <label>Password</label>
                    <input type="password"
                           className="form-control"
                           name="password" 
                           placeholder="Enter password" />
                </div>

                <div  style={{display: "flex"}} className="input-container">
                <input type="radio" value="1" name="type" />&nbsp; Instructor &nbsp;&nbsp;
                <br/>
                <input type="radio" value="0" name="type" />&nbsp; Student
                </div>

                 {/* Form submit button and already registered link, that redirects to login page */}
                <button type="submit" className="submit">Sign Up</button>
                <p className="input-container">Already registered &nbsp;<Link to="/sign-in">Sign in?</Link></p>
                
            </form>

            <Footer />

            </div>
        );

    }     
        
}


export default Signup;