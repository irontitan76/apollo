import React, { Component } from 'react';
import styled from 'styled-components';

import { parseProperty } from './utils.js';

class Container extends Component {
  render() {
    let {
      alignContent, alignItems, alignSelf, animation, as, basis, bgColor,
      border, children, color, direction, fontFamily, fontSize, full, grow, form,
      height, hoverColor, justify, margin, minHeight, minWidth, pad, onClick,
      order, reverse, shrink, size, textAlign, weight, width, wrap, ...props
    } = this.props;

    let contentAlign, itemAlign, just, selfAlign;

    if ( alignItems === 'start' )           itemAlign = 'flex-start';
    else if ( alignItems === 'end' )        itemAlign = 'flex-end';
    else itemAlign = alignItems;

    if ( alignSelf === 'start' )           selfAlign = 'flex-start';
    else if ( alignSelf === 'end' )        selfAlign = 'flex-end';
    else selfAlign = alignSelf;

    if ( alignContent === 'start' )         contentAlign = 'flex-start';
    else if ( alignContent === 'end' )      contentAlign = 'flex-end';
    else if ( alignContent === 'around' )   contentAlign = 'space-around';
    else contentAlign = alignContent;

    if ( justify === 'start' )              just = 'flex-start';
    else if ( justify === 'end' )           just = 'flex-end';
    else if ( justify === 'between' )       just = 'space-between';
    else if ( justify === 'around' )        just = 'space-around';
    else if ( justify === 'even' )          just = 'space-evenly';
    else just = justify;

    let w = width || size;
    let h = height || size;

    const Container = styled[as]`
      animation:        ${animation};
      align-content:    ${contentAlign};
      align-items:      ${itemAlign};
      align-self:       ${selfAlign};
      background:       ${parseProperty(bgColor, 'var(--!)')};
      border:           ${parseProperty(border, 'var(--base-border)')};
      box-sizing:       border-box;
      color:            ${parseProperty(color, 'var(--!)')};
      cursor:           ${!!onClick ? 'pointer': 'auto'};
      display:          flex;
      flex:             ${grow} ${shrink} ${basis};
      flex-direction:   ${direction};
      flex-wrap:        ${wrap};
      font-family:      ${parseProperty(fontFamily, 'var(--font-!)')};
      font-size:        ${parseProperty(fontSize, 'var(--font-size-!)')};
      font-weight:      ${parseProperty(weight, 'var(--base-weight-!)')};
      height:           ${parseProperty(h, 'var(--base-height-!)')};
      justify-content:  ${just};
      left:             ${full ? '50%' : 'auto'}
      margin-left:      ${full ? '-50vw' : 'initial'};
      margin-right:     ${full ? '-50vw' : 'initial'};
      margin:           ${parseProperty(margin, 'var(--base-margin-!)')};
      min-height:       ${minHeight};
      min-width:        ${minWidth};
      order:            ${order};
      padding:          ${parseProperty(pad, 'var(--base-pad-!)')};
      position:         ${full ? 'relative' : 'static'};
      right:            ${full? '50%' : 'auto'};
      text-align:       ${textAlign};
      text-transform:   ${form};
      width:            ${full ? '100vw' : parseProperty(w, 'var(--base-width-!)')};

      &:hover {
        color:          ${!!onClick ? `${parseProperty(hoverColor, 'var(--!)')}` : 'auto'};
      }
    `;

    let result = [];
    let numChildren = children !== undefined ? Object.keys(children).length - 1 : 0;

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
      <Container
        onClick={ onClick }
        { ...props }>
        { result }
      </Container>
    );
  }
}

Container.defaultProps = {
  animation:    'none',
  alignContent: 'stretch',
  alignItems:   'stretch',
  alignSelf:    'auto',
  as:           'div',
  basis:        'auto',
  bgColor:      'clear',
  border:       'none',
  color:        'black',
  direction:    'row',
  fontFamily:   'regular',
  fontSize:     '1rem',
  grow:         0,
  height:       'auto',
  justify:      'start',
  margin:       '!none',
  order:        0,
  pad:          'auto',
  shrink:       1,
  size:         'auto',
  textAlign:    'left',
  weight:       'auto',
  width:        'auto',
  wrap:         'nowrap'
};

export default Container;
