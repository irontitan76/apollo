import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Heading.css';

class Heading extends Component {
  render() {
    const { align, children, className, content, form, margin, onClick, size, style, weight } = this.props;
    const ROOT_CLASS = 'heading';
    const m = margin || size;

    const classes = classnames(
      ROOT_CLASS,
      `${ROOT_CLASS}--size-${size}`,
      {
        [`${ROOT_CLASS}--align-${align}`]: align,
        [`${ROOT_CLASS}--form-${form}`]: form,
        [`${ROOT_CLASS}--margin-${m}`]: m,
        [`${ROOT_CLASS}--onClick`]: onClick,
        [`${ROOT_CLASS}--weight-${weight}`]: weight
      },
      className
    );

    return (
      <div className={ classes } onClick={ onClick } style={ style }>
        { [ content, children ] }
      </div>
    );
  }
}

Heading.defaultProps = {
  align: 'start',
  form: 'none',
  margin: null,
  onClick: null,
  size: 'md',
  weight: 'semi'
}

Heading.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  form: PropTypes.oneOf([
    'capitalize', 'lowercase', 'none', 'uppercase'
  ]),
  margin: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl', 'none'
  ]),
  size: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  weight: PropTypes.oneOf([
    'light', 'regular', 'semi', 'bold', 'extra'
  ])
}

export default Heading;
