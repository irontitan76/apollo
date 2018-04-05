import React, { Component } from 'react';
import styled from 'styled-components';

import { Image } from './';

class Brand extends Component {
  render() {
    const { color, company, justify, noLogo, org, size, ...props } = this.props;

    const Container = styled.div`
      box-sizing:       border-box;
      display:          flex;
      font-size:        ${size};
      justify-content:  ${justify};
    `

    return (
      <Container key={ `key__${org}` } {...props}>
        {noLogo ? null : <Image src={ require('./../assets/apollo-logo.png')} />}
        &nbsp;
        <span style={{ color: `var(--${color})`, fontFamily: 'open_sansbold' }}>{company}</span>&nbsp;
        <span style={{ color: `var(--${color})`, fontFamily: 'open_sanslight' }}>{org}</span>
      </Container>
    );
  }
}

Brand.defaultProps = {
  color: 'light',
  company: 'APOLLO',
  justify: 'start',
  org: 'INDUSTRIES',
  size: '1rem'
}

export default Brand;
