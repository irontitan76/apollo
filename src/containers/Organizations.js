import React, { Component } from 'react';
import styled from 'styled-components';
import { items } from './../data/info.js';

import { Container, Heading, Subtitle, Tabs } from './../components';

class Organizations extends Component {
  constructor(props) {
    super(props);

    this.state = { items };
  }

  render() {
    const Organizations = styled(Container)`
      animation: fadeIn 1s;
    `;

    return (
      <Organizations direction='column' justify='center'>
        <div>
          <Heading as='h1' justify='center' margin='md'>Our Structure</Heading>
          <Subtitle justify='center' margin='none'>
            An organization is only as good as the people within
          </Subtitle>
        </div>
        <Tabs items={ this.state.items }/>
      </Organizations>
    );
  }
}

export default Organizations;
