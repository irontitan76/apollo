import React, { Component } from 'react';
import styled from 'styled-components';
import { items } from './../data/info.js';

import { Heading, Subtitle, Tabs } from './../components';

class Organizations extends Component {
  constructor(props) {
    super(props);

    this.state = { items };
  }

  render() {
    const Organizations = styled.article`
      animation: fadeEffect 1s;
    `;

    return (
      <Organizations>
        <div className='container'>
          <Heading content='Our structure' align='center' size='xl' />
          <Subtitle
            align='center'
            content='An organization is only as good as the people within' />
        </div>
        <Tabs items={ this.state.items }/>
      </Organizations>
    );
  }
}

export default Organizations;
