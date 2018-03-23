import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Paragraph.css';

class Paragraph extends Component {
  _clamp(string, n) {
    return string.substring(0, n).concat('...');
  }
  render() {
    const {
      align,
      children,
      clamp,
      className,
      content,
      margin,
      size,
      style,
      nowrap
    } = this.props;
    const ROOT_CLASS = 'paragraph';
    const m = margin || size;

    const classes = classnames(
      ROOT_CLASS,
      `${ROOT_CLASS}__${size}`,
      {
        [`${ROOT_CLASS}--align-${align}`]: align,
        [`${ROOT_CLASS}--nowrap`]: nowrap,
        [`${ROOT_CLASS}--margin-${m}`]: m,
      },
      className
    );

    let text = (typeof content === 'string' && clamp !== null)
      ? this._clamp(content, clamp) : content;
    let child = (typeof children === 'string' && clamp !== null)
      ? this._clamp(children, clamp) : children;
    return (
      <div className={ classes } style={ style }>
        { [ text, child ] }
      </div>
    );
  }
}

Paragraph.defaultProps = {
  align: 'center',
  clamp: null,
  nowrap: false,
  margin: null,
  size: 'md'
}

Paragraph.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  margin: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl', 'none'
  ]),
  size: PropTypes.oneOf([
    'sm', 'md', 'lg'
  ])
}

export default Paragraph;
