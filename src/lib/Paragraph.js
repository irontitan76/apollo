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
      align, children, contain, maxWidth, spacing, size, ...props
    } = this.props;

    let container = typeof contain !== 'boolean' ? contain : 768;
    let maximumWidth = !!contain ? window.innerWidth < container
      ? window.innerWidth + 'px'
      : `${container}px`
    : '';

    const Paragraph = styled(Box)`
      line-height:            calc(${spacing} * ${retrieve(css['size'], size)});
      word-break:             break-word;
      ${!!contain
        ? `max-width: ${maximumWidth}`
        : ''};
    `;

    return <Paragraph {...props}
      maxWidth={maximumWidth}
      textAlign={ align }
      textSize={retrieve(css['size'], size)}>
      {children}
    </Paragraph>;
  }
}

const css = {
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
  align: 'start',
  as: 'p',
  margin: { vertical: 'md' },
  color: 'dark',
  spacing: 1.4,
  ...getDefaults(css)
};
