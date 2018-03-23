import React, { Component } from 'react';
import './Organizations.css';

import Heading from './../../components/Heading/Heading';
import Subtitle from './../../components/Subtitle/Subtitle';
import Tabs from './../../components/Tabs/Tabs';

class Organizations extends Component {
  render() {
    return (
      <article className='organizations'>
        <div className='container'>
          <Heading content='Our structure' align='center' size='xl' />
          <Subtitle
            align='center'
            content='An organization is only as good as the people within' />
        </div>
        <Tabs />
      </article>
    );
  }
}

export default Organizations;
