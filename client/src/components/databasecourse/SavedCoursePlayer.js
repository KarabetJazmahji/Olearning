import React, { Component } from 'react';
import './savedcoursestyle.css';
import axios from 'axios';

const baseURL = 'https://www.youtube.com/embed/';

class SavedCoursePlayer extends Component {  //class based component to display the saved courses in the database
state = {
    courseID: null,
    commentingVisibility: false,
    commentBody: null,
    successfullyAdded: false,
    userID: this.props.location.pathname.slice(31),
    // email: this.props.location.pathname.slice(this.props.location.pathname.indexOf('***')+3,this.props.location.pathname.indexOf('///')),
    comments: []
}   

handleCommentChange = (e) =>{
    this.setState({commentBody: e.target.value});
}

openTextAreaHandler = () =>{
    this.setState({commentingVisibility: true});
}

onCommentSubmit = (e) =>{
    axios.get('/api/admin/courses')
    .then(res=>{
        res.data.filter(courseselected =>
            courseselected.courseLink === this.props.location.pathname.slice(1,14)).map(course=>{
                const newComment = {
                    //email: this.state.email,
                    content: this.state.commentBody,
                    userid: this.state.userID,
                    courseid: course._id
                }
                axios.post('/api/admin/comment', newComment)
                .then(res=>{
                if(res.status === 200){
                    this.setState({successfullyAdded: true})
                    window.location.reload(false);
                }
                else{
                    return;
                }
                })
                .catch(err=>{
                console.log(err);
                })
        })
    })
  
}

componentDidMount (){
    axios.get('/api/admin/courses')
    .then(res =>{
    res.data.filter(courseselected => 
        courseselected.courseLink === this.props.location.pathname.slice(1,14)).map(course=>{
          this.setState({courseID: course._id})
    }
    )

    axios.get('/api/admin/course/' + this.state.courseID + '/comments')
    .then(res =>{
    this.setState({comments: res.data})
    })

    .catch(err =>{
        console.log(err);
    }) 
    })
    .catch(err =>{
        console.log(err);
    })

}

render() {
    const courseFinalId = this.props.location.pathname.slice(3,14);    // getting the course id after applying the slice method
                                                                       // to remove the unnecessary characters from the link
    
    let successfullyAdded = '';
    if(this.state.successfullyAdded){
        successfullyAdded = <p style={{textAlign:'center', color: 'green'}}>Your comment added successfully</p>
    }
    else{
        successfullyAdded = '';
    }
    return(                                                            
        <div>
            <div className="SavedCourses">
                <iframe title="course player" src={baseURL + courseFinalId} />  {/*Frame element to display the course */}
            </div>

            <div className="CommentsContainer">
            <h2 style={{textAlign: 'center'}}>Comments</h2>
               {/*Comment Section*/}
                {(this.state.comments).map(comment=>{
                    return(
                        <div key={comment.commentId} className="Comment">
                        <div className="Content">
                        <h4 className="Author">
                            Added at:</h4>
                        <p className="Date">
                            {new Date(comment.createdAt).getFullYear() + '-' +
                            (new Date(comment.createdAt).getMonth() + 1)  + '-' +
                            new Date(comment.createdAt).getDate() + ' at ' +
                            new Date(comment.createdAt).getHours() + ":" +
                            new Date(comment.createdAt).getMinutes() }
                        </p>
                        <p>{comment.content}</p>
                    </div>
                </div>
                )})}
                

            <div style={{margin: '30px 0px 30px 40px'}}>
                <button className="logs" onClick={this.openTextAreaHandler}>Leave a Comment</button>
            </div>

            {this.state.commentingVisibility 
            ? <div style={{display: 'flex', alignItems: 'end'}}>
                <textarea style={{margin: '0px 0px 30px 40px'}} 
                        cols="40" 
                        rows="4"
                        onChange={this.handleCommentChange} 
                        placeholder="Please place your comment here" />
                <button onClick={this.onCommentSubmit} 
                        className="logs" 
                        style={{marginLeft: '20px', width: '90px', cursor: 'pointer'}}>
                        Submit
                </button>
            </div>
            : null
            }
            {successfullyAdded}
            
            </div>

        </div>
    )      
}
}


export default SavedCoursePlayer;