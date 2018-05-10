import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';

export class Hamburger extends Component {
  _onClick(e) {
    e.target.classList.contains('bar')
    ? e.target.parentElement.classList.toggle('change')
    : e.target.classList.toggle('change');
  }

  render() {
    const Container = styled['div']`
      cursor: pointer;
      display: inline-block;
    `;

    const Bar = styled['div']`
      background-color: #333;
      height: 2px;
      margin: 6px 0;
      width: 20px;
      transition: all 0.2s;

      .change &:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 7px);
        width: 22px;
      }

      .change &:nth-child(2) {
        opacity: 0;
      }

      .change &:nth-child(3) {
        transform: rotate(45deg) translate(-4px, -6px);
        width: 22px;
      }
    `;

    return <Container onClick={e => this._onClick(e)}>
      <Bar className='bar' />
      <Bar className='bar' />
      <Bar className='bar' />
    </Container>;
  }
}

export default withTheme(Hamburger);
