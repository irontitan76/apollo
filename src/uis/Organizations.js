import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import { Box, Navbar } from './../lib';
import Brand from './Brand';

export class Organizations extends Component {
  render() {
    const Orgs = styled(Box)`

    `;

    return <Orgs as='main' direction='column'>
      Organizations
      <Navbar title={ <Brand /> }>
        <Box alignSelf='center' grow='1' justify='end'>
          <Box as={NavLink} color='white' margin={{ horizontal: 'lg' }} to='/values' weight='light'>Values</Box>
          <Box as={NavLink} color='white' margin={{ horizontal: 'lg' }} to='/strategy' weight='light'>Strategy</Box>
          <Box as={NavLink} color='white' margin={{ horizontal: 'lg' }} to='/standards' weight='light'>Standards</Box>
          <Box as={NavLink} color='white' margin={{ horizontal: 'lg' }} to='/insights' weight='light'>Insights</Box>
          <Box as={NavLink} color='white' margin={{ horizontal: 'lg' }} to='/orgs' weight='light'>Organizations</Box>
        </Box>
      </Navbar>
    </Orgs>;
  }
}

export default withTheme(Organizations);
