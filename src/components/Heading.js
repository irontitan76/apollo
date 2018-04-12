import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Heading extends Component {
  render() {
    const {
      align, children, className, content, form, onClick, size, style
    } = this.props;

    let { margin, weight } = this.props;

    let fontSize, mgn, wgt;

    if ( size === 'xs' ) fontSize = '1.2rem';
    else if ( size === 'sm' ) fontSize = '1.2rem';
    else if ( size === 'md' ) fontSize = '1.5rem';
    else if ( size === 'lg' ) fontSize = '2.0rem';
    else if ( size === 'xl' ) fontSize = '3.0rem';
    else fontSize = size || '1.5rem';

    if ( weight === 'light' ) wgt = 'font-family: var(--font-light);';
    else if ( weight === 'normal' ) wgt = 'font-family: var(--font-regular);';
    else if ( weight === 'semi' ) wgt = 'font-family: var(--font-semibold);';
    else if ( weight === 'bold' ) wgt = 'font-family: var(--font-bold);';
    else if ( weight === 'extra' ) wgt = 'font-family: var(--font-extrabold);';
    else wgt = `font-weight: ${weight};`;

    if ( margin === null ) margin = size;
    if ( margin === 'xs' ) mgn = '2.667% 0 0.667% 0';
    else if ( margin === 'sm' ) mgn = '3% 0 1% 0';
    else if ( margin === 'md' ) mgn = '4% 0 1.334% 0';
    else if ( margin === 'lg' ) mgn = '5.334% 0 2% 0';
    else if ( margin === 'xl' ) mgn = '8% 0 2.667% 0';
    else mgn = margin;

    const Heading = styled.div`
      cursor:         ${onClick === null ? 'auto' : 'pointer'}
      font-size:      ${fontSize};
      margin:         ${mgn};
      text-align:     ${align};
      text-transform: ${form};
      ${wgt};
    `;

    return (
      <Heading className={ className } onClick={ onClick } style={ style }>
        { [ content, children ] }
      </Heading>
    );
  }
}

Heading.defaultProps = {
  align: 'left',
  form: 'none',
  margin: null,
  onClick: null,
  size: 'md',
  weight: 'semi'
}

Heading.propTypes = {
  align: PropTypes.oneOf([ 'left', 'center', 'right' ]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  form: PropTypes.oneOf([ 'capitalize', 'lowercase', 'none', 'uppercase' ]),
  margin: PropTypes.oneOf(
    [ 'xs', 'sm', 'md', 'lg', 'xl', 'none', PropTypes.number ]),
  size: PropTypes.oneOf(
    [ 'xs', 'sm', 'md', 'lg', 'xl', PropTypes.string ]),
  weight: PropTypes.oneOf(
    [ 'light', 'regular', 'semi', 'bold', 'extra', PropTypes.string ])
}

export default Heading;
