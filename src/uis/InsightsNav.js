import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import { Box, Hamburger, Heading, Title } from './../lib';

export class InsightsNav extends Component {
  render() {
    return <Box alignItems='center' color='dark' fill='white' height='125px' justify='center'>
      <Box alignSelf='center' textSize='lg' width='1250px'>
        <Title alignSelf='center' textSize='xl' weight='bold' style={{ lineHeight: '1.5rem' }}>
          <span style={{ fontWeight: 400 }}>fusion</span>
          <span style={{ color: '#015085', fontSize: '2rem' }}>.</span>
          sight&nbsp;&nbsp;
        </Title>
        <Heading alignItems='center' alignSelf='center' margin={{ all: '0', top: '.4rem' }} pad={{ left: 'lg' }} size='sm'>
          <Hamburger style={{ float: 'left' }} />
          <span style={{ float: 'right', fontWeight: '700' }}>
            &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;All Topics
          </span>
        </Heading>
      </Box>
    </Box>
  }
}

export default withTheme(InsightsNav);
