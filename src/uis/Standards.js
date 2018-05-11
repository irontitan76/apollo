import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Box } from './../lib';

export class Standards extends Component {
  render() {
    const Standards = styled(Box)`

    `;

    return <Standards as='main'>
      Standards
    </Standards>;
  }
}

export default withTheme(Standards);
