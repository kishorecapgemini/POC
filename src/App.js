import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          < Route exact path="/login" component={Login} />
          < Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>



    </div>
  );
}
export default App;