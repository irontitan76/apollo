import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';

export class Image extends Component {
  render() {
    const { height, src, width } = this.props;

    const Image = styled['img']`
      background-size: cover;
      height: ${height};
      width: ${width};
    `;

    return <Image src={ src } />
  }
}

Image.defaultProps = {
  height: 'auto',
  width: '100%'
}

export default withTheme(Image);
