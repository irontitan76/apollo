import React, { Component } from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { getDefaults, retrieve } from './utils';
import { contrast } from './utils';

import { Box } from './';

export default class Button extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    let {
      children, border, color, fill, height, hoverBorder, hoverColor, hoverFill,
      method, outline, path, primary, secondary, size, width, ...props
    } = this.props;

    if ( !!size ) {
      height = size;
      width = size;
    }

    const Button = styled(Box)`
      outline: none;
    `;

    if ( primary ) {
      color = color || contrast(fill);
      hoverBorder = hoverBorder || fill;
      hoverFill = hoverFill || 'light';
      hoverColor = hoverColor || fill;
    } else if ( secondary ) {
      border = border || fill;
      color = color || fill;
      hoverBorder = hoverBorder || contrast(fill);
      hoverColor = hoverColor || contrast(fill);
      hoverFill = hoverFill || fill;
      fill = 'light';
    } else {
      border = border || '3px solid transparent';
      color = color || 'dark';
      fill = fill || 'light';
      hoverBorder = hoverBorder || 'dark';
      hoverColor = hoverColor || 'dark';
      hoverFill = hoverFill || 'light';
    }

    return <Button as={!!path ? Link : 'button' }
      border={ border }
      color={ color }
      fill={ fill }
      hoverBorder={ hoverBorder }
      hoverColor={ hoverColor }
      hoverFill={ hoverFill }
      to={ path }
      replace={method === 'replace'}
      height={retrieve(css['height'], height)}
      width={retrieve(css['width'], width)}
      {...props}
    >{children}</Button>
  }
}

const css = {
  "height": {
    "name": "height",
    "default": "md",
    "options": {
      "vs": "0.44rem",
      "xs": "0.88rem",
      "sm": "1.75rem",
      "md": "3.50rem",
      "lg": "4.50rem",
      "xl": "6.00rem",
      "vl": "7.50rem",
      "full": "100%"
    }
  },
  "width": {
    "name": "width",
    "default": "md",
    "options": {
      "vs": "1.25rem",
      "xs": "2.5rem",
      "sm": "5rem",
      "md": "10rem",
      "lg": "20rem",
      "xl": "30rem",
      "vl": "40rem",
      "full": "100%"
    }
  }
};

Button.defaultProps = {
  alignItems: 'center',
  justify: 'center',
  method: 'push',
  pad: 'md',
  family: 'semi',
  textAlign: 'center',
  textSize: 'md',
  weight: 'semi',
  width: 'md',
  ...getDefaults(css)
};
