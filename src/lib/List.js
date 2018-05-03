import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Box } from './';

export class List extends Component {
  render() {
    const ListItem = styled(Box)`

    `;

    const List = styled(Box)`

    `;

    return <List as='ul' direction='column'>
      <ListItem as='li'>One</ListItem>
      <ListItem as='li'>Two</ListItem>
      <ListItem as='li'>Three</ListItem>
      <ListItem as='li'>Four</ListItem>
      <ListItem as='li'>Five</ListItem>
      <ListItem as='li'>Six</ListItem>
      <ListItem as='li'>Seven</ListItem>
    </List>
  }
}

export default withTheme(List);
