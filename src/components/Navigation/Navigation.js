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
        <nav className='navbar__container'>
          <NavLink to='/' className='navbar__brand'>
              <img src={require('./../../assets/logo-28px.png')} alt='logo' />
          </NavLink>
          <input type='checkbox' id='menu-toggle'/>
          <label htmlFor='menu-toggle' className='label-toggle' />
          <ul className='navbar__menu'>
            <li className='navbar__item'><NavLink to='/values' className='navbar__link' activeClassName='active'>Values</NavLink></li>
            <li className='navbar__item'><NavLink to='/strategy' className='navbar__link' activeClassName='active'>Strategy</NavLink></li>
            <li className='navbar__item'><NavLink to='/standards' className='navbar__link' activeClassName='active'>Standards</NavLink></li>
            <li className='navbar__item'><NavLink to='/insights' className='navbar__link' activeClassName='active'>Insights</NavLink></li>
            <li className='navbar__item'><NavLink to='/org' className='navbar__link' activeClassName='active'>Organizations</NavLink></li>
          </ul>
        </nav>
      </nav>
    );
  }
}

Navigation.defaultProps = {

}

export default Navigation;
