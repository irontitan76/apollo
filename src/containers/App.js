import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import Footer from './../components/Footer';
import Image from './../components/Image';
import Navigation from './../components/Navigation/Navigation';

import Design from './Design';
import Organizations from './Organizations';
import Splash from './Splash';
import Values from './Values';

class App extends Component {
  render() {
    let nav, footer;

    if ( window.location.pathname === '/design' ) {
      nav = null;
      footer = null;
    } else {
      nav = <Navigation />;
      footer = (
        <Footer alignItems='center' bgColor='dark' color='light' justify='end' width='1200px'>
          <Image src={ require('./../assets/apollo-logo.png')} />
          &nbsp;
          <span style={{ fontFamily: 'var(--font-bold)' }}>APOLLO </span>
          <span style={{ fontFamily: 'var(--font-light)' }}>&nbsp;INDUSTRIES</span>
        </Footer>
      );
    }

    return (
      <Router>
        <Fragment>
          { nav }

          <Route exact path="/" render={() => <Redirect to='/splash' />} />
          <Route exact path='/design' component={ Design } />
          <Route exact path='/org' component={ Organizations } />
          <Route exact path='/splash' component={ Splash } />
          <Route exact path="/values" component={ Values } />

          { footer }
        </Fragment>
      </Router>
    );
  }
}

export default App;
