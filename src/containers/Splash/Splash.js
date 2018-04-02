import React, { Component } from 'react';
import './Splash.css';

import Button from './../../components/Button/Button';
import Image from './../../components/Image/Image';

class Splash extends Component {
  render() {
    return (
      <div className='splash'>
        <div className='title'>
          <Image
            style={{ display: 'block', margin: 'auto' }}
            src={require('./../../assets/apollo-logo-primary.png')}
            alt='logo' />
          <Button
            color='light'
            fill='blue'
            label='OUR COMPANY'
            onClick={ () => window.location.pathname = '/values' }
            style={{ marginTop: '7%' }}
            width='300px' />
        </div>
      </div>
    );
  }
}

export default Splash;
