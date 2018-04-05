import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { parseProperty } from './utils.js';

class Subtitle extends Component {
  render() {
    const {
      align, children, color, content, family, form, hoverColor, margin,
      onClick, size, ...props
    } = this.props;

    const Subtitle = styled.div`
      color:            ${parseProperty(color, 'var(--!)')};
      cursor:           ${!!onClick ? 'pointer' : 'auto'};
      font-size:        ${parseProperty(size, 'var(--subtitle-size-!)')};
      font-family:      ${parseProperty(family, 'var(--font-!)')};
      margin:           ${parseProperty(margin, 'var(--subtitle-margin-!)')};
      text-align:       ${align};
      text-transform:   ${form};

      &:hover {
        color:          ${!!onClick ? `${parseProperty(hoverColor, 'var(--!)')}` : 'auto'};
      }
    `;

    return (
      <Subtitle onClick={ onClick } { ...props }>
        { [ content, children ] }
      </Subtitle>
    );
  }
}

const COLORS = [
  'blue', 'brown', 'dark', 'gray', 'green', 'light', 'orange', 'purple', 'red',
  'yellow'
 ];

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'none'];

Subtitle.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  color: PropTypes.oneOf(COLORS),
  family: PropTypes.oneOf(['light', 'regular', 'semi', 'bold', 'extra']),
  form: PropTypes.oneOf(['capitalize', 'lowercase', 'none', 'uppercase']),
  hoverColor: PropTypes.oneOf(COLORS),
  margin: PropTypes.oneOf(SIZES),
  size: PropTypes.oneOf(SIZES)
};

Subtitle.defaultProps = {
  align: 'left',
  color: 'gray',
  family: 'regular',
  form: 'none',
  hoverColor: 'blue',
  margin: 'md',
  size: 'md'
};

export default Subtitle;
