import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { Drop } from './';

import items from './../data/props2.json';

class Menu extends Component {
  _onDrop(e) {
    e.preventDefault();
    let target = e.target.nextElementSibling
      || e.target.parentElement.nextElementSibling;

    target.style.display = target.style.display !== 'block' ? 'block' : 'none';
  }

  renderItems(items, drop) {
    const MenuItem = styled.a`
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

    const Drop = MenuItem.extend`
      background-color: #004575;
      padding-left: 10%;

      &:hover {
        color: var(--gray);
      }
    `;

    const Icon = styled(FontAwesomeIcon)`
      float: right;
      transform: 'none';
    `;

    let isDrop = 0, attr, icon, subItems;

    return items.map((item, key) => {
      isDrop = item.children ? item.children.length > 0 : false;

      attr = {
        key: `key_${key}`,
        id: item.id,
        href: item.path,
        onClick: isDrop ? e => this._onDrop(e) : null
      }

      icon = isDrop ? <Icon icon={[ 'fal', 'angle-down' ]} /> : null
      subItems = isDrop ? this.renderItems(item.children, 'drop') : null

      return <div key={ `key_${key}` } style={{ display: 'block' }}>
        { drop
          ? <Drop { ...attr }>{ item.name }{ icon }</Drop>
          : <MenuItem { ...attr }>{ item.name }{ icon }</MenuItem>
        }
        { isDrop ? this.renderItems(item.children, 'drop') : null }
      </div>
    });
  }

  render() {
    const { ...props } = this.props;
    return this.renderItems(items);
  }
}

export default Menu;
