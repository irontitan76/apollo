import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { parseProperty } from './utils.js';

class Icon extends Component {
  render() {
    const { icon, color, hoverColor } = this.props;
    let result;

    let Icon = styled.span`
      color: ${parseProperty(color, 'var(--!)')};

      &:hover, &:focus {
        color: var(--${hoverColor});
      }
    `;

    if ( icon.length > 0 ) {
      Icon = Icon.withComponent(FontAwesomeIcon);
      result = <Icon icon={icon} />
    } else {
      result = <Icon>{icon}</Icon>
    }

    return result;
  }
}

const COLORS = [
  'blue', 'brown', 'dark', 'gray', 'green', 'light', 'orange', 'purple', 'red',
  'yellow', PropTypes.string
 ];

Icon.propTypes = {
  color: PropTypes.oneOf(COLORS),
  hoverColor: PropTypes.oneOf(COLORS),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
};

Icon.defaultProps = {
  color: 'dark',
  hoverColor: 'light'
};

export default Icon;
