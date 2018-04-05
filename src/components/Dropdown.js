import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Dropdown extends Component {
  render() {
    const { headers, icon, items, name, ...props } = this.props;

    const Dropdown = styled.div`

    `;

    const List = styled.ul`
      list-style-type: none;
      padding: 0;
    `;

    const ListItem = styled.li`
      padding: 0.5rem;

      &:first-child {
        background-color: var(--blue);
      }

      &:not(:first-child) {
        background-color: var(--dark);
        padding-left: 0.5rem;
      }
    `;

    return (
      <Dropdown {...props}>
        <List>
          <ListItem>Header</ListItem>
          <ListItem>Item 1</ListItem>
          <ListItem>Separator</ListItem>
          <ListItem>Item 2</ListItem>
        </List>
      </Dropdown>
    );
  }
};

export default Dropdown;
