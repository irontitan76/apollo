import React, { Component } from 'react';
import styled from 'styled-components';


import Button from './../components/Button';
import Image from './../components/Image';

class Splash extends Component {
  render() {
    const Splash = styled.div`
      background-color: var(--dark);
      color:            var(--light);
      min-height:       100vh;
      text-align:       center;
    }`

    const Title = styled.div`
      padding-top: 15%;

      @media (max-width: 768px) {
          padding-top: 20%;
      }
    `;

    return (
      <Splash>
        <Title>
          <Image
            style={{ display: 'block', margin: 'auto auto 7% auto' }}
            src={require('./../assets/apollo-logo-primary.png')}
            alt='logo' />
          <Button
            color='light'
            fill='blue'
            hoverColor='dark'
            hoverFill='light'
            hoverLine='light'
            label='OUR COMPANY'
            line='blue'
            path='/values'
            width='lg'
            />
        </Title>
      </Splash>
    );
  }
}

export default Splash;
