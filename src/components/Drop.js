import React, { Component } from 'react';
import styled from 'styled-components';

import { Button, Container } from './';

class Drop extends Component {
  _openDropdown (e) {
    e.preventDefault(e);
    let targetStyle = e.target.nextElementSibling.style;
    targetStyle.display = targetStyle.display !== 'block' ? 'block' : 'none';
  }

  render() {
    const {
      headers, icon, items, name, onHover, pad, up, ...props
    } = this.props;

    const Drop = styled(Container)`
      display:              inline-block;
      position:             ${up ? 'relative' : 'absolute'};

      &:hover > div, &:focus > div {
        display:            ${onHover ? 'block' : 'auto'};
      }
    `;

    const Parent = styled(Button)`
      border:               none;
      color:                white;
      cursor:               pointer;
      font-size:            14px;
      padding:              14px;

      &:hover, &:focus {
        background-color:   var(--blue);
        color:              var(--light);
      }
    `;

    const Header = styled.div`
      font-family:          var(--font-semibold);
      font-size:            12px;
      padding:              8px 14px;

      &:hover, &:focus {
        background-color:   var(--blue);
        color:              var(--light);
      }
    `;

    const Menu = styled.div`
      background-color:     #f1f1f1;
      bottom:               100px;
      box-shadow:           0px 8px 16px 0px rgba(0,0,0,0.2);
      display:              none;
      position:             absolute;
      overflow:             auto;
      width:                100%;
      z-index:              1;
    `;

    const MenuItem = styled.a`
      color:                black;
      cursor:               pointer;
      display:              block;
      font-size:            12px;
      padding:              12px 14px;
      text-decoration:      none;

      &:hover, &:focus {
        background-color:   var(--blue);
        color:              var(--light);
      }
    `;

    let result;
    if ( items === undefined ) {
      result = null;
    } else if ( items.length > 0 ) {
      result = items.map((item, key) => (
        <MenuItem key={`key__${key}`}>{item}</MenuItem>)
      );
    } else if ( typeof items === 'object' ) {
      result = Object.keys(items).map((item, key) => {
         return [
           <Header key={`key__${key}`}>{item}</Header>,
           items[item].map((subItem, i) => (
             <MenuItem key={`key__${i}`}>{subItem}</MenuItem>)
            )
         ]
      });
    }

    return (
      <Drop {...props}>
        <Parent onClick={(e) => this._openDropdown(e)}>{ name }</Parent>
        <Menu>
          { result }
        </Menu>
      </Drop>
    );
  }
};

Drop.defaultProps = {
  onHover: true,
  up: false
};

export default Drop;
