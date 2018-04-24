import React, { Component } from 'react';
import styled from 'styled-components';
import { Box } from './';
import { getDefaults, retrieve } from './utils';

export default class Paragraph extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      align, children, contain, spacing, size, ...props
    } = this.props;

    let container = typeof contain !== 'boolean' ? contain : 768;

    const Paragraph = styled(Box)`
      line-height:            calc(${spacing} * ${retrieve(css['size'], size)});
      word-break:             break-word;
      ${!!contain
        ? `max-width: ${window.innerWidth < container ? window.innerWidth + 'px' : `${container}px`}`
        : ''};
    `;

    return <Paragraph {...props}
      textAlign={retrieve(css['align'], align)}
      textSize={retrieve(css['size'], size)}>
      {children}
    </Paragraph>;
  }
}

const css = {
  "align": {
    "name": "text-align",
    "default": 'start',
    "options": {
      "start": "left",
      "center": "center",
      "end": "right"
    }
  },
  "right": {
    "name": "text-align",
    "default": false
  },
  "size": {
    "name": "font-size",
    "default": "md",
    "options": {
      "vs": "0.85rem",
      "xs": "0.90rem",
      "sm": "0.95rem",
      "md": "1.00rem",
      "lg": "1.25rem",
      "xl": "1.50rem",
      "vl": "2.00rem"
    }
  }
}

Paragraph.defaultProps = {
  as: 'p',
  margin: { vertical: 'md' },
  color: 'dark',
  spacing: 1.4,
  ...getDefaults(css)
};