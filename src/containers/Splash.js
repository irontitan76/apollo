import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Container, Image } from './../components';
import { Button } from './../lib';

class Splash extends Component {
  render() {
    const Title = styled(Container)`
      padding-top: 15%;

      @media (max-width: 768px) {
          padding-top: 20%;
      }
    `;

    return (
      <Fragment>
        <Title
          alignItems='center'
          bgColor='dark'
          direction='column'
          grow='1'
          justify='center'>
          <Image
            src={require('./../assets/apollo-logo-primary.png')}
            alt='logo' />
          <Button alignSelf='center'
            color='light'
            fill='blue'
            hoverColor='dark'
            hoverFill='light'
            hoverBorder='light'
            children='OUR COMPANY'
            border='blue'
            path='/values'
            style={{ marginTop: '7%' }}
            width='lg' />
        </Title>
      </Fragment>
    );
  }
}

export default Splash;
