import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Box } from './../../lib';

export class Primary extends Component {
  render() {
    const Primary = styled(Box)`

    `;

    return (
      <Primary>Test</Primary>
    );
  }
}

export default withTheme(Primary);
