import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { App, Brand, Footer, Navigation } from './../components';

import Design from './Design';
import Organizations from './Organizations';
import Splash from './Splash';
import Values from './Values';

class Main extends Component {
  render() {
    let nav, footer;

    if ( window.location.pathname === '/design' ) {
      nav = null;
      footer = null;
    } else {
      nav = <Navigation />;
      footer = (
        <Footer alignItems='center' bgColor='dark' color='light' justify='end'>
          <Brand />
        </Footer>
      );
    }

    return (
      <Router>
        <Fragment>
          { nav }
          <App maxWidth='100%'>
            <Route exact path="/" render={() => <Redirect to='/splash' />} />
            <Route exact path='/design' component={ Design } />
            <Route exact path='/org' component={ Organizations } />
            <Route exact path='/splash' component={ Splash } />
            <Route exact path="/values" component={ Values } />
          </App>
          { footer }
        </Fragment>
      </Router>
    );
  }
}

export default Main;
