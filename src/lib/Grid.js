import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';

export class Grid extends Component {
  render() {
    const {
      alignContent, alignItems, alignSelf, children, direction, justify,
      ...props
    } = this.props;

    const StyledGrid = styled['div']`
      alignContent: ${alignContent};
      alignItems: ${alignItems};
      alignSelf: ${alignSelf};
      display: flex;
      flex-direction: ${direction};
      justify-content: ${justify};
    `;

    return <StyledGrid>{children}</StyledGrid>;
  }
}

Grid.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  alignSelf: 'stretch',
  direction: 'row',
  justify: 'space-between'
}

export default withTheme(Grid);
