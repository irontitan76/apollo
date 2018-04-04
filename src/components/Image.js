import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Image extends Component {
  render() {
    const {
      alt,
      avatar,
      className,
      height,
      onClick,
      responsive,
      size,
      src,
      style,
      width } = this.props;

    let h, maxWidth, w;

    if ( responsive ) { h = 'auto'; maxWidth = 'max-width: 100%;'; }
    else if ( size === 'xs' ) { h = '3rem'; w = '3rem'; }
    else if ( size === 'sm' ) { h = '8rem'; w = '8rem'; }
    else if ( size === 'md' ) { h = '16rem'; w = '16rem'; }
    else if ( size === 'lg' ) { h = '24rem'; w = '24rem'; }
    else if ( size === 'xl' ) { h = '32rem'; w = '32rem'; }
    else if ( size === 'full' ) { h = '100%'; w = '100%'; }
    else { h = height; w = width; }

    const Image = styled.img`
      height: ${h};
      ${maxWidth}
      width: ${w};
    `;

    return <Image alt={ alt } className={ className } src={ src } style={ style } />;
  }
}

Image.defaultProps = {
  align: 'start',
  alt: 'unknown',
  avatar: false,
  onClick: null,
  responsive: true,
  size: 'full'
}

Image.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  margin: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl', 'none'
  ]),
  size: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl', 'full'
  ])
}

export default Image;
