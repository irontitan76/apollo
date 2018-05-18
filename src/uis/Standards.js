import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Box, Heading } from './../lib';

export class Standards extends Component {
  render() {
    const Standards = styled(Box)`

    `;

    return <Standards as='main' direction='column' margin='0 auto'>
      <Box style={{
          backgroundImage: `url(${require('./../assets/lapse5.jpg')})`,
          backgroundPosition: 'top center',
          height: '500px',
          width: '100vw'
        }}>
        <Heading
          alignSelf='start'
          color='white'
          margin='3% auto'
          pad='xl'
          size='xl'
          weight='bolder'>
          Our standards
        </Heading>
      </Box>
    </Standards>;
  }
}

export default withTheme(Standards);
