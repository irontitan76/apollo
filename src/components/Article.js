import React, { Component } from 'react';

import { Container } from './../components';

export default class Article extends Component {
  render() {
    const { children, center, width, ...props } = this.props;

    let centered = center ? { margin: '!0 auto' } : null;

    return (
      <Container as='article' width='!1200px' { ...centered } { ...props }>
        { children }
      </Container>
    );
  }
}

Article.defaultProps = {
  center: true,
  direction: 'column',
  width: '1200px'
};
