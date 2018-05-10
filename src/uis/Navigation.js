import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from './../lib';
import Brand from './Brand';

export default class Nav extends Component {
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
    const Menu = styled.ul`
      display:            flex;
      justify-content:    space-between;
      list-style-type:    none;
      width:              50%;

      @media (max-width: 768px) {
        border-bottom:    12px solid var(--blue);
        display:          block;
        height:           0;
        list-style-type: none;
        margin:           0;
        opacity:          0;
        padding:          0;
        text-align:       center;
        transition:       all .25s ease;
        width:            100%;
        visibility:       hidden;
      }
    `;

    const MenuItem = styled.li`
      @media (max-width: 768px) {
        color: var(--light);
        display: block;
        font-size: 1.5rem;
        padding: 2rem 0;
      }
    `

    const Link = styled(NavLink)`
      color: var(--light);
      font-family: Lato, sans-serif;
      font-size: 14px;
      font-weight: 300;
      text-decoration: none;
      transition: all .1s ease;

      &.active {
        color: #f2f2f2;
        font-weight: bold;
      }

      &:hover, &:focus {
        color: #3e7859;
        font-weight: bold;
      }

      @media (max-width: 768px) {
        color: #f2f2f2;
      }
    `;

    const Toggle = styled.input`
      display: none;

      @media (max-width: 768px) {
        &:checked ~ ul {
          opacity: 1;
          height: 100vh;
          visibility: visible;
        }
      }
    `;

    const ToggleLabel = styled.label`
      display: none;

      @media (max-width: 768px) {
        background: linear-gradient(to bottom, var(--light) 0%, var(--light) 12%, transparent 10%, transparent 35%, var(--light) 35%, var(--light) 45%, transparent 45%, transparent 70%, var(--light) 70%, var(--light) 80%, transparent 80%, transparent 100%);
        cursor: pointer;
        display: block;
        float: right;
        height: 35px;
        margin-top: 1em;
        width: 35px;

        &:hover {
          background: linear-gradient(to bottom, var(--gray) 0%, var(--gray) 10%, transparent 10%, transparent 35%, var(--gray) 35%, var(--gray) 45%, transparent 45%, transparent 70%, var(--gray) 70%, var(--gray) 80%, transparent 80%, transparent 100%);
          cursor: pointer;
          display: block;
          float: right;
          height: 35px;
          margin-top: 1em;
          width: 35px;
        }
      }
    `;

    return (
      <Box as='nav' fill='blue' justify='center' pad='!0 2%'>
        <Box alignItems='center' height='vs' justify='between' width='1250px'>
          <Brand path='/' />
          <Box alignItems='center' color='white' justify='end' grow='1'>
            <Toggle type='checkbox' id='menu-toggle'/>
            <ToggleLabel htmlFor='menu-toggle' className='label-toggle' />
            <Menu>
              <MenuItem><Link to='/values'>Values</Link></MenuItem>
              <MenuItem><Link to='/strategy'>Strategy</Link></MenuItem>
              <MenuItem><Link to='/standards'>Standards</Link></MenuItem>
              <MenuItem><Link to='/insights'>Insights</Link></MenuItem>
              <MenuItem><Link to='/org'>Organizations</Link></MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
    );
  }
}
