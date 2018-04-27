import React, { Component } from 'react';
import styled from 'styled-components';
import { Box } from './';
import { truncateString } from './utils';

export default class Title extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, spacing, truncate, ...props } = this.props;

    const Title = styled(Box)`
      letter-spacing:         ${spacing};
      overflow:               ${truncate ? 'hidden' : 'visible'};
      text-overflow:          ${truncate ? 'ellipsis' : 'clip'};
      white-space:            ${truncate ? 'nowrap' : 'normal'};
      word-break:             break-word;
    `;

    return <Title {...props}>
      {!!truncate ? truncateString(children, truncate) : children}
    </Title>
  }
}

Title.defaultProps = {
  as: 'div',
  spacing: '2px',
  family: 'extra',
  textSize: 'lg',
  weight: 'extra'
};
