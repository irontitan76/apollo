import React, { Component } from 'react';

import { Container, Heading, Subtitle } from './../components';

class Strategy extends Component {
  render() {
    return(
      <Container>
        <Heading as='h1' justify='center' textAlign='center'>Our strategy</Heading>
        <Subtitle justify='center' textAlign='center'>The vision comes before the venture</Subtitle>
      </Container>
    );
  }
}

export default Strategy;
