import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Box } from './';

export default class Animate extends Component {
  render() {
    let {
      action, actions, children, delay, duration, entry, iterate, mode, onHover,
      play, ...props
    } = this.props;

    let animation, animationValue = '';

    if ( !!actions ) {
      actions.forEach((action, i) => {
        if ( !!css[action.name ] ) {
          animation = keyframes`${css[action.name]}`;

          animationValue += `${animation}\
            ${action.duration ? action.duration : '1s'}\
            ${action.entry ? action.entry : 'ease'}\
            ${action.delay ? action.delay : '0s'}\
            ${action.iterate ? action.iterate : '1'}\
            ${action.play ? action.play : 'normal'}\
            ${action.mode ? action.mode : 'none'}\
            running`;

          animationValue += i !== actions.length - 1 ? ',' : ';';
        }
      });
    } else if ( !!css[action] ) {
      animation = keyframes`${css[action]}`;

      animationValue += `${animation}
        ${duration}
        ${entry}
        ${delay}
        ${iterate}
        ${play}
        ${mode}
        running`;
    }

    const Animate = styled(Box)`
      ${!!onHover
        ? `&:hover { animation: ${animationValue} }`
        : `animation: ${animationValue}`};
    `;

    return <Animate as='div' display='inline' {...props}>{children}</Animate>
  }
}

const css = {
  fadeIn: `0% { opacity: 0; }
    10% { opacity: 0.1; }
    20% { opacity: 0.2; }
    30% { opacity: 0.3; }
    40% { opacity: 0.4; }
    50% { opacity: 0.5; }
    60% { opacity: 0.6; }
    70% { opacity: 0.7; }
    80% { opacity: 0.8; }
    90% { opacity: 0.9; }
    100% { opacity: 1.0; }`,
  fadeOut: `0% { opacity: 1.0; }
    10% { opacity: 0.9; }
    20% { opacity: 0.8; }
    30% { opacity: 0.7; }
    40% { opacity: 0.6; }
    50% { opacity: 0.5; }
    60% { opacity: 0.4; }
    70% { opacity: 0.3; }
    80% { opacity: 0.2; }
    90% { opacity: 0.1; }
    100% { opacity: 0; }`,
  oscillateX: `5%, 95% { width: 95%; }
    10%, 90% { width: 90%; }
    15%, 85% { width: 85%; }
    20%, 80% { width: 80%; }
    25%, 75% { width: 75%; }
    30%, 70% { width: 70%; }
    35%, 65% { width: 65%; }
    40%, 60% { width: 60%; }
    45%, 55% { width: 55%; }
    50% { width: 50%; }`,
  oscillateY: `5%, 95% { height: 95%; }
    10%, 90% { height: 90%; }
    15%, 85% { height: 85%; }
    20%, 80% { height: 80%; }
    25%, 75% { height: 75%; }
    30%, 70% { height: 70%; }
    35%, 65% { height: 65%; }
    40%, 60% { height: 60%; }
    45%, 55% { height: 55%; }
    50% { height: 50%; }`,
  oscillate: `5%, 95% { width: 95%; height: 95%; }
    10%, 90% { width: 90%; height: 90%; }
    15%, 85% { width: 85%; height: 85%; }
    20%, 80% { width: 80%; height: 80%; }
    25%, 75% { width: 75%; height: 75%; }
    30%, 70% { width: 70%; height: 70%; }
    35%, 65% { width: 65%; height: 65%; }
    40%, 60% { width: 60%; height: 60%; }
    45%, 55% { width: 55%; height: 55%; }
    50% { height: 50%; height: 50%; }`,
  rotate: `from { transform: rotate(0deg); } to { transform: rotate(360deg); }`,
  rotateX: `from { transform: rotateX(0deg); } to { transform: rotateX(360deg); }`,
  rotateY: `from { transform: rotateY(0deg); } to { transform: rotateY(360deg); }`,
  wobble: `10%, 90% { transform: translate3d(-1px, 0, 0); }
    20%, 80% { transform: translate3d(2px, 0, 0); }
    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
    40%, 60% { transform: translate3d(4px, 0, 0); }`
}

Animate.defaultProps = {
  delay: '0s',
  play: 'normal',
  duration: '.5s',
  entry: 'ease',
  iterate: 1,
  mode: 'none'
}
