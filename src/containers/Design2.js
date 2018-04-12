import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container, Sidebar } from './../components';

class Design extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <Container>
        <Sidebar />

      </Container>
    );
  }
}

export default Design;
