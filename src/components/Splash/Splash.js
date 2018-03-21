import React, { Component } from 'react';
import './Splash.css';

class Splash extends Component {
  render() {
    return (
      <div className='splash'>
        <div className='title'>
          <img className='logo' src={require('../../assets/logo.png')} alt='logo' />
          <h1 className='brand'>
            <span className='first'>APOLLO </span>
            <span className='second'>INDUSTRIES</span>
          </h1>
          <div className='message'>COMING SOON</div>
        </div>
      </div>
    )
  }
}

export default Splash;
