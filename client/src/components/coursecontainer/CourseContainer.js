import React from 'react';
import Course from './Course';
import './courseStyle.css';


const categories = [
    { label: 'Development' , link1: 'v=fis26HvvDII' , link2: 'v=0pThnRneDjw', link3: 'v=7S_tz1z_5bA' },
    { label: 'Business' , link1: 'v=RFDaxPoGA6U' , link2: 'v=ous9XUNYZtc', link3: 'v=6RaOD39W8iQ' },
    { label: 'Marketing' , link1: 'v=q5ASe_sxRYI' , link2: 'v=nU-IIXBWlS4', link3: 'v=UZu5orpKtJs'  },
];


function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].label === nameKey) {
            return myArray[i];
        }
    }
}



const courseContainer = (props) => {
    const listofCourses =  search(props.courseCategorie,categories);
        
    return(
        <div className="CourseContainer" style={{marginBottom: '300px'}}>
            {/*Convert the listofCourses object to an array to apply map function to return call Course component 
               for each array element  */}
                {Object.keys(listofCourses).map((label) => {
                    return <Course 
                            loggedin={props.loggedin}
                            email={props.email}
                            userID={props.userID}
                            p={ listofCourses[label] }
                            key={listofCourses[label]} >
                            </Course>})}
        </div>
        )
}


export default courseContainer;
