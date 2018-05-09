import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import { Animate, Box } from './../lib';

export class Strategy extends Component {
  render() {
    return <Animate action='fadeIn'>
      <Box alignSelf='center'>

      </Box>
    </Animate>;
  }
}

export default withTheme(Strategy);
