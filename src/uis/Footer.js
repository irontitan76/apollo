import React, { Component } from 'react';
import { Box } from './../lib';

class Footer extends Component {
  render() {
    const {
      children, ...props
    } = this.props;

    return (
      <Box
        as='footer'
        height='xs'
        justify='center'
        pad='0 2%'
        weight='light'
        { ...props }>
          <Box
            alignItems='center'
            color='gray'
            height='xs'
            justify='between'
            width='1200px'>
            &copy; 2018 Fusion Industries, Inc.
            { children }
          </Box>
      </Box>
    );
  }
}

Footer.defaultProps = {
  fill: 'transparent',
  size: 'md'
};

Footer.propTypes = {

}

export default Footer;
