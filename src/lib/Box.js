import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { find, parse } from './utils';

// FUTURE DISCUSSION: BREAK BOX UP INTO TWO CORE COMPONENTS - "BOX" AND "TEXT"
// BOX WOULD BE THE CORE CONTAINER ELEMENT
// TEXT WOULD BE THE CORE FONT ELEMENT

export class Box extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  // need to figure out a pad between option for children of Box
  // fix texture
  render() {
    let {
      alignContent, alignItems, alignSelf, as, basis, border, children, color,
      cursor, decor, direction, display, fill, full, grow, height, hoverBorder,
      hoverColor, hoverFill, justify, margin, maxHeight, maxWidth, onClick, pad,
      reverse, responsive, responsiveOptions, shrink, textAlign, family,
      textSize, weight, texture, width, wrap, theme, ...props
    } = this.props;

    // Expand child functionality, e.g., pad.between & margin.between
    const { frame, brand } = theme;

    const styles = `
      align-content:      ${find(frame, 'alignContent', alignContent)}
      align-items:        ${find(frame, 'alignItems', alignItems)};
      align-self:         ${find(frame, 'alignSelf', alignSelf)};
      background:         ${brand.colorIndex[fill] || fill};
      background-image:   ${!!texture ? `url(${texture})`: 'none'};
      background-position:${!!texture ? 'center center' : '0% 0%'};
      background-repeat:  no-repeat;
      background-size:    cover;
      box-sizing:         border-box;
      color:              ${brand.colorIndex[color] || color};
      cursor:             ${!!(onClick || hoverBorder || hoverColor || hoverFill)
                            ? 'pointer' : 'auto'};
      display:            ${find(frame, 'display', display)};
      flex:               ${find(frame, 'grow', grow)}
                          ${find(frame, 'shrink', shrink)}
                          ${find(frame, 'basis', basis)};
      flex-direction:     ${find(frame, 'direction', direction)};
      flex-wrap:          ${find(frame, 'wrap', wrap)};
      font-family:        ${brand.font[family] || family};
      font-size:          ${brand.textSize[textSize] || textSize};
      font-weight:        ${brand.weight[weight] || weight};
      height:             ${find(frame, 'height', height)};
      justify-content:    ${find(frame, 'justify', justify)};
      max-height:         ${maxHeight};
      max-width:          ${maxWidth};
      text-align:         ${textAlign};
      text-decoration:    none;
      width:              ${find(frame, 'width', width)};

      ${parse(brand, 'border', border) || 'border:none;'};
      ${parse(frame, 'pad', pad, 'padding') || 'padding:0;'};
      ${parse(frame, 'margin', margin) || 'margin:0;'};

      &:hover {
        background:         ${brand.colorIndex[hoverFill] || hoverFill};
        color:              ${brand.colorIndex[hoverColor] || hoverColor};

        ${parse(brand, 'border', hoverBorder) || parse(brand, 'border', border)};
      }

      @media ( max-width: 768px ) {
        flex-direction: ${!!responsive
          ? direction === 'row' ? 'column' : 'row'
          : find(frame, 'direction', direction) };

          * {
            padding-${!!responsive ? 'top' : 'left'}: ${pad.between};
            margin-${!!responsive ? 'top' : 'right'}: ${margin.between};
          }

        ${responsiveOptions}
      }
    `;

    const Box = typeof as === 'string'
      ? styled[as]`${styles}`
      : styled(as)`${styles}`;

    return <Box onClick={ onClick } {...props}>{ reverse
      ? Object.assign([], children).reverse()
      : children }</Box>;
  }
}

// create function to do PropTypes too
Box.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  alignSelf: 'stretch',
  as: 'div',
  basis: 'auto',
  border: 'none',
  color: 'black',
  direction: 'row',
  display: 'flex',
  family: 'regular',
  fill: 'transparent',
  grow: 0,
  height: 'auto',
  justify: 'start',
  margin: 0,
  maxHeight: 'none',
  maxWidth: 'none',
  pad: 0,
  reverse: false,
  shrink: 1,
  textAlign: 'left',
  textSize: '1rem',
  weight: 'norm',
  width: 'auto',
  wrap: 'nowrap'
};
export default withTheme(Box);
