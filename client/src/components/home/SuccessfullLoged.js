import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../ui/Footer';
import HomeImage from '../assets/homeimage/homeimage';
import './home.css';
import youtubeapi from '../../apis/youtubeapi';
import CategorieContainer from '../categoriecontainer/CategorieContainer';
import CourseContainer from '../coursecontainer/CourseContainer';
import Navbar from '../navbar/NavBar';
import YoutubeList from '../youtubecourses/YoutubeList';
import CoursePlayer from '../youtubecourses/CoursePlayer';


const KEY = "AIzaSyDJ8HL36g9TXHS95GtnldmvgmQeKQbOj9I";   // Youtube API key  

class successfullLoged extends Component{
    state = {categorie: "Development",
             logged: true, 
             courses: [],
             selectedCourse: null};


    componentDidMount() {                    // This function calls the onTermSubmit with default term 'Java' 
      this.onTermSubmit('Java'); 
                                              // This perevnts from displaying nothing on the screen 
    }


    onTermSubmit = async term => {                         // Calling a get request from youtubeapi by using axios instance
        const response = await youtubeapi.get('/search',{
            params: {
                q: term,
                part: 'snippet', 
                type: 'video',
                maxResults: 5,
                key: KEY
            }
        });
        this.setState({
          courses: response.data.items,
          selectedCourse: response.data.items[0]
        });
    };

    onCourseSelect = (course) =>{                      //Event handler gets fired when a user select a course 
      this.setState({ selectedCourse: course});        // and set the state with the value of selected course
    };

    categorieSelectedtHandler = async ( type ) => {     //Event handler gets fired when a user select a specific categorie
      await this.setState({categorie: type});
  }


  render(){
    return(
      <div>
      <Navbar logged= {this.state.logged} username={this.props.history.location.state.email}></Navbar>
      <div className="container">
        <div className="home-page">
          <div className="main-section">
            <HomeImage />
            <div className="home-desc">
              <h1>Learn on your own pace</h1>
              <p>Study Anytime, The Topic You Choose</p>
            <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>  {/* Search Bar gets the search term entered by the user */}
            </div>
          </div>
        </div>

        <div className="ui grid">
          <div className="ui row">
            <div className="five wide column">
                <YoutubeList onCourseSelect={this.onCourseSelect} courses={this.state.courses} />   
            </div>

            <div className="ten wide column">
                <CoursePlayer coursedetails={this.state.selectedCourse} />
            </div>
          </div>
        </div>

        <div>
          <CategorieContainer categorieSelected={this.categorieSelectedtHandler}></CategorieContainer>
          <CourseContainer 
              email={this.props.history.location.state.email} 
              loggedin={true} 
              userID={this.props.history.location.state.userID}
              courseCategorie={this.state.categorie}></CourseContainer>
          <Footer/>
        </div>
      </div>
      </div>
  )

  }
}


export default successfullLoged;