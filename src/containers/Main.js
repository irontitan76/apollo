import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { App, Brand, Footer, Navigation } from './../components';
import { Design, Organizations, Splash, Values } from './';

class Main extends Component {
  render() {
    let nav, footer;

    if ( window.location.pathname === '/design' ) {
      nav = null;
      footer = null;
    } else {
      nav = <Navigation />;
      footer = (
        <Footer bgColor='dark' color='light'>
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
            <Route path='/design' component={ Design } />
            <Route exact path='/design' render={() => {
                return window.location.pathname.slice(1);
              }} />
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
