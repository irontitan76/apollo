import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer/Footer';
import Image from './components/Image/Image';
import Navigation from './components/Navigation/Navigation';

import Organizations from './views/Organizations/Organizations';
import Splash from './views/Splash/Splash';
import Values from './views/Values/Values';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navigation />

          <Route exact path="/" render={() => <Redirect to='/splash' />} />
          <Route exact path='/splash' component={ Splash } />
          <Route exact path='/org' component={ Organizations } />
          <Route exact path="/values" component={ Values } />

          <Footer style={{ position: 'absolute', bottom: 0 }}>
            <Image src={ require('./assets/apollo-logo.png')} />
            &nbsp;
            <span style={{ fontFamily: 'open_sansbold' }}>APOLLO </span>
            <span style={{ fontFamily: 'open_sanslight' }}>&nbsp;INDUSTRIES</span>
          </Footer>
        </Fragment>
      </Router>
    );
  }
}

export default App;
