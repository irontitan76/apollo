import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='title'>
          <img src={require('./logo.png')} />
          <br />
          <h1 className='brand'><span className='first'>APOLLO</span> <span className='second'>INDUSTRIES</span></h1>
          <div style={{ marginTop: '8%' }}>COMING SOON</div>
        </div>

      </div>
    );
  }
}

export default App;
