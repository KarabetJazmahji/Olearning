import React, { Component } from 'react';
import Footer from '../ui/Footer';
import { Link } from 'react-router-dom';
import HomeImage from '../assets/homeimage/homeimage';
import './home.css';
import CategorieContainer from '../categoriecontainer/CategorieContainer';
import CourseContainer from '../coursecontainer/CourseContainer';
import Navbar from '../navbar/NavBar';
import { BsFillQuestionCircleFill } from "react-icons/bs";


// Class based Component for the Landing Page
class Home extends Component {
  state = {categorie: "Development"}    // The state has an initial categorie, this categorie will be passed  
                                        // as a props to <CategorieContainer> and <CourseContainer>
  categorieSelectedtHandler = async ( type ) => {     // Event Handler that changes the categorie based on user selection
      await this.setState({categorie: type});
  }


  render(){
    return(
    <div>
        <Navbar/>                 
        <div className="container">
        <div className="home-page">
          <div className="main-section">
            <HomeImage />
            <div className="home-desc">
              <h1>Learn on your own pace</h1>
              <p>Study Anytime, The Topic You Choose</p>
            </div>
          </div>
        </div>

         {/*Two components that handle categorizing and displaying the courses */}
          <CategorieContainer courseCategorie={this.state.categorie}
                              categorieSelected={this.categorieSelectedtHandler} />
          <CourseContainer loggedin={false} courseCategorie={this.state.categorie} />
          <Footer/>
       
          <Link to={"qasection"}>
            <div style={{position: 'relative'}}>
            <BsFillQuestionCircleFill                    //This link two redirect to Q&A page
                  style={{
                    width: '50px', 
                    height: '50px', 
                    position: 'absolute', 
                    right: '30px',
                    bottom: '100px',
                    color: '#3ADFA0',
                    cursor: 'pointer'}}/>
           </div>
           </Link>
      </div>

      </div>
  )

  }
}

export default Home;


