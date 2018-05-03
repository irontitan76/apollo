import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './../themes/icons';
import { theme } from './../themes';
import Brand from './Brand';
import Footer from './Footer';
import Nav from './Navigation.js';
import Design from './design';
import Primary from './primary';

export default class Main extends Component {
  render() {
    let nav, footer;

    if ( theme.fusion.fontFace ) {
      let style = document.createElement('style');
      style.appendChild(document.createTextNode(theme.fusion.fontFace));

      document.head.appendChild(style);
    }

    if ( window.location.pathname.indexOf('design') > -1 ) {
      nav = null;
      footer = null;
    } else {
      nav = <Nav />;
      footer = (
        <Footer fill='dark' color='light'>
          <Brand />
        </Footer>
      );
    }

    return (
      <Router>
        <ThemeProvider theme={{ frame: theme.core, brand: theme.fusion }}>
          <Fragment>
            { nav }
            <Route exact path ='/' component={ Primary } />
            <Route exact path='/design' component={ Design } />
            { footer }
          </Fragment>
        </ThemeProvider>
      </Router>
    );
  }
}
