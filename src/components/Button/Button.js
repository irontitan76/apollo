import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Button.css';

class Button extends Component {
  render() {
    const {
      children,
      className,
      content,
      fill,
      hoverFill,
      onClick,
      outline,
      size
    } = this.props;
    const ROOT_CLASS = 'button';
    const o = outline || fill;
    const h = hoverFill || fill === 'light' ? 'dark' : 'light';

    const classes = classnames(
      ROOT_CLASS,
      `${ROOT_CLASS}__fill--${fill}`,
      `${ROOT_CLASS}__hoverFill--${h}`,
      `${ROOT_CLASS}__outline--${o}`,
      `${ROOT_CLASS}__${size}`,
      {
        [`${ROOT_CLASS}--onClick`]: onClick
      },
      className
    );

    return (
      <button className={ classes } onClick={ onClick }>
        { [ content, children ] }
      </button>
    );
  }
}

Button.defaultProps = {
  className: null,
  fill: 'light',
  hoverFill: null,
  onClick: null,
  outline: 'none'
}

Button.propTypes = {
  fill: PropTypes.oneOf([
    'blue', 'brown', 'dark', 'gray', 'green',
    'light', 'orange', 'purple', 'red', 'yellow'
  ]),
  hoverFill: PropTypes.oneOf([
    'blue', 'brown', 'dark', 'gray', 'green',
    'light', 'orange', 'purple', 'red', 'yellow'
  ]),
  outline: PropTypes.oneOf([
    'blue', 'brown', 'dark', 'gray', 'green',
    'light', 'none', 'orange', 'purple', 'red', 'yellow'
  ])
}

export default Button;
