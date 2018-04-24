import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Menu extends Component {
  _onDrop(e) {
    e.preventDefault();
    let target = e.target.nextElementSibling
      || e.target.parentElement.nextElementSibling
      || e.target.parentElement.parentElement.nextElementSibling;

    target.style.display = target.style.display !== 'block' ? 'block' : 'none';
  }

  renderItems(items, drop) {
    const MenuItem = styled(Link)`
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
        background-color: #00375d;
      }

      &.active {
        background-color: green;
        color: white;
      }
    `;

    const Drop = MenuItem.extend`
      background-color: #004575;
      padding-left: 10%;
    `;

    const Icon = styled(FontAwesomeIcon)`
      float: right;
      transform: 'none';
    `;

    let isDrop = 0, attr, icon;

    return items.map((item, key) => {
      isDrop = item.children ? item.children.length > 0 : false;

      attr = {
        key: `key_${key}`,
        id: item.id,
        to: item.path ? item.path : '',
        onClick: isDrop ? e => this._onDrop(e) : null
      }

      icon = isDrop ? <Icon icon={[ 'fal', 'angle-down' ]} /> : null

      return <Fragment key={ `key_${key}` }>
        { drop
          ? <Drop { ...attr }>{ item.name }{ icon }</Drop>
          : <MenuItem { ...attr }>{ item.name }{ icon }</MenuItem>
        }
        { isDrop
          ? <div style={{ display: 'block' }}>
              { this.renderItems(item.children, 'drop') }
            </div>
          : null
        }
      </Fragment>
    });
  }

  render() {
    const { items } = this.props;
    return <div>{ this.renderItems(items) }</div>;
  }
}

export default Menu;
