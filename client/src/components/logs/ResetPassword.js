import React, { Component } from 'react';
import Footer from '../ui/Footer';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/logo'; 
import axios from 'axios';

class ResetPassword extends Component{
    submitForm = (e) =>{
        e.preventDefault();
        const password = e.target.password.value; 
        const email = e.target.email.value
        axios.get('/api/user/' + e.target.email.value)
        .then(res => {
            const updatedUser = {
                password: password,
                email: email,
                userid: res.data[0]._id
             } 
            axios.post('/api/admin/user/password',updatedUser)
            .then(res =>{
                if(res.status === 200){
                    alert("Password updated");
                }
            })
            .catch(err =>{
                alert("Try again");
            })
        }) 
        .catch(err =>{
            console.log(err);
        })
    }

    render(){
        return (
            <div>
                <Link to={"/"}><Logo /></Link>
                <h1>Reset Password</h1>
    
                <form onSubmit={this.submitForm.bind(this)}>
                <div className="input-container">
                        <label>Email address</label>
                        <input type="email"
                               className="form-control"
                               name="email"
                               placeholder="Enter Your Email" />
                </div>
    
                <div className="input-container">
                    <label>New Password</label>
                    <input type="password" 
                           className="form-control"
                           name="password" 
                           placeholder="Enter Your New Password" />
                </div>
    
                <button type="submit" className="submit">Reset</button>
    
                </form>
    
                <Footer />
            </div>
        )

    }
}

export default ResetPassword;