import React, { Component } from 'react';
import styled from 'styled-components';

export default class Box extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, ...props } = this.props;
    const App = styled['div']`
      
    `;

    return <App {...props}>{children}</App>
  }
}
