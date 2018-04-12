import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { parseProperty } from './utils';

class Sidebar extends Component {
  render() {
    const { bgColor, brand, children, fixed, scrollColor, scrollThumbColor,
      scrollThumbHoverColor, side, width, ...props
    } = this.props;

    const Sidebar = styled.nav`
      background:           ${parseProperty(bgColor, 'var(--!)')};
      font-size:            var(--font-size-sm);
      height:               100%;
      overflow-x:           hidden;
      overflow-y:           scroll;
      position:             ${fixed ? 'fixed' : 'static'};
      top:                  ${fixed ? '0' : 'auto'};;
      width:                ${width};
      z-index:              1;
      ${side}:              0;

      ::-webkit-scrollbar {
        width:              10px;
      }

      ::-webkit-scrollbar-track {
        background:         ${parseProperty(scrollColor, 'var(--!)')};
      }

      ::-webkit-scrollbar-thumb {
        background:         ${parseProperty(scrollThumbColor, 'var(--!)')};;
      }

      ::-webkit-scrollbar-thumb:hover {
        background:         ${parseProperty(scrollThumbHoverColor, 'var(--!)')};
      }
    `;

    return (
      <Sidebar { ...props }>{ children }</Sidebar>
    );
  }
}

Sidebar.defaultProps = {
  bgColor: 'dark',
  fixed: true,
  left: true,
  right: false,
  scrollColor: 'light',
  scrollThumbColor: '!#ddd',
  scrollThumbHoverColor: 'dark',
  width: '250px'
};

export default Sidebar;
