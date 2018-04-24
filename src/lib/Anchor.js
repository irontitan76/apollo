import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Box } from './';

export default class Anchor extends Component {
  _onClick(e) {
    const { disabled } = this.props;

    if ( !disabled ) return true;

    e.preventDefault();
  }

  render() {
    const {
      children, icon, method, onClick, path, reverse, ...props
    } = this.props;

    let kids = icon ? [icon, children] : children;

    return (
      <Box
        as={!!path ? Link : 'a'}
        replace={method === 'replace'}
        to={path}
        onClick={onClick ? onClick : e => this._onClick(e)}
        {...props}>
        { reverse ? kids.reverse() : kids }
      </Box>
    );
  }
}

Anchor.defaultProps = {
  disabled: false,
  method: 'push'
};
