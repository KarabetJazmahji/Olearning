import React, { Component } from 'react';
import axios from 'axios';
import './admin.css';
import { MdDelete } from "react-icons/md";
import { GrUpdate } from 'react-icons/gr';
import Navbar from '../navbar/NavBar';


class Admin extends Component{
  state ={
    users: [],
    display: false
  }


  deleteHandler = (e) => {
    axios.delete('/api/admin/user/' + e.currentTarget.dataset.id)
    .then(res=> {
      axios.get('/api/admin/users')
    .then(res =>{
      console.log(res.data);
      this.setState({users: res.data})
    })
    })
    .catch(err => console.log(err));
  }

  updateHandler = (e) =>{
    this.setState({display: true})
      const userid = e.currentTarget.dataset.id;
    this.submitForm = (event) =>{
      event.preventDefault();
      const updatedUser = {
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        email: event.target.email.value,
        userid: userid
      } 
      axios.post('/api/admin/user',updatedUser)
      .then(res => {
        if(res.status === 200){
          alert('User Updated');
          axios.get('/api/admin/users')
          .then(res =>{
          this.setState({users: res.data})
       })
        }
      })
      .catch(err =>{
        console.log(err);
      })
    }
  }



  componentDidMount(){
    axios.get('/api/admin/users')
    .then(res =>{
      this.setState({users: res.data})
    })
  }
  render(){
    return(
      <div>
        <Navbar logged={true} username={this.props.history.location.state.email}></Navbar> 
        <table id="users">
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        {(this.state.users).map(user =>{
        return(
          <tr key={user._id}>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            {user.usertype == 2 
            ? <td style={{background: '#3ADFA0'}}></td>
            :<td data-id={user._id} onClick={this.deleteHandler.bind(this)}><MdDelete/></td>
            }

            {user.usertype == 2 
            ? <td style={{background: '#3ADFA0'}}></td>
            :<td data-id={user._id} onClick={this.updateHandler.bind(this)}><GrUpdate/></td>
            }
            

          </tr>
        )
        })}
        </table>

        {this.state.display
        ?<div style={{margin: "20px 0 0 0"}}>
           <h1>Update the fields</h1>
           <form onSubmit={this.submitForm}>
           <div className="input-container">
                    <label>First Name</label>
                    <input                                          
                        type="text" 
                        className="form-control"
                        name="firstname"
                        placeholder="Enter First Name"
                        />
           </div>

           <div className="input-container">
                    <label>Last Name</label>
                    <input                                          
                        type="text" 
                        className="form-control"
                        name="lastname"
                        placeholder="Enter Last Name"
                        />
           </div>

           <div className="input-container">
                    <label>Email</label>
                    <input                                          
                        type="email" 
                        className="form-control"
                        name="email"
                        placeholder="Enter email"
                        />
           </div>
           <button type="submit" className="submit">Update</button>
           </form>
        </div>
        :null
        }
        
      </div>
    )
}}

export default Admin;

