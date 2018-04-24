import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import { Brand, Container, Footer, Navigation } from './../components';
import { Design, Organizations, Splash, Strategy, Values, Test } from './';

class Main extends Component {
  render() {
    let nav, footer;

    if ( window.location.pathname.indexOf('design') > -1
        || window.location.pathname.indexOf('test') > -1) {
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
          <Route exact path="/" render={() => <Redirect to='/splash' />} />
          <Route path='/design' component={ Design } />
          <Route exact path='/design' render={() => {
              return window.location.pathname.slice(1);
            }} />
          <Route exact path='/org' component={ Organizations } />
          <Route exact path='/splash' component={ Splash } />
          <Route exact path='/strategy' component={ Strategy } />
          <Route exact path='/test' component={ Test } />
          <Route exact path="/values" component={ Values } />
          { footer }
        </Fragment>
      </Router>
    );
  }
}

export default Main;
