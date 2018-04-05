import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Container extends Component {
  render() {
    const {
      alignContent, alignItems, direction, justify, textAlign, wrap, ...props
    } = this.props;

    let itemAlign, contentAlign, j;

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

    if ( justify === 'start' )              j = 'flex-start';
    else if ( justify === 'end' )           j = 'flex-end';
    else if ( justify === 'between' )       j = 'space-between';
    else if ( justify === 'around' )        j = 'space-around';
    else if ( justify === 'even' )          j = 'space-evenly';
    else j = justify;

    // basis, color, full, margin, pad, reverse, size, onClick

    const Container = styled.div`
      align-content:    ${alignContent};
      align-items:      ${alignItems};
      display:          flex;
      flex-direction:   ${direction};
      flex-wrap:        ${wrap};
      justify-content:  ${j};
      text-align:       ${textAlign};
    `;

    return (
      <Container { ...props } />
    );
  }
}

Container.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  direction: 'row',
  justify: 'start',
  textAlign: 'left',
  wrap: 'nowrap',
};

export default Container;
