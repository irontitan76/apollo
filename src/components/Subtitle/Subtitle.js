import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Subtitle.css';

class Subtitle extends Component {
  render() {
    const { align, children, className, content, form, margin, onClick, size, style, weight } = this.props;
    const ROOT_CLASS = 'subtitle';
    const m = margin || size;

    const classes = classnames(
      ROOT_CLASS,
      `${ROOT_CLASS}__${size}`,
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

Subtitle.defaultProps = {
  align: 'start',
  form: 'none',
  margin: null,
  onClick: null,
  size: 'md',
  weight: 'regular'
}

Subtitle.propTypes = {
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
    'sm', 'md', 'lg'
  ]),
  weight: PropTypes.oneOf([
    'light', 'regular', 'semi', 'bold', 'extra'
  ])
}

export default Subtitle;
