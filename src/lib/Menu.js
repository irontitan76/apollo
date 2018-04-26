import React, { Component } from 'react';
import styled from 'styled-components';

import { Anchor, Box } from './';

export default class Menu extends Component {
  render() {
    let { children, menu, title, size, ...props } = this.props;

    // position: absolute && z-index: 1 for overlap border-top: 1px solid #004575;
    const Dropdown = styled(Box)`
      &:hover div {
        display: flex;
      }
    `;
    const DropdownContent = styled(Box)`
      box-shadow: inset 0 8px 6px -6px #00375d, inset 0 -6px 6px -6px #00375d;
      max-height: 0;
      overflow-y: hidden;
      transition: all .3s ease-in;
    `;

    return <Dropdown direction='column' fill='blue' width='full' {...props}>

      <Anchor
        color={ menu.color }
        justify='center'
        pad={{ vertical: 'sm' }}
        textSize='sm'
        onClick={(e) => {
          let target = e.target.nextElementSibling;
          target.style.maxHeight = target.style.maxHeight ? null : '200px';
        }}>
        {title}
      </Anchor>

      <DropdownContent direction='column' fill={ menu.fill } justify='center'>
        {children}
      </DropdownContent>

    </Dropdown>;
  }
}

Menu.defaultProps = {
  menu: {
    color: 'black',
    fill: 'transparent'
  }
}
