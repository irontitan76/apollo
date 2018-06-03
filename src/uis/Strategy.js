import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import { Animate, Box } from './../lib';

export class Strategy extends Component {
  render() {
    return <Animate action='fadeIn' duration='0.6s'>
      <Box alignSelf='center' as='main'>
        Strategy
      </Box>
    </Animate>;
  }
}

export default withTheme(Strategy);
