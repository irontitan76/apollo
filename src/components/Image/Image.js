import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Image.css';

class Image extends Component {
  render() {
    const { align, alt, avatar, className, margin, onClick, responsive, size, src, style } = this.props;
    const ROOT_CLASS = 'image';
    const m = margin || size;

    const classes = classnames(
      ROOT_CLASS,
      `${ROOT_CLASS}__${size}`,
      {
        [`${ROOT_CLASS}--align-${align}`]: align,
        [`${ROOT_CLASS}--avatar`]: avatar,
        [`${ROOT_CLASS}--margin-${m}`]: m,
        [`${ROOT_CLASS}--onClick`]: onClick,
        [`${ROOT_CLASS}--responsive`]: responsive
      },
      className
    );

    return <img alt={ alt } className={ classes } src={ src } style={ style } />;
  }
}

Image.defaultProps = {
  align: 'start',
  alt: 'unknown',
  avatar: false,
  margin: null,
  onClick: null,
  responsive: true,
  size: 'full'
}

Image.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  margin: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl', 'none'
  ]),
  size: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl', 'full'
  ])
}

export default Image;
