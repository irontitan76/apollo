import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './../themes/icons';
import { theme } from './../themes';
import Brand from './Brand';
import Footer from './Footer';
import Nav from './Navigation.js';
import Article from './Article.js';
import Design from './Design';
import Insights from './Insights';
import Organizations from './Organizations';
import Primary from './Home';
import Standards from './Standards';
import Strategy from './Strategy';
import Values from './Values';

export default class Main extends Component {
  constructor() {
      super();

      this.state = {
        navActive: true,
        footerActive: true
      };
  }

  componentWillMount() {
    // Will have to push this to each separate page
    if ( window.location.pathname.indexOf('design') > -1 ) {
      this.setState({
        navActive: false,
        footerActive: false
      });
    } else {
      this.setState({
        navActive: true,
        footerActive: true
      });
    }
  }

  render() {
    const { navActive, footerActive } = this.state;
    let nav, footer;

    if ( theme.fusion.fontFace ) {
      let style = document.createElement('style');
      style.appendChild(document.createTextNode(theme.fusion.fontFace));

      document.head.appendChild(style);
    }

    nav = navActive ? <Nav fill='blue' /> : null;
    footer = footerActive ? <Footer
      color='light'
      copyright='&copy; 2018 Fusion Industries, Inc.'
      fill='#222'>
      <Brand />
    </Footer> : null;

    return (
      <Router>
        <ThemeProvider theme={{ frame: theme.core, brand: theme.fusion }}>
          <Fragment>
            { nav }
            <Route exact path ='/' component={ Primary } />
            <Route exact path='/design' component={ Design } />
            <Route exact path='/insights' component={ Insights } />
            <Route exact path='/insights/:id' component={ Article } />
            <Route exact path='/org' component={ Organizations } />
            <Route exact path='/standards' component={ Standards } />
            <Route exact path='/strategy' component={ Strategy } />
            <Route exact path='/values' component={ Values } />

            { footer }
          </Fragment>
        </ThemeProvider>
      </Router>
    );
  }
}
