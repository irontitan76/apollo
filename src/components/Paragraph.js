import React, { Component } from 'react';

import { Container } from './';
import { truncateString } from './utils.js';

class Paragraph extends Component {
  render() {
    const { children, truncate, ...props } = this.props;

    return (
      <Container { ...props }>
        { truncateString(children, truncate) }
      </Container>
    );
  }
}

export default Paragraph;
