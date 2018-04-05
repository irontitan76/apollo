import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { parseProperty } from './utils.js';

class Container extends Component {
  render() {
    const {
      alignContent, alignItems, basis, children, color, direction, height,
      justify, margin, pad, reverse, size, textAlign, width, wrap, ...props
    } = this.props;

    let itemAlign, contentAlign, just;

    if ( alignItems === 'start' )           itemAlign = 'flex-start';
    else if ( alignItems === 'end' )        itemAlign = 'flex-end';
    else if ( alignItems === 'baseline' )   itemAlign = 'baseline';
    else if ( alignItems === 'stretch' )    itemAlign = 'stretch';
    else itemAlign = alignItems;

    if ( alignContent === 'start' )         contentAlign = 'flex-start';
    else if ( alignContent === 'end' )      contentAlign = 'flex-end';
    else if ( alignContent === 'baseline' ) contentAlign = 'space-between';
    else if ( alignContent === 'around' )   contentAlign = 'space-around';
    else if ( alignContent === 'stretch' )  contentAlign = 'stretch';
    else contentAlign = alignContent;

    if ( justify === 'start' )              just = 'flex-start';
    else if ( justify === 'end' )           just = 'flex-end';
    else if ( justify === 'between' )       just = 'space-between';
    else if ( justify === 'around' )        just = 'space-around';
    else if ( justify === 'even' )          just = 'space-evenly';
    else just = justify;

    let w = width || size;
    let h = height || size;

    const Container = styled.div`
      align-content:    ${contentAlign};
      align-items:      ${itemAlign};
      color:            ${color};
      display:          flex;
      flex-basis:       ${basis};
      flex-direction:   ${direction};
      flex-wrap:        ${wrap};
      height:           ${parseProperty(h, 'var(--container-height-!)')};
      justify-content:  ${just};
      margin:           ${parseProperty(margin, 'var(--container-margin-!)')};
      pad:              ${parseProperty(pad, 'var(--container-pad-!)')};
      text-align:       ${textAlign};
      width:            ${parseProperty(w, 'var(--container--width-!)')};
    `;

    let result = [];
    let numChildren = Object.keys(children).length - 1;

    if ( reverse && children.length > 0 ) {
      children.map(child => {
        result.push(children[numChildren]);
        numChildren--;
        return result;
      });
    } else {
      result = children;
    }

    return (
      <Container { ...props }>{ result }</Container>
    );
  }
}

Container.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  direction: 'row',
  justify: 'start',
  height: 'md',
  margin: 'md',
  pad: 'md',
  size: 'md',
  textAlign: 'left',
  width: 'md',
  wrap: 'nowrap'
};

export default Container;
