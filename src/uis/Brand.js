import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { Anchor } from './../lib';

class Brand extends Component {
  render() {
    const { color, company, noLogo, org, theme, ...props } = this.props;

    const StyledAnchor = styled(Anchor)`
      &:hover span {
        
      }
    `;

    const Text = styled['span']`

    `;

    return (
      <StyledAnchor
        alignItems='center'
        color='white'
        fill='transparent'
        hoverColor='green'
        { ...props }>
        { noLogo
          ? null
          : <FontAwesomeIcon icon={[ 'fal', 'code-merge' ]} size='lg' />
        }
        <Text>&nbsp;&nbsp;&nbsp;{company}</Text>
      </StyledAnchor>
    );
  }
}

Brand.defaultProps = {
  color: 'light',
  company: 'fusion.io',
  noLogo: false
}

export default withTheme(Brand);
