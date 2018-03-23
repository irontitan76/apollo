import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this._onResponsive = this._onResponsive.bind(this);
  }

  _onResponsive(e) {
    e.preventDefault();
    let nav = e.currentTarget.parentElement.parentElement;
    nav.className === 'navbar'
      ? nav.classList.add('responsive')
      : nav.classList.remove('responsive');
  }

  render() {
    return (
      <nav className='navbar'>
        <nav className='wrapper'>
          <NavLink to='/' className='logo'>
              <img src={require('./../../assets/logo-28px.png')} alt='logo' />
          </NavLink>
          <input type='checkbox' id='menu-toggle'/>
          <label htmlFor='menu-toggle' className='label-toggle' />
          <ul>
            <li><NavLink to='/values' activeClassName='active'>Values</NavLink></li>
            <li><NavLink to='/strategy' activeClassName='active'>Strategy</NavLink></li>
            <li><NavLink to='/standards' activeClassName='active'>Standards</NavLink></li>
            <li><NavLink to='/insights' activeClassName='active'>Insights</NavLink></li>
            <li><NavLink to='/org' activeClassName='active'>Organizations</NavLink></li>
          </ul>
        </nav>
      </nav>
    );
  }
}

Navigation.defaultProps = {

}

export default Navigation;
