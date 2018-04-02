import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Table extends Component {
  _renderRows(TableRow, rows) {
    return rows.map((row, key) => (
      <TableRow key={`key_${key}`}>
        { this._renderCells(row) }
      </TableRow>
    ));
  }

  _renderHeaders(headers) {
    const TableHeader = styled.th`
      border-bottom: 1px solid var(--gray);
      font-family: var(--font-semibold);
      padding: 12px 8px;
      text-align: left;
    `;

    return headers.map((header, key) => (
      <TableHeader key={`key_${key}`}>
        { header }
      </TableHeader>
    ));
  }

  _renderCells(row) {
    const TableCell = styled.td`
      text-align: left;
      font-family: var(--font-regular);
      padding: 8px;
    `;

    return Object.keys(row).map((cell, key) => (
      <TableCell key={`key_${key}`}>
        { row[cell] }
      </TableCell>
    ));
  }

  render() {
    const { headers, rows } = this.props;

    const Table = styled.table`
      border-bottom: 1px solid var(--light);
      border-top: 1px solid var(--light);
      border-collapse: collapse;
      border-spacing: 0;
      font-size: 0.8rem;
      width: 100%;
    `;

    const TableBody = styled.tbody`

    `;

    const TableRow = styled.tr`
      border-bottom: 1px solid var(--light);

      &:not(:first-child):hover {
        background-color: var(--light);
        color: var(--blue);
        cursor: pointer;
      }
    `;

    return (
      <Table>
        <TableBody>
          <TableRow>
            { this._renderHeaders(headers) }
          </TableRow>
          { this._renderRows(TableRow, rows) }
        </TableBody>
      </Table>
    );
  }
}

export default Table;
