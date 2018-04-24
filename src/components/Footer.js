import React, { Component } from 'react';

import { Container } from './';

class Footer extends Component {
  render() {
    const {
      children, color, ...props
    } = this.props;

    return (
      <Container
        as='footer'
        justify='center'
        fontFamily='light'
        height='sm'
        pad='!0 2%'
        { ...props }>
          <Container
            alignItems='center'
            color='gray'
            justify='between'
            width='!1200px'>
            &copy; 2018 Apollo Industries, Inc.
            { children }
          </Container>
      </Container>
    );
  }
}

Footer.defaultProps = {
  bgColor: '!transparent',
  color: 'dark',
  size: 'md'
};

Footer.propTypes = {

}

export default Footer;
