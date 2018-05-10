import React, { Component } from 'react';
import { Box } from './../lib';

class Footer extends Component {
  render() {
    const {
      children, copyright, ...props
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
            width='1250px'>
            &copy; {copyright}
            { children }
          </Box>
      </Box>
    );
  }
}

Footer.defaultProps = {
  fill: 'transparent',
  copyright: '2018 Fusion Industries, Inc.',
  size: 'md'
};

Footer.propTypes = {

}

export default Footer;
