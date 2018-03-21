import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

// import Logo from './../Logo/Logo';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this._onResponsive = this._onResponsive.bind(this);
  }

  _onResponsive(e) {
    e.preventDefault();
    let nav = e.currentTarget.parentElement.parentElement;
    nav.className === 'nav'
      ? nav.classList.add('responsive')
      : nav.classList.remove('responsive');
  }

  render() {

    return (
      <div className='nav'>
        <div className='container' style={{ textAlign: 'center' }}>
          <NavLink to='/' exact activeClassName='active'>
            Home
            { /*<Logo style={{ height: '1rem' }}/>
            <span style={{ fontFamily: 'open_sansextrabold'}}> APOLLO </span>
            <span style={{ fontFamily: 'open_sanslight'}}>INDUSTRIES</span> */ }
          </NavLink>
          <NavLink to='/about' activeClassName='active'>Our core</NavLink>
          <NavLink to='/strategy' activeClassName='active'>Strategy</NavLink>
          <NavLink to='/standards' activeClassName='active'>Standards</NavLink>
          <NavLink to='/insights' activeClassName='active'>Insights</NavLink>
          <NavLink to='/insights' activeClassName='active'>Organizations</NavLink>

          <a href='' className='icon' onClick={(e) => this._onResponsive(e)}>&#9776;</a>
        </div>
      </div>
    );
  }
}

Navigation.defaultProps = {

}

export default Navigation;
