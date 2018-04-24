import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container, Icon } from './';
import { parseProperty } from './utils.js';

class Button extends Component {
  render() {
    const { children, onClick, path, ...props } = this.props;

    return (
      <Container
        as='button'
        fontFamily='semi'
        onClick={ onClick }
        style={{ cursor: 'pointer' }}
        to={ path }
        { ...props }>
        { children }
      </Container>
    );
  }
}

Button.defaultProps = {
  bgColor: 'light',
  border: 'dark',
  hoverFill: 'blue',
  hoverLine: 'blue'
}

export default Button;
