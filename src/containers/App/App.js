import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';

import Footer from './../../components/Footer/Footer';
import Image from './../../components/Image/Image';
import Navigation from './../../components/Navigation/Navigation';

import Design from './../Design/Design';
import Organizations from './../Organizations/Organizations';
import Splash from './../Splash/Splash';
import Values from './../Values/Values';


import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-pro-light/faAngleDown';

fontawesome.library.add(faAngleDown);

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
          <Image src={ require('./../../assets/apollo-logo.png')} />
          &nbsp;
          <span style={{ fontFamily: 'var(--font-bold)' }}>APOLLO </span>
          <span style={{ fontFamily: 'var(--font-light)' }}>&nbsp;INDUSTRIES</span>
        </Footer>
      );

      // align-items: center;
      // background-color: var(--dark);
      // color: var(--light);
      // display: flex;
      // height: 75px;
      // justify-content: flex-end;
      // margin: 0 auto;
      // max-width: 1200px;
      // padding: 0 2%;
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
