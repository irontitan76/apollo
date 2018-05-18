import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Box } from './';

const styles = `

`;

export class Hero extends Component {
  render() {
    const Hero = styled(Box)(styles);

    return <Hero>Hello Hero</Hero>;
  }
}

Hero.defaultProps = {};

export default withTheme(Hero);
