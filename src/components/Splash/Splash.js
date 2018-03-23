import React, { Component } from 'react';
import './Splash.css';

import Button from './../Button/Button';
import Image from './../Image/Image';

class Splash extends Component {
  render() {
    return (
      <div className='splash'>
        <div className='title'>
          <Image style={{ display: 'block', margin: 'auto' }} src={require('./../../assets/apollo-logo-text2.png')} alt='logo' />
          <Button content='OUR IMMINENT PLAN' fill='blue' onClick={ () => window.location.pathname = '/values' } />
        </div>
      </div>
    )
  }
}

export default Splash;
