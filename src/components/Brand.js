import React, { Component } from 'react';

import { Container, Image } from './';

class Brand extends Component {
  render() {
    const { color, company, noLogo, org, size, ...props } = this.props;

    return (
      <Container key={ `key__${org}` } bgColor='transparent' alignItems='center' { ...props }>
        {noLogo ? null : <Image src={ require('./../assets/apollo-logo.png')} />}
        &nbsp;
        <span style={{ color: `var(--${color})`, fontFamily: 'open_sansbold' }}>{company}&nbsp;</span>
        <span style={{ color: `var(--${color})`, fontFamily: 'open_sanslight' }}>{org}</span>
      </Container>
    );
  }
}

Brand.defaultProps = {
  color: 'light',
  company: 'APOLLO',
  org: 'INDUSTRIES',
  size: '1rem'
}

export default Brand;
