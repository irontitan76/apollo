import React, { Component } from 'react';
import styled from 'styled-components';
import {
  borders, colors, colorize, getDefaults, interpret, override, retrieve
} from './utils';

// FUTURE DISCUSSION: BREAK BOX UP INTO TWO CORE COMPONENTS - "BOX" AND "TEXT"
// BOX WOULD BE THE CORE CONTAINER ELEMENT
// TEXT WOULD BE THE CORE FONT ELEMENT

export default class Box extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  // need to figure out a pad between option for children of Box
  render() {
    let {
      alignContent, alignItems, alignSelf, as, basis, border, children, color,
      cursor, decor, direction, display, fill, full, grow, height, hoverBorder,
      hoverColor, hoverFill, justify, margin, maxHeight, maxWidth, onClick, pad,
      reverse, responsive, responsiveOptions, shrink, textAlign, family,
      textSize, weight, texture, width, wrap, ...props
    } = this.props;

    const styles = `
      align-content:      ${retrieve(css['alignContent'], alignContent)};
      align-items:        ${retrieve(css['alignItems'], alignItems)};
      align-self:         ${retrieve(css['alignSelf'], alignSelf)};
      background:         ${(!fill && color.charAt() === '#')
                            ? colorize(color)
                            : retrieve(css['fill'], fill)};
      background-image:   ${!!texture ? `url(${texture})`: 'none'};
      background-position:${!!texture ? 'center center' : '0% 0%'};
      background-repeat:  no-repeat;
      background-size:    cover;
      box-sizing:         border-box;
      color:              ${(!color && fill.charAt() === '#')
                            ? colorize(fill)
                            : retrieve(css['color'], color)};
      cursor:             ${!!(onClick || hoverBorder || hoverColor || hoverFill)
                            ? 'pointer' : 'auto'};
      display:            ${retrieve(css['display'], display)};
      flex:               ${retrieve(css['grow'], grow)}
                          ${retrieve(css['shrink'], shrink)}
                          ${retrieve(css['basis'], basis)};
      flex-direction:     ${retrieve(css['direction'], direction)};
      flex-wrap:          ${retrieve(css['wrap'], wrap)};
      font-family:        ${retrieve(css['family'], family)};
      font-size:          ${retrieve(css['textSize'], textSize)};
      font-weight:        ${retrieve(css['weight'], weight)};
      height:             ${retrieve(css['height'], height)};
      justify-content:    ${retrieve(css['justify'], justify)};
      max-height:         ${maxHeight};
      max-width:          ${maxWidth};
      text-align:         ${retrieve(css['textAlign'], textAlign)};
      text-decoration:    ${retrieve(css['decor'], decor)};
      width:              ${retrieve(css['width'], width)};

      ${interpret(css['border'], border, 'border', {
          all: ['top', 'bottom', 'left', 'right'],
          horizontal: ['left', 'right'],
          vertical: ['top', 'bottom']
        })};

      ${interpret(css['margin'], margin, 'margin', {
        all: ['top', 'bottom', 'left', 'right'],
        horizontal: ['left', 'right'],
        vertical: ['top', 'bottom']
      })};

      ${interpret(css['pad'], pad, 'padding', {
        all: ['top', 'bottom', 'left', 'right'],
        horizontal: ['left', 'right'],
        vertical: ['top', 'bottom']
      })};

      &:hover {
        background:         ${retrieve(css['fill'], hoverFill)};
        color:              ${(!hoverColor
                                && !!hoverFill
                                && hoverFill.charAt() === '#')
                              ? colorize(hoverFill)
                              : retrieve(css['color'], hoverColor)};

        ${interpret(css['border'], hoverBorder, 'border', {
          all: ['top', 'bottom', 'left', 'right'],
          horizontal: ['left', 'right'],
          vertical: ['top', 'bottom']
        })}
      }

      @media ( max-width: 768px ) {
        flex-direction: ${!!responsive
          ? direction === 'row' ? 'column' : 'row'
          : retrieve(css['direction'], direction) };

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

const css = {
  "alignContent": {
    "name": "align-content",
    "default": "stretch",
    "options": {
      "around": "space-around",
      "between": "space-between",
      "center": "center",
      "end": "flex-end",
      "start": "flex-start",
      "stretch": "stretch"
    }
  },
  "alignItems": {
    "name": "align-items",
    "default": "stretch",
    "options": {
      "baseline": "baseline",
      "center": "center",
      "end": "flex-end",
      "start": "flex-start",
      "stretch": "stretch"
    }
  },
  "alignSelf": {
    "name": "align-self",
    "default": "stretch",
    "options": {
      "baseline": "baseline",
      "center": "center",
      "end": "flex-end",
      "start": "flex-start",
      "stretch": "stretch"
    }
  },
  "as": {
    "name": "as",
    "default": "div",
    "options": {
      "article": "article",
      "button": "button",
      "div": "div",
      "footer": "footer",
      "nav": "nav",
      "section": "section",
      "h1": "h1",
      "h2": "h2",
      "h3": "h3",
      "h4": "h4",
      "h5": "h5",
      "h6": "h6"
    }
  },
  "basis": {
    "name": "flex-basis",
    "default": "auto",
    "options": {
      "auto": "auto",
      "0": "0",
      "vs": "3rem",
      "xs": "6rem",
      "sm": "12rem",
      "md": "24rem",
      "lg": "36rem",
      "xl": "45rem",
      "vl": "60rem",
      "1/4": "25.00%",
      "1/3": "33.33%",
      "1/2": "50.00%",
      "2/3": "66.66%",
      "3/4": "75.00%",
      "full": "100%"
    }
  },
  "border": {
    "name": "border",
    "default": "none",
    "options": borders(),
    "override": "3px solid transparent"
  },
  "color": {
    "name": "color",
    "default": "black",
    "options": colors
  },
  "direction": {
    "name": "flex-direction",
    "default": "row",
    "options": {
      "row": "row",
      "column": "column"
    }
  },
  "display": {
    "name": "display",
    "default": "flex",
    "options": {
      "block": "block",
      "flex": "flex",
      "grid": "grid",
      "inline": "inline-block",
      "inlineFlex": "inline-flex",
      "inlineGrid": "inline-grid",
      "none": "none",
      "static": "static"
    }
  },
  "decor": {
    "name": "text-decoration",
    "default": "none"
  },
  "fill": {
    "name": "background",
    "default": "transparent",
    "options": colors
  },
  "grow": {
    "name": "flex-grow",
    "default": '0'
  },
  "height": {
    "name": "height",
    "default": "auto",
    "options": {
      "auto": "auto",
      "0": "0",
      "vs": "3rem",
      "xs": "6rem",
      "sm": "12rem",
      "md": "24rem",
      "lg": "36rem",
      "xl": "45rem",
      "vl": "60rem",
      "1/4": "25.00%",
      "1/3": "33.33%",
      "1/2": "50.00%",
      "2/3": "66.66%",
      "3/4": "75.00%",
      "full": "100%"
    }
  },
  "justify": {
    "name": "justify-content",
    "default": "start",
    "options": {
      "around": "space-around",
      "between": "space-between",
      "center": "center",
      "end": "flex-end",
      "even": "space-evenly",
      "start": "flex-start"
    }
  },
  "margin": {
    "name": "margin",
    "default": 0,
    "options": {
      "vs": "0.4rem",
      "xs": "0.6rem",
      "sm": "0.8rem",
      "md": "1.0rem",
      "lg": "1.5rem",
      "xl": "2.0rem",
      "vl": "3.0rem"
    }
  },
  "pad": {
    "name": "padding",
    "default": 0,
    "options": {
      "vs": "0.250rem",
      "xs": "0.500rem",
      "sm": "0.750rem",
      "md": "1.000rem",
      "lg": "1.350rem",
      "xl": "1.750rem",
      "vl": "2.250rem"
    }
  },
  "reverse": {
    "name": "reverse",
    "default": false,
    "options": {
      "true": true,
      "false": false,
    }
  },
  "shrink": {
    "name": "flex-shrink",
    "default": "1"
  },
  "textAlign": {
    "name": "text-align",
    "default": "left",
    "options": {
      "center": "center",
      "justify": "justify",
      "left": "left",
      "right": "right"
    }
  },
  "family": {
    "name": "font-family",
    "default": "var(--font-regular)",
    "options": {
      "light": "var(--font-light)",
      "regular": "var(--font-regular)",
      "semi": "var(--font-semi)",
      "italic": "var(--font-italic)",
      "bold": "var(--font-bold)",
      "extra": "var(--font-extra)"
    }
  },
  "textSize": {
    "name": "font-size",
    "default": "md",
    "options": {
      "vs": "0.250rem",
      "xs": "0.500rem",
      "sm": "0.825rem",
      "md": "1.000rem",
      "lg": "1.500rem",
      "xl": "1.875rem",
      "vl": "2.500rem"
    }
  },
  "weight": {
    "name": "font-weight",
    "default": "normal",
    "options": {
      "normal": "normal",
      "bold": "bold",
      "extra": "bolder",
      "light": "lighter"
    }
  },
  "width": {
    "name": "width",
    "default": "auto",
    "options": {
      "auto": "auto",
      "0": "0",
      "vs": "3rem",
      "xs": "6rem",
      "sm": "12rem",
      "md": "24rem",
      "lg": "36rem",
      "xl": "45rem",
      "vl": "60rem",
      "1/4": "25.00%",
      "1/3": "33.33%",
      "1/2": "50.00%",
      "2/3": "66.66%",
      "3/4": "75.00%",
      "full": "100%"
    }
  },
  "wrap": {
    "name": "flex-wrap",
    "default": "nowrap",
    "options": {
      "true": "wrap",
      "false": "nowrap"
    }
  }
};

// create function to do PropTypes too
Box.defaultProps = getDefaults(css);
