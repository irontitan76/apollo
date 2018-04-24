import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class App extends Component {
  render() {
    const { center, maxWidth, ...props } = this.props;

    let margin, width;

    if ( center ) {
      margin = '0 auto';
      width = '100%';
    }

    const App = styled.article`
      bottom:     0;
      height:     100%;
      left:       0;
      margin:     ${margin};
      max-width:  ${maxWidth};
      overflow:   visible;
      right:      0;
      top:        0;
      width:      ${width};
    `;

    return <App {...props} />;
  }
}

App.propTypes = {
  center: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

App.defaultProps = {
  center: false,
  margin: 0,
  maxWidth: '1200px'
}

export default App;
