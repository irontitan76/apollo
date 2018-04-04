import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Applet extends Component {
  render() {
    const { center, children, className, maxWidth, ...props } = this.props;

    let margin, width;

    if ( center ) {
      margin = '0 auto';
      width = '100%';
    }

    const App = styled.div`
      bottom: 0;
      height: 100%;
      left: 0;
      margin: ${margin};
      max-width: ${maxWidth};
      overflow: visible;
      right: 0;
      top: 0;
      width: ${width};
    `;

    return (
      <App {...props}>
        { children }
      </App>
    )
  }
}

Applet.propTypes = {
  center: PropTypes.bool,
  margin: PropTypes.oneOf([PropTypes.number, PropTypes.string])
}

Applet.defaultProps = {
  center: true,
  margin: 0,
  maxWidth: '1200px'
}

export default Applet;
