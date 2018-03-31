import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    const { alignItems, bgColor, border, children, className, color, content,
      full, height, justify, size, style, width } = this.props;

    const Footer = styled.div`
      background-color: ${full ? `var(--${bgColor})` : 'transparent'};
    `;

    let ht;
    if ( height === 'xs' ) ht = '50px';
    else if ( height === 'sm' ) ht = '75px';
    else if ( height === 'md' ) ht = '100px';
    else if ( height === 'lg' ) ht = '200px';
    else if ( height === 'xl' ) ht = '300px';
    else ht = height;

    const Container = styled.div`
      align-items: ${alignItems};
      background-color: var(--${bgColor});
      color: var(--${color});
      display: flex;
      height: ${ht};
      justify-content: flex-${justify};
      margin: ${width === 'none' ? 'auto' : '0 auto'};
      max-width: ${width};
    `;

    return (
      <Footer>
        <Container className={ className } style={ style }>
          { [ content, children ] }
        </Container>
      </Footer>
    )
  }
}

Footer.defaultProps = {
  alignItems: 'left',
  bgColor: 'transparent',
  border: 'none',
  children: null,
  color: 'dark',
  content: null,
  full: true,
  height: 'md',
  justify: null,
  width: 'none'
};

Footer.propTypes = {
  alignItems: PropTypes.string
}

export default Footer;
