import React from 'react';

const courseplayer = (props) =>{  //Functional component will receive props that contains information about 
    if(!props.coursedetails){     //the course link, this information will be used in the courseURL 
        return <div>Loading...</div>
    }
     
    const courseURL = `https://www.youtube.com/embed/${props.coursedetails.id.videoId}`;
    return(
        <div className="CoursePlayer">
            <div className="ui embed">
                <iframe title="course player" src={courseURL} />
            </div>
            <div className="ui segment">
               <h4 className="ui header">{props.coursedetails.snippet.title}</h4>
               <p>{props.coursedetails.snippet.description}</p>
            </div>
        </div>
    )
}



export default courseplayer;