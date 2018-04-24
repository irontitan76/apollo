import React, { Component } from 'react';
import styled from 'styled-components';
import { Box } from './';
import { colors, getDefaults, retrieve } from './utils';

export default class Sidebar extends Component {
  render() {
    const {
      children, height, fixed, scrollColor, scrollThumbColor,
      scrollThumbHoverColor, side, width, ...props
    } = this.props;

    const Sidebar = styled(Box)`
      overflow-x:           hidden;
      overflow-y:           scroll;
      position:             ${fixed ? 'fixed' : 'static'};
      top:                  ${fixed ? '0' : 'auto'};
      ${side}:              0;
      z-index:              1;

      ::-webkit-scrollbar {
        width:              7px;
      }

      ::-webkit-scrollbar-track {
        background:         ${retrieve(css['scrollColor'], scrollColor)};
      }

      ::-webkit-scrollbar-thumb {
        background:         ${retrieve(css['scrollThumbColor'], scrollThumbColor)};
      }

      ::-webkit-scrollbar-thumb:hover {
        background:         ${retrieve(css['scrollThumbHoverColor'], scrollThumbColor)};
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

const css = {
  "scrollColor": {
    "name": "::-webkit-scrollbar-track",
    "default": "light",
    "options": colors
  },
  "scrollThumbColor": {
    "name": "::-webkit-scrollbar-thumb",
    "default": "#ddd",
    "options": colors
  },
  "scrollThumbColor": {
    "name": "::-webkit-scrollbar-thumb:hover",
    "default": "dark",
    "options": colors
  }
};

Sidebar.defaultProps = {
  height: '100%',
  fixed: true,
  width: 'md',
  ...getDefaults(css)
}
