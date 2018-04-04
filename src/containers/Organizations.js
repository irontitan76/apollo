import React, { Component } from 'react';
import { items } from './../data/info.js';

import Heading from './../components/Heading';
import Subtitle from './../components/Subtitle/Subtitle';
import Tabs from './../components/Tabs/Tabs';

class Organizations extends Component {
  constructor(props) {
    super(props);

    this.state = { items };
  }

  render() {
    return (
      <article className='organizations'>
        <div className='container'>
          <Heading content='Our structure' align='center' size='xl' />
          <Subtitle
            align='center'
            content='An organization is only as good as the people within' />
        </div>
        <Tabs items={ this.state.items }/>
      </article>
    );
  }
}

export default Organizations;
