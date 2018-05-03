import React, { Component } from 'react';
import { Box } from './../lib';

class Footer extends Component {
  render() {
    const {
      children, color, ...props
    } = this.props;

    return (
      <Box
        as='footer'
        justify='center'
        fontFamily='light'
        height='sm'
        pad='0 2%'
        { ...props }>
          <Box
            alignItems='center'
            color='gray'
            justify='between'
            width='1200px'>
            &copy; 2018 Apollo Industries, Inc.
            { children }
          </Box>
      </Box>
    );
  }
}

Footer.defaultProps = {
  fill: 'transparent',
  color: 'dark',
  size: 'md'
};

Footer.propTypes = {

}

export default Footer;
