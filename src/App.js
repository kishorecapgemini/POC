<<<<<<< HEAD
import React, { lazy, Suspense } from 'react';
=======
import React ,{ lazy,Suspense } from 'react';
>>>>>>> 607863304927b719a9d730736d9e2fcf0d9b9e3e
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Login = lazy(() => import('./components/Login'))
const Signup = lazy(() => import('./components/signup'))
const renderLoader = () => <p>Loading</p>;

function App() {
  return (
    <div className="App">
      <Suspense fallback={renderLoader()}>
<<<<<<< HEAD
        <Router>
          <Switch>

            < Route exact path="/login" component={Login} />
            < Route exact path="/signup" component={Signup} />
          </Switch>
        </Router>
=======
      <Router>
        <Switch>

          < Route exact path="/login" component={Login} />
          < Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
>>>>>>> 607863304927b719a9d730736d9e2fcf0d9b9e3e
      </Suspense>



    </div>
  );
}
export default App;
