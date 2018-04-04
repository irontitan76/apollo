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

    const Container = styled.div`
      align-items: ${alignItems};
      background-color: var(--${bgColor});
      color: var(--${color});
      display: flex;
      height: ${height.length > 2 ? height : `var(--footer-height-${height})`};
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