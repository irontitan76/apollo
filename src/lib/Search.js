import React, { Component } from 'react';
import styled from 'styled-components';
import { Box } from './';

export default class Search extends Component {
  // create Search Suggestion dropdown/up logic
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
  outline: 'none',
  placeholder: 'Search...',
  placeholderOptions: '',
  type: 'text',
  width: '100%'
}
