import React, { Component } from 'react';
import styled from 'styled-components';

import { Container } from './';
import { parseProperty, truncateString } from './utils.js';

class Subtitle extends Component {
  render() {
    const {
      children, size, truncate, ...props
    } = this.props;

    const Subtitle = styled(Container)`
      font-size:        ${parseProperty(size, 'var(--font-size-!)')};
    `;

    return <Subtitle { ...props }>
      { truncateString(children, truncate) }
    </Subtitle>;
  }
}

Subtitle.defaultProps = {
  color: 'gray',
  fontFamily: 'regular',
  form: 'none',
  hoverColor: 'primary',
  size: 'xl'
};

export default Subtitle;
