import React from 'react';
import './qasection.css';


const qasection = () =>{
    return (
        <div className="qa-container">
            <h1>Q&amp;A Section</h1>
            <h2 style={{textAlign: 'center'}}>Here are some frequently asked question, and answers to them:</h2>
            <p>
                <strong className="strong-text">1)Question:</strong> Do I have to pay for courses?<br/>
                <strong className="strong-text">Answer:</strong> OLearning currently doesn't host any paid courses. All the courses are free of charge. However, in future, OLearning may choose to create it's own content or invite instructors to create contents for us. In that case, we may choose to charge the students. Fees for those courses can't be predicted at this moment.
            </p>

            <p>
                <strong className="strong-text">2)Question:</strong> How long can I access the courses?<br/>
                <strong className="strong-text">Answer:</strong> A user will be able to access any course as long as it is available on our platform and also available on original hosting platform.
            </p>

            <p>    
                <strong className="strong-text">3)Question:</strong> Is it possible to ask questions about a related topic?<br/>
                <strong className="strong-text">Answer:</strong> Yes, our platform has a robust commenting solution integrated with it. Students will be able to ask questions and get answers
            </p>

            <p>
                <strong className="strong-text">4)Question:</strong> What if the courses are removed from where they are originally hosted?<br/>
                <strong className="strong-text">Answer:</strong> Currently, OLearning doesn't host any of the courses. The courses are originally hosted on different platform like: youtube.com, which are publicly available. So, if the original content creator chooses to remove the videos, we wouldn't have any access to that. Unfortunately, the course will not be available in OLearning in that case.
            </p>    
                
            <p>
                <strong className="strong-text">5)Question:</strong> Can OLearning remove any course?<br/>
                <strong className="strong-text">Answer:</strong> Yes. If OLearning receives any complain from the host regarding sharing their courses, OLearning will remove the course from our platform. There may be some other unforeseen reasons to remove the course as well.
            </p>    
                
            <p>
                <strong className="strong-text">6)Question:</strong> Will OLearning add more courses in future?<br/>
                <strong className="strong-text">Answer:</strong> Yes. OLearning is continuously searching for new contents that can be added to our platform. In future, we expect to add more and more helpful video tutorials on different topics.
            </p>    

            <p>
                <strong className="strong-text">7)Question:</strong> Do I get a certificate for finishing the course?<br/>
                <strong className="strong-text">Answer:</strong> Currently, we are not offering certification programs. In future, we may introduce this type of courses with some fee to get started. However, that is not a plan at the moment and OLearning will continue to be free until that time.
            </p>    
                
            <p>
                <strong className="strong-text">8)Question:</strong> How do I start doing a course?<br/>
                <strong className="strong-text">Answer:</strong> You can simply register on our platform and then login using your registered credentials. After that you will be navigated to our home page where you can find the list of all the tutorials we are currently hosting. You can click on any tutorial to start the course.
            </p>                    
                
        </div>
    )

}


export default qasection;