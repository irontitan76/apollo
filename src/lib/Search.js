import React, { Component } from 'react';
import styled from 'styled-components';
import { Box } from './';

export default class Search extends Component {
  render() {
    const { outline, placeholderOptions, style, ...props } = this.props;

    const Search = styled(Box)`
      &:focus::placeholder {
        color: transparent;
      }

      ::placeholder {
        ${placeholderOptions}
      }
    `;

    return <Search as='input' style={{ ...style, outline }} { ...props } />;
  }
}

Search.defaultProps = {
  border: {
    vertical: '1px solid #004575',
    horizontal: 'none'
  },
  outline: 'none',
  placeholder: 'Search...',
  placeholderOptions: 'color: var(--light); font-family: var(--font-light); opacity: 0.6;',
  type: 'text',
  width: '100%'
}
