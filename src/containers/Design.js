import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import {
  Brand, Card, Container, Heading, Menu, Search, Sidebar, Subtitle, Table
} from './../components';

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
      background:       none;
      border:           none;
      color:            var(--light);
      cursor:           pointer;
      display:          block;
      outline:          none;
      padding:          4% 3.5% 3% 8%;
      text-align:       left;
      text-decoration:  none;

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
              id={subItem}
              href={`#${subItem}`}
              onClick={(e) => this._getComponent(e) }>
              { items[item][subItem].name }
            </DropdownLink>
          ))
        }
      </Dropdown>
    );
  }

  render() {
    const { currentItem: { name, family, properties }, headers } = this.state;

    return (
      <Fragment>
        <Sidebar bgColor='blue'>
          <Brand
            alignItems='center'
            bgColor='blue'
            justify='start'
            height='!75px'
            pad='!10% 0 10% 10%' />
          <Search
            placeholder='Search components...'
            onKeyUp={(e) => this._filterMenu(e)} />
          { this._renderMenu() }
          <Menu items={ items } />
        </Sidebar>

        <Container
          animation='fadeEffect 1s'
          direction='column'
          margin='!auto 20px auto 270px'>
          <div>
            <Heading
              id={ family }
              content={ family }
              margin='xs'
              size='lg'
              style={{ display: 'inline-block' }}
              weight='regular' />
            <Subtitle
              content={ name }
              margin='none'
              size='md'
              style={{ display: 'inline-block', marginLeft: '1.5%' }} />
          </div>
          <div>
            <Heading content='Properties' size='md' weight='light' margin='xs' />
            <Table headers={ headers } rows={ properties } />
          </div>
          <div>
            <Heading content='Examples' size='md' weight='light' margin='xs' />
            { ButtonExamples }
          </div>
          <div>
            <Card
              heading='Card'
              content='This is content for a card component'
              meta='Meta'
              style={{ boxShadow: '2px 4px 8px 2px var(--gray)'}} />
          </div>
        </Container>

      </Fragment>
    );
  }
}

export default Design;
