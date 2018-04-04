import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { Brand, Heading, Search, Subtitle, Table } from './../components';

import items from './../data/props.json';
import { ButtonExamples } from './../data/examples.js';

class Design extends Component {
  constructor(props) {
    super(props);

    this._onDropdown = this._onDropdown.bind(this);
    this._filterMenu = this._filterMenu.bind(this);

    this.state = {
      headers: ['Property', 'Default', 'Options', 'Type', 'Description'],
      currentItem: items.structure.app,
      items
    }
  }

  _onDropdown(e) {
    e.preventDefault();
    let target = e.target.nextElementSibling
      || e.target.parentElement.nextElementSibling;

    target.style.display = target.style.display !== 'block' ? 'block' : 'none';
  }

  _filterMenu(e) {
    e.preventDefault();
    let search = e.target.value.toLowerCase();
    let menu = e.target.parentElement;
    let items = menu.getElementsByTagName('a');

    for ( let i = 0; i < items.length; i++ ) {
      if ( items[i].innerHTML.toLowerCase().indexOf(search) > -1) {
        items[i].parentElement.style.display = '';
        items[i].style.display = '';
      } else {
        items[i].style.display = 'none';
      }
    }
  }

  _getComponent(e) {
    e.preventDefault();
    let targetId = e.target.id;
    let parentId = e.target.parentElement.previousSibling.id;

    this.setState({
      currentItem: this.state.items[parentId][targetId]
    });
  }

  _renderMenu() {
    const Link = styled.a`
      background: none;
      border: none;
      color: var(--light);
      cursor: pointer;
      display: block;
      outline: none;
      padding: 4% 3.5% 3% 8%;
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
      transform: 'none';
    `;

    return Object.keys(items).map((item, key) => {
      let isDropdown = Object.keys(item).length > 0;

      return <Fragment key={`key_${key}`}>
        <Link
          id={ item }
          href={`#${item}`}
          onClick={ isDropdown ? (e) => this._onDropdown(e) : null }>
          { item.toLowerCase().charAt().toUpperCase() + item.slice(1) }
          { isDropdown ? <Icon icon={[ 'fal', 'angle-down' ]} /> : null }
        </Link>
        { isDropdown ? this._renderDropdown(Link, item) : null }
      </Fragment>
    });
  }

  _renderDropdown(Link, item) {
    const Dropdown = styled.div`
      background-color: #004575;
      padding-left: 5%;
      }
    `;

    const DropdownLink = Link.extend`
      &:hover {
        color: var(--gray);
      }
    `;

    return (
      <Dropdown style={{ display: 'block' }}>
        {
          Object.keys(items[item]).map((subItem, key) => (
            <DropdownLink
              key={`key_${key}`}
              id={subItem.toLowerCase()}
              href={`#${subItem.toLowerCase()}`}
              onClick={(e) => this._getComponent(e) }>
              { items[item][subItem].name }
            </DropdownLink>
          ))
        }
      </Dropdown>
    );
  }

  render() {
    const Nav = styled.div`
      background-color: var(--blue);
      font-size: 0.8rem;
      height: 100%;
      left: 0;
      overflow-x: hidden;
      overflow-y: scroll;
      position: fixed;
      top: 0;
      width: 250px;
      z-index: 1;

      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: var(--light);
      }

      ::-webkit-scrollbar-thumb {
        background: #ddd;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: var(--dark);
      }
    `;

    const { currentItem: { name, family, properties }, headers } = this.state;

    return (
      <Fragment>
        <Nav style={{ animation: 'fadeEffect 0.75s' }}>

            {/*<Image style={{ float: 'left',  height: 'auto', maxWidth: '24px', width: '100%' }} src={ require('./../../assets/apollo-logo.png')} />
          &nbsp;&nbsp;&nbsp;*/}
          <Brand style={{ padding: '10% 0 10% 10%' }} />

          <Search placeholder='Search components...' onKeyUp={(e) => this._filterMenu(e)} />
          { this._renderMenu() }
        </Nav>

        <section style={{ marginLeft: '270px', marginRight: '20px', animation: 'fadeEffect 1s' }}>
          <Heading id={ family } content={ family } margin='xs' size='lg' weight='regular' style={{ display: 'inline-block' }} />
          <Subtitle content={ name } margin='none' size='md' style={{ display: 'inline-block', marginLeft: '1.5%' }}/>
          <Heading content='Properties' size='md' weight='light' margin='xs' />

          <Table headers={ headers } rows={ properties } />

          <Heading content='Examples' size='md' weight='light' margin='xs' />
          { ButtonExamples }
        </section>

      </Fragment>
    );
  }
}

export default Design;
