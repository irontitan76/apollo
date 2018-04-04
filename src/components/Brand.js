import React, { Component } from 'react';
import styled from 'styled-components';

import { Image } from './';

class Brand extends Component {
  render() {
    const { company, org, ...props } = this.props;

    const Container = styled.div`
      box-sizing: border-box;
      display: flex;
      font-size: 1rem;
      justify-content: start;
    `

    return (
      <Container key={ `key__${org}` } {...props}>
        <Image src={ require('./../assets/apollo-logo.png')} />
        &nbsp;
        <span style={{ color: 'var(--light)', fontFamily: 'open_sansbold' }}>{company}</span>&nbsp;
        <span style={{ color: 'var(--light)', fontFamily: 'open_sanslight' }}>{org}</span>
      </Container>
    );
  }
}

Brand.defaultProps = {
  company: 'APOLLO',
  org: 'INDUSTRIES'
}

export default Brand;
