import React from 'react';
import './youtubevideo.css';

const youtubevideo = (props) =>{ // This functional component just display the single selected course 
    return(                      // from the courses fetched from the Youtube
        <div onClick={()=>{ props.onCourseSelect(props.course)}} 
             alt={props.course.snippet.title} 
             className="video-item item">
            <img className="ui image" 
                 src={props.course.snippet.thumbnails.medium.url}
                 alt={props.course.snippet.title} />
            <div className="content">
                <div className="header">
                    {props.course.snippet.title}
                </div>
            </div>
        </div>
    )

}

export default youtubevideo;