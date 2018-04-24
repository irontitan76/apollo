import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './';
import { truncateString } from './utils.js';

class Heading extends Component {
  render() {
    const { as, children, margin, truncate, ...props } = this.props;

    let m = `${margin.charAt() === '!'
      ? margin
      : `!var(--heading-margin-${margin})`}`;

    return (
      <Container
        fontSize={ as }
        margin={ m }
        { ...props }>
        { truncateString(children, truncate) }
      </Container>
    );
  }
}

Heading.defaultProps = {
  fontFamily: 'semi',
  form: 'none',
  margin: 'xs'
}

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  form: PropTypes.oneOf([ 'capitalize', 'lowercase', 'none', 'uppercase' ]).isRequired,
}

export default Heading;
