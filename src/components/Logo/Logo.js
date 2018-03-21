import React, { Component, Fragment } from 'react';
import './Logo.css'

class Logo extends Component {
  render() {
    const { style } = this.props;

    return (
      <Fragment>
        <img className='logo'
          src={require('./../../assets/logo.png')}
          style={style}
          alt='logo' />
      </Fragment>

    )
  }
}

export default Logo;
