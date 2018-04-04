import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { parseProperty } from './utils.js';

class Paragraph extends Component {
  _clamp(string, n) {
    return string.substring(0, n).concat('...');
  }
  render() {
    const {
      align, children, clamp, className, content, margin, size, nowrap, ...props
    } = this.props;

    const Paragraph = styled.div`
      flex:           ${nowrap ? 1 : 'none'};
      font-size:      ${parseProperty(size, 'var(--paragraph-size-!)')};
      margin:         ${parseProperty(margin, 'var(--paragraph-margin-!)')};
      overflow:       ${nowrap ? 'hidden' : 'visible'};
      text-align:     ${align};
      text-overflow:  ${nowrap ? 'ellipsis' : 'auto'};
      white-space:    ${nowrap ? 'nowrap' : 'auto'};
    `;

    let text = (typeof content === 'string' && clamp !== null)
      ? this._clamp(content, clamp) : content;
    let child = (typeof children === 'string' && clamp !== null)
      ? this._clamp(children, clamp) : children;

    return (
      <Paragraph { ...props }>
        { [ text, child ] }
      </Paragraph>
    );
  }
}

Paragraph.defaultProps = {
  align: 'left',
  margin: 'auto',
  nowrap: false,
  size: 'md'
}

Paragraph.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  margin: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl', 'none'
  ]),
  size: PropTypes.oneOf([
    'sm', 'md', 'lg'
  ])
}

export default Paragraph;
