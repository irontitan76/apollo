import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Box, Title } from './'

export class Navbar extends Component {
  render() {
    const { children, color, theme, title, weight, ...props } = this.props;
    // const { frame } = theme;

    const Navbar = styled(Box)`
      box-shadow: 0 8px 6px -6px #999;
    `;

    return <Navbar as='nav' {...props}>
      <Title color={ color } weight={ weight }>{title}</Title>
      {children}
    </Navbar>;
  }
}

Navbar.defaultProps = {
  color: 'white',
  fill: 'primary',
  height: '60px',
  margin: { vertical: 'md' },
  pad: 'md',
  weight: 'light'
};

Navbar.propTypes = {
  children: PropTypes.node,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  titleProps: PropTypes.object
}

export default withTheme(Navbar);
