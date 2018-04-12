import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Drop extends Component {
  render() {
    const { items } = this.props;

    const Drop = styled.a`
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

    items.map((item, key) => {
      let isDrop = Object.keys(item).length > 0;

      return <Fragment key={`key_${key}`}>
        <Drop
          id={ item }
          href={ `#${item}`}
          onClick={ isDrop ? e => this._onDrop(e) : null }
          { item.toLowerCase().charAt().toUpperCase() + item.slice(1) }
          { isDrop ? <Icon icon={['fal', 'angle-down' ]} /> : null }
        </Drop>
        { isDrop ? this._renderDrop(Drop, item) : null }
      </Fragment>
    });

    return (

    );
  }
}
