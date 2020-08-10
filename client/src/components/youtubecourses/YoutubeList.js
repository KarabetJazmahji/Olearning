import React from 'react';
import YoutubeVideo from './YoutubeVideo';
import './youtubevideo.css';

const youtubelist = (props) => {     //This functional component is used to manage the courses fetched from youtube 
  const renderedCourses = props.courses.map((course) =>{  //map function will be used to call the YoutubeVideo component for each course  
      return <YoutubeVideo key={course.id.videoId} onCourseSelect={props.onCourseSelect} course={course} />
  });

  return(
      <div className="ui relaxed divided list video-list">{renderedCourses}</div>
  )
}

export default youtubelist;