import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Button from './../../components/Button/Button';
// import Card from './../../components/Card/Card';
// import Footer from './../../components/Footer/Footer';
import Heading from './../../components/Heading/Heading';
// import Hero from './../../components/Hero/Hero';
import Image from './../../components/Image/Image';
// import Logo from './../../components/Logo/Logo';
// import Navigation from './../../components/Navigation/Navigation';
// import Paragraph from './../../components/Paragraph/Paragraph';
import Subtitle from './../../components/Subtitle/Subtitle';
// import Tabs from './../../components/Tabs/Tabs';

class Design extends Component {
  constructor(props) {
    super(props);

    this._onDropdown = this._onDropdown.bind(this);
  }

  _onDropdown(e) {
    e.preventDefault();
    let target = e.target.nextElementSibling
      || e.target.parentElement.nextElementSibling;

    target.style.display = target.style.display === 'block' ? 'none' : 'block';
  }

  render() {
    const Nav = styled.div`
      background-color: var(--blue);
      height: 100%;
      left: 0;
      overflow-x: hidden;
      overflow-y: scroll;
      position: fixed;
      top: 0;
      width: 15%;
      z-index: 1;
    `;

    const Brand = styled.div`
      color: var(--light);
      display: flex;
      justify-content: start;
      padding: 10% 0 10% 10%;
    `;

    const Link = styled.a`
      background: none;
      border: none;
      color: var(--light);
      cursor: pointer;
      display: block;
      font-size: 1rem;
      outline: none;
      padding: 10px 8px 6px 24px;
      text-align: left;
      text-decoration: none;

      &:hover {
        background-color: #004575;
      }

      &.active {
        background-color: green;
        color: white;
      }
    `;

    const Icon = styled(FontAwesomeIcon)`
      float: right;
      font-size: 1.5rem;
    `;

    const Dropdown = styled.div`
      background-color: #004575;
      display: none;
      padding-left: 16px;
      }
    `;

    const DropdownLink = Link.extend`
      &:hover {
        color: var(--gray);
      }
    `;

    return (
      <Fragment>
        <Nav>
          <Brand>
            <Image style={{ float: 'left' }} src={ require('./../../assets/apollo-logo.png')} />
            &nbsp;&nbsp;&nbsp;
            <div>
              <span style={{ fontFamily: 'var(--font-bold)' }}>APOLLO </span>
              <span style={{ fontFamily: 'var(--font-light)' }}>&nbsp;INDUSTRIES</span>
            </div>
          </Brand>

          <Link href='#structure' onClick={ (e) => this._onDropdown(e) }>
            Structure
            <Icon icon={[ 'fal', 'angle-down' ]} />
          </Link>
          <Dropdown>
            <DropdownLink href='#'>App</DropdownLink>
            <DropdownLink href='#'>Article</DropdownLink>
            <DropdownLink href='#'>Box</DropdownLink>
            <DropdownLink href='#'>Card</DropdownLink>
            <DropdownLink href='#'>Columns</DropdownLink>
            <DropdownLink href='#'>Grid</DropdownLink>
            <DropdownLink href='#'>Layer</DropdownLink>
            <DropdownLink href='#'>Section</DropdownLink>
            <DropdownLink href='#'>Split</DropdownLink>
          </Dropdown>

          <Link href='#text' onClick={ (e) => this._onDropdown(e) }>
            Text
            <Icon icon={[ 'fal', 'angle-down' ]} />
          </Link>
          <Dropdown>
            <DropdownLink href='#'>Heading</DropdownLink>
            <DropdownLink href='#'>Paragraph</DropdownLink>
            <DropdownLink href='#'>Quote</DropdownLink>
            <DropdownLink href='#'>Title</DropdownLink>
          </Dropdown>

          <Link href='#navigation' onClick={ (e) => this._onDropdown(e) }>
            Navigation
            <Icon icon={[ 'fal', 'angle-down' ]} />
          </Link>
          <Dropdown>
            <DropdownLink href='#'>Footer</DropdownLink>
            <DropdownLink href='#'>Menu</DropdownLink>
            <DropdownLink href='#'>Navbar</DropdownLink>
            <DropdownLink href='#'>Nav</DropdownLink>
            <DropdownLink href='#'>Tabs</DropdownLink>
          </Dropdown>

          <Link href='#controls' onClick={ (e) => this._onDropdown(e) }>
            Controls
            <Icon icon={[ 'fal', 'angle-down' ]} />
          </Link>
          <Dropdown>
            <DropdownLink href='#'>Anchor</DropdownLink>
            <DropdownLink href='#'>Link 2</DropdownLink>
          </Dropdown>

          <Link href='#data' onClick={ (e) => this._onDropdown(e) }>
            Data Models
            <Icon icon={[ 'fal', 'angle-down' ]} />
          </Link>
          <Dropdown>
            <DropdownLink href='#'>List</DropdownLink>
            <DropdownLink href='#'>Table</DropdownLink>
          </Dropdown>

        </Nav>

        <section style={{ marginLeft: '17%' }}>
          <Heading id='structure' content='Structure' margin='xs' size='lg' weight='regular' />
          <Subtitle content='App' margin='none' size='md' />
        </section>

      </Fragment>
    );
  }
}

export default Design;
