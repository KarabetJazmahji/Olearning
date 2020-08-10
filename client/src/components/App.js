import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './logs/Login';
import SignUp from './logs/SignUp';
import Home from './home/Home';
import SuccessfullLoged from './home/SuccessfullLoged';
import ResetPassword from '../components/logs/ResetPassword';
import SavedCoursePlayer from '../components/databasecourse/SavedCoursePlayer';
import Admin from '../components/adminpage/Admin';
import QASection from '../components/qasection/QASection';

const App = () => {     //Functional component for handling the app routing 
  return (
    <Router>       
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/successfullLoged" component={SuccessfullLoged} />
        <Route path="/resetpassword" component={ResetPassword} />
        <Route exact path="/admin" component={Admin} />
        <Route path="/qasection" component={QASection}/>
        <Route path="/:course" component={SavedCoursePlayer} />
      </Switch>
  </Router>
  );
}

export default App;




