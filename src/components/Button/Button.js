import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Need (an) icon library(ies) support

class Button extends Component {
  render() {
    const { children, className, color, fill, hoverColor, hoverFill, hoverLine,
      icon, label, line, onClick, pad, style, width } = this.props;

    const l = line || fill;
    const hf = hoverFill || (fill === 'light' ? 'dark' : 'light');
    const hc = hoverColor || (hf === 'light' ? 'dark' : 'light');

    let styledIcon, length, padding;

    if ( pad === 'sm' ) padding = '.50rem 1rem';
    else if ( pad === 'md' ) padding = '.75rem 2rem';
    else if ( pad === 'lg' ) padding = '1.0rem 3rem';
    else padding = 'auto';

    if ( width === 'full' ) length = '100%';
    else length = width;

    const StyledButton = styled.button`
      background: var(--${fill});
      border: ${(line === 'none' || line === null)
        ? 'none' : `2px solid var(--${line})`};
      color: var(--${color});
      cursor: pointer;
      font-family: var(--font-semibold);
      padding: ${padding};
      width: ${length};

      &:hover, &:focus {
        background: var(--${hf});
        color: var(--${hc});
      }
    `;

    const StyledText = styled.span`
      padding-top: 1.2%;
    `;

    if ( icon !== null ) {
      const StyledIcon = styled.span`
        color: var(--${color});
        padding-right: 0.5rem;

        &:hover, &:focus {
          color: var(--${hc});
        }
      `;

      styledIcon = <StyledIcon>{icon}</StyledIcon>;
    } else {
      styledIcon = null;
    }

    return (
      <StyledButton className={ className } onClick={ onClick } style={ style }>
        { styledIcon }
        <StyledText>{ [ label, children ] }</StyledText>
      </StyledButton>
    );
  }
}

const colors = ['blue', 'brown', 'dark', 'gray', 'green',
'light', 'orange', 'purple', 'red', 'yellow'];

Button.defaultProps = {
  children: null,
  className: null,
  color: 'dark',
  fill: 'light',
  hoverColor: null,
  hoverFill: null,
  hoverLine: null,
  icon: null,
  label: null,
  line: 'none',
  onClick: null,
  pad: 'md'
};

Button.propTypes = {
  fill: PropTypes.oneOf(colors),
  hoverFill: PropTypes.oneOf(colors),
  outline: PropTypes.oneOf(colors)
}

export default Button;
