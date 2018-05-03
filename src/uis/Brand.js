import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import { Box } from './../lib';

class Brand extends Component {
  render() {
    const { color, company, noLogo, org, theme, ...props } = this.props;

    return (
      <Box
        key={ `key__${org}` }
        fill='transparent'
        alignItems='center' { ...props }>
        { noLogo
          ? null
          : <img src={ require('./../assets/apollo-logo.png')} alt='logo' />
        }
        &nbsp;
        <span
          style={{ color: theme.brand.colorIndex[color], fontFamily: 'open_sansbold' }}>
          {company}&nbsp;
        </span>
        <span
          style={{ color: theme.brand.colorIndex[color], fontFamily: 'open_sanslight' }}>
          {org}
        </span>
      </Box>
    );
  }
}

Brand.defaultProps = {
  color: 'light',
  company: 'APOLLO',
  org: 'INDUSTRIES'
}

export default withTheme(Brand);
