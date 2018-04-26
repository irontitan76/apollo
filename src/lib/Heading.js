import React, { Component } from 'react';
import styled from 'styled-components';
import { Box } from './';
import { getDefaults, retrieve, truncateString } from './utils';

export default class Heading extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    let {
      as, capitalize, children, lowercase, margin, uppercase, family,
      size, weight, truncate, ...props
    } = this.props;

    const Heading = styled(Box)`
      overflow:               ${truncate ? 'hidden' : 'visible'};
      text-overflow:          ${truncate ? 'ellipsis' : 'clip'};
      text-transform:         ${uppercase ? 'uppercase'
                                : lowercase ? 'lowercase'
                                : capitalize ? 'capitalize'
                                : 'none'
                              };
      white-space:            ${truncate ? 'nowrap' : 'normal'};
      word-break:             break-word;
    `;

    size = !size ? as === 'h1' ? 'vl'
      : as === 'h2' ? 'xl'
      : as === 'h3' ? 'lg'
      : as === 'h4' ? 'md'
      : as === 'h5' ? 'sm'
      : as === 'h6' ? 'xs'
      : 'vl' : size;

    return <Heading {...props}
        as={as}
        display='block'
        family={ family }
        margin={ margin }
        textSize={ retrieve(css['size'], size) }
        weight={ weight }>
        {!!truncate ? truncateString(children, truncate) : children}
      </Heading>
  }
}

const css = {
  "as": {
    "name": "as",
    "default": "h2",
    "options": {
      "h1": "h1",
      "h2": "h2",
      "h3": "h3",
      "h4": "h4",
      "h5": "h5",
      "h6": "h6"
    }
  },
  "size": {
    "name": "font-size",
    "default": "lg",
    "options": {
      "vs": "0.80rem",
      "xs": "1.00rem",
      "sm": "1.20rem",
      "md": "1.50rem",
      "lg": "2.00rem",
      "xl": "2.50rem",
      "vl": "3.00rem"
    }
  }
};

Heading.defaultProps = {
  family: 'light',
  margin: { top: 'vl', bottom: 'sm' },
  size: 'vl',
  weight: 'light',
  ...getDefaults(css)
};
