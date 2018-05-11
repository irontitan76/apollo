import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Box } from './../lib';

export class Organizations extends Component {
  render() {
    const Orgs = styled(Box)`

    `;

    return <Orgs as='main'>
      Organizations
    </Orgs>;
  }
}

export default withTheme(Organizations);
