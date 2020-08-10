import React from 'react';
import Android from '../assets/courseImages/AndroidDevelopment.JPG';
import Web from '../assets/courseImages/WebDevelopment.JPG';
import SQL from '../assets/courseImages/SQL.JPG';
import Business101 from '../assets/courseImages/Business101.JPG';
import BusinessAnalyst from '../assets/courseImages/BusinessAnalyst.JPG';
import SocialMedia from '../assets/courseImages/SocialMedia.JPG';
import MBA from '../assets/courseImages/MBA.JPG';
import DigitalMarketing from '../assets/courseImages/DigitalMarketing.JPG';
import MBAMarketing from '../assets/courseImages/MBAMarketing.JPG';
import './courseStyle.css';
import { Link } from 'react-router-dom';

// Course Array contains courseLink information, course image and course data
const coursesArray = [
    { courseLink: 'v=fis26HvvDII' , imageSource: Android , courseDescription: "Android Development for Beginners - Full Course" },
    { courseLink: 'v=0pThnRneDjw' , imageSource: Web , courseDescription: "Web Development In 2020 - A Practical Guide" },
    { courseLink: 'v=7S_tz1z_5bA' , imageSource: SQL , courseDescription: "MySQL Tutorial for Beginners - Full Course" },
    { courseLink: 'v=RFDaxPoGA6U' , imageSource: Business101 , courseDescription: "business 101" },
    { courseLink: 'v=ous9XUNYZtc' , imageSource: BusinessAnalyst , courseDescription: "Business Analysis Training for Beginners | BA Tutorial | ZARANTECH" },
    { courseLink: 'v=6RaOD39W8iQ' , imageSource: MBA , courseDescription: "MBA, business course" },
    { courseLink: 'v=q5ASe_sxRYI' , imageSource: SocialMedia , courseDescription: "Complete Social Media Marketing Course | Social Media Marketing Tutorial For Beginners | Simplilearn" },
    { courseLink: 'v=nU-IIXBWlS4' , imageSource: DigitalMarketing , courseDescription: "Digital Marketing Course Part - 1 | Digital Marketing Tutorial For Beginners | Simplilearn" },
    { courseLink: 'v=UZu5orpKtJs' , imageSource: MBAMarketing , courseDescription: "MBA, marketing course" },
];




function search(nameKey, myArray){             //function that search for a specific course in passed array based on  
    for (var i=0; i < myArray.length; i++) {   //nameKey argument pass to it and return
        if (myArray[i].courseLink === nameKey) {
            return myArray[i];
        }
    }
}


const course = (props)=>{

    if (!props.p.startsWith("v=")) {   // This step makes sure to get just the course Link
        return null;
    }
    
    else{
        const coursico = search(props.p,coursesArray);
        return (
            <div id="Course" style={{cursor: 'pointer'}} title="Please Login to watch the course">
                <img id="CourseImage" src={coursico.imageSource} alt="Course"></img>
                {props.loggedin
                ?<button id="WatchButton">
                {/*Redirect to course page with passing the course to the page url */}
                <Link to={coursico.courseLink + "***" + props.email + "///" + props.userID}>     
                    Start Learning
                </Link>
                </button>
                : null}
            </div>
        );
    

    } 
}


export default course;


