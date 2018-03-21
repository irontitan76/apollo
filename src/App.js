import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Splash from './components/Splash/Splash';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navigation />

          <Route exact path="/" render={() => <Redirect to='/splash' />} />
          <Route exact path='/splash' component={ Splash } />
        </Fragment>
      </Router>
    );
  }
}

export default App;
