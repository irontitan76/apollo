import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Footer.css';

class Footer extends Component {
  render() {
    const { align, children, className, content } = this.props;

    const ROOT_CLASS = 'footer';

    const classes = classnames(
      ROOT_CLASS,
      {
        [`${ROOT_CLASS}--align-${align}`]: align,
      },
      className
    );


    return (
      <div style={{ backgroundColor: 'var(--dark)' }}>
        <div className={ classes }>
          { [ content, children ] }
        </div>
      </div>
    )
  }
}

Footer.defaultProps = {
  children: null,
  content: null
};

Footer.propTypes = {

}

export default Footer;
