import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { find } from './utils';

export class Table extends Component {
  render() {
    const {
      children, color, fill, responsive, stripe, theme, ...props
    } = this.props;

    // stripe = ['odd', 'color']
    const { brand } = theme;

    const Table = styled['table']`
      background: ${find(brand, 'colorIndex', fill)};
      border-collapse: collapse;
      font-size: 0.85rem;
      width: 100%;

      tr {
        ${
          responsive ? `@media (max-width: 768px) {
            border: 1px solid #ccc;
            display: block;
          }` : ''
        }
      }

      th {
        background: white;
        font-weight: 300;
        border-bottom: 1px solid #ccc;
        padding: 6px;
        text-align: left;

        ${
          responsive ? `@media (max-width: 768px) {
            display: block;
          }` : ''
        }
      }

      td {
        font-weight: 300;
        padding: 6px;
        text-align: left;

        ${responsive ? `@media (max-width: 768px) {
          display: block;
          border: none;
  		    border-bottom: 1px solid #eee;
          position: relative;
          padding-left: 50%;

          &:before {
            position: absolute;
            top: 6px;
            left: 6px;
            width: 45%;
            padding-right: 10px;
            white-space: nowrap;
          }

          &:nth-of-type(1):before { content: 'Property'; }
          &:nth-of-type(2):before { content: 'Type'; }
          &:nth-of-type(3):before { content: 'Default'; }
          &:nth-of-type(4):before { content: 'Options'; }
          &:nth-of-type(5):before { content: 'Description'; }
        }` : ''}
      }

      ${
        !!stripe ? `tr:nth-of-type(${stripe[0] || 'odd'}) {
          background: ${stripe[1] || '#eee'};
        }` : ''
      }

      ${
        responsive ? `@media (max-width: 768px) {
          display: block;

          thead {
            display: block;

            tr {
              position: absolute;
              top: -9999px;
              left: -9999px;
            }
          }

          tbody {
            display: block;
          }
        }` : ''
      }
    `;

    return <Table {...props}>
      {children}
    </Table>;
  }
}

Table.defaultProps = {
  fill: 'transparent',
  responsive: true,
  stripe: false
}

export default withTheme(Table);
