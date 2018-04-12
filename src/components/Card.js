import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Heading, Image, Subtitle } from './';

class Card extends Component {
  render() {
    const {
      content, image, meta, heading, ...props
    } = this.props;

    return (
      <Container bgColor='light' direction='column' width='!250px' height='!100%' {...props}>
        <Image alt='test' src={require( './../assets/bg4.jpg' )} />
        <Heading content={ heading } size='sm'></Heading>
        { content }
        <Subtitle margin='!2% 0' size='!0.8rem'>{ meta }</Subtitle>
      </Container>
    );
  }
}

Card.defaultProps = {

}

export default Card;
