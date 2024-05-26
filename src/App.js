import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Auth/Login';
import Exams from './components/Exams/Exam';
import ExamInterface from './components/Exams/Results';

import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/exams" component={Exams} />
          <Route path="/exam/:id" component={ExamInterface} />
          
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

