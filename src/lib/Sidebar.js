import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Box } from './';
import { find } from './utils';

export class Sidebar extends Component {
  render() {
    const {
      children, height, fixed, scrollColor, scrollThumbColor,
      scrollThumbHoverColor, scroll, side, theme: { brand }, width, ...props
    } = this.props;

    const Sidebar = styled(Box)`
      overflow-x:           hidden;
      overflow-y:           ${!!scroll ? 'scroll' : 'hidden'};
      position:             ${fixed ? 'fixed' : 'static'};
      top:                  ${fixed ? '0' : 'auto'};
      ${side}:              0;
      z-index:              1;


      ::-webkit-scrollbar {
        width:              ${scroll.width};
      }

      ::-webkit-scrollbar-track {
        background:         ${find(brand, 'colorIndex', scroll.color)};
      }

      ::-webkit-scrollbar-thumb {
        background:         ${find(brand, 'colorIndex', scroll.thumbColor)};
      }

      ::-webkit-scrollbar-thumb:hover {
        background:         ${find(brand, 'colorIndex', scroll.thumbHoverColor)};
      }

      @media ( max-width: 768px ) {
        height: auto;
        position: static;
        top: auto;
        ${side}: auto;
        width: 100% !important;
      }
    `;

    return <Sidebar as='nav'
      direction='column'
      height={height}
      width={width}
      {...props}>
      {children}
    </Sidebar>
  }
}

Sidebar.defaultProps = {
  height: '100%',
  fill: 'white',
  fixed: true,
  scroll: {
    color: 'light',
    thumbColor: '#ddd',
    thumbHoverColor: 'dark'
  },
  width: 'md'
}

export default withTheme(Sidebar);
