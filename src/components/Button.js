import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from './Icon';

import { parseProperty } from './utils.js';

class Button extends Component {
  render() {
    const {
      children, className, color, fill, hoverColor, hoverFill, hoverLine, href,
      icon, label, line, onClick, pad, path, primary, reverse, round, secondary,
      style, width
    } = this.props;

    let Button = styled.button`
      background:       ${parseProperty(fill, 'var(--!)')};
      border-color:     ${parseProperty(`${line === null ? fill : line}`, 'var(--!)')};
      border-style:     solid;
      border-width:     2px;
      border-radius:    ${round === true ? '50%' : round};
      box-sizing:       border-box;
      color:            ${parseProperty(color, 'var(--!)')};
      cursor:           var(--btn-cursor);
      display:          inline-block;
      font-family:      var(--btn-fontFamily);
      font-size:        0.8rem;
      padding:          ${parseProperty(pad, 'var(--btn-padding-!)')};
      text-align:       center;
      text-decoration:  none;
      width:            ${parseProperty(width, 'var(--btn-width-!)')};

      &:hover, &:focus {
        background:     ${parseProperty(hoverFill, 'var(--!)')};
        border-color:   ${parseProperty(`${hoverLine === null ? hoverFill : hoverLine }`, 'var(--!)')};
        border-style:   solid;
        border-width:   2px;
        color:          ${parseProperty(hoverColor, 'var(--!)')};
      }

      svg {
        padding-left:   ${reverse ? '10px' : 0};
        padding-right:  ${!reverse ? '10px' : 0};
      }

      &:hover svg, &:focus svg {
        color:          ${parseProperty(hoverColor, 'var(--!)')};
      }
    `;

    if ( primary ) {
      Button = Button.extend`
        background:     var(--primary);
        border-color:   var(--primary);
        color:          var(--light);

        &:hover, &:focus {
          background:   var(--light);
          border-color: var(--primary);
          color:        var(--primary);
        }

        svg {
          color:        var(--light);
        }

        &:hover svg, &:focus svg {
          color:        var(--primary);
        }
      `;
    } else if ( secondary ) {
      Button = Button.extend`
        background:     var(--light);
        border-color:   var(--secondary);
        color:          var(--secondary);

        &:hover, &:focus {
          background:   var(--secondary);
          border-color: var(--secondary);
          color:        var(--light);
        }

        svg {
          color:        var(--secondary);
        }

        &:hover svg, &:focus svg {
          color:        var(--light);
        }
      `;
    }

    const LinkOrButton = !!path ? Button.withComponent(Link) : Button;

    let one = icon !== undefined
      ? <Icon key={ 0 } icon={ icon } color={ color } hoverColor={ hoverColor } />
      : null;
    let two = [ label, children ];
    let order = reverse ? order = [two, one] : [one, two];

    return (
      <LinkOrButton
        className={ className }
        href={ href }
        onClick={ onClick }
        to={ path }
        style={ style }>
        { order }
      </LinkOrButton>
    );
  }
}

const COLORS = [
  'blue', 'brown', 'dark', 'gray', 'green', 'light', 'orange', 'purple', 'red',
  'yellow', PropTypes.string
 ];

 const SIZES = [
   'xs', 'sm', 'md', 'lg', 'xl', PropTypes.string
 ];

Button.propTypes = {
  color: PropTypes.oneOf(COLORS),
  fill: PropTypes.oneOf(COLORS),
  hoverColor: PropTypes.oneOf(COLORS),
  hoverFill: PropTypes.oneOf(COLORS),
  hoverLine: PropTypes.oneOf(COLORS),
  line: PropTypes.oneOf(COLORS),
  pad: PropTypes.oneOf(SIZES),
  width: PropTypes.oneOf(SIZES)
}

Button.defaultProps = {
  color: 'dark',
  fill: 'light',
  hoverColor: 'light',
  hoverFill: 'dark',
  hoverLine: 'dark',
  line: 'dark',
  pad: 'md',
  width: 'md'
};

export default Button;
