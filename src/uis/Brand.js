import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { Anchor } from './../lib';

class Brand extends Component {
  render() {
    const { color, company, noLogo, org, theme, ...props } = this.props;

    return (
      <Anchor
        alignItems='center'
        color='white'
        fill='transparent'
        hoverColor='green'
        { ...props }>
        { noLogo
          ? null
          : <FontAwesomeIcon icon={[ 'fal', 'code-merge' ]} size='2x' />
        }
        <span style={{ fontWeight: 200 }}>&nbsp;&nbsp;&nbsp;{company}</span>
      </Anchor>
    );
  }
}

Brand.defaultProps = {
  color: 'light',
  company: 'fusion.io',
  noLogo: false
}

export default withTheme(Brand);
