import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Search extends Component {
  render() {
    const { ...props } = this.props;

    const SearchBar = styled.input`
      background-color: var(--blue);
      border: none;
      border-bottom: 1px solid #004575;
      border-top: 1px solid #004575;
      box-sizing: border-box;
      color: var(--light);
      display: flex;
      outline: none;
      overflow: hidden;
      padding: 8% 0 8% 8%;
      width: 100%;

      ::placeholder {
        color: var(--light);
        font-family: var(--font-light);
        opacity: 0.6;
      }
    `;

    return <SearchBar { ...props } />
  }
}

Search.propTypes = {
  className: PropTypes.string
};

Search.defaultProps = {
  placeholder: 'Search...',
  type: 'text'
};

export default Search;
