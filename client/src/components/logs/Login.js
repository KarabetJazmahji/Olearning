import React, { Component } from "react";
import { withRouter , Link } from 'react-router-dom';
import Footer from "../ui/Footer";
import Logo from '../assets/logo/logo';
import './logs.css'
import axios from 'axios';


class Login extends Component {      //class based component for login page
    state = {                                   //Its state is set to null as a intitial value for username
        username: null,
        notExisted:false,
        passwordWrong:false
        };        

    submitForm (e) {                                                             //Handles the form submit, if the email is one of the admins' eamils
        e.preventDefault();   
                                                                                //redirect to the admin page unless to user page
        const user = {
            email: e.target.email.value,
            password: e.target.password.value,
        } 
                                                                                 

        axios.post('/api/login',user)
        .then(res =>{
            if(res.data.user.usertype == 2){
                this.props.history.push('/admin', {email: res.data.user.email});
            }
            else{
                this.props.history.push('/successfullLoged', {email: res.data.user.email, userID: res.data.user._id});
            } 
        })
        .catch(err =>{
            if(err.message === "Request failed with status code 420"){
                this.setState({notExisted: true})
            }

            if(err.message === "Request failed with status code 421"){
                this.setState({passwordWrong: true})
            }
        })
    }
 
    render() {
        let userNotExist = '';
        if(this.state.notExisted){
            userNotExist = <p style={{textAlign:'center', color: 'red'}}>Sorry this account does not exist please try again</p>
        }
        else{
            userNotExist = '';
        }

        let passwordWrong = '';
        if(this.state.passwordWrong){
            passwordWrong = <p style={{textAlign:'center', color: 'red'}}>Password is incorrect please try again</p>
        }
        else{
            passwordWrong = '';
        }
        return (
            <div>
                <Link to={"/"}><Logo/></Link>
                <h1>Sign In</h1>
                <form onSubmit={this.submitForm.bind(this)}>
                <div className="input-container">
                    <label>Email address</label>
                    {/* Input element for the email */}
                    <input                                          
                        type="email" 
                        className="form-control"
                        name="email"
                        placeholder="Enter Your Email"
                        />
                        {userNotExist}
                </div>

                <div className="input-container">
                    <label>Password</label>
                    {/* Input element for the password */}
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password"
                        placeholder="Enter Your Password" 
                        />
                        {passwordWrong}
                </div>
                    
                    {/* Form submit button and reset password link, that redirects to reset password page */}
                <button type="submit" className="submit">Submit</button>
                <p className="input-container">Forgot &nbsp;<Link to="/resetpassword">Password?</Link></p>
            </form>

            <Footer/>
            </div>
        );
    }
}

export default withRouter(Login);