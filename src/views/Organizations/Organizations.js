import React, { Component } from 'react';
import './Organizations.css';

import Heading from './../../components/Heading/Heading';
import Subtitle from './../../components/Subtitle/Subtitle';
import Tabs from './../../components/Tabs/Tabs';

class Organizations extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: [
        {
          id: 'all',
          header: 'ALL',
          title: <div>
            <span style={{ fontFamily: 'open_sansbold' }}>APOLLO</span>&nbsp;
            <span style={{ fontFamily: 'open_sanslight' }}>INDUSTRIES</span>
          </div>,
          content: 'TEST'
        },
        {
          id: 'tech',
          header: 'TECHNOLOGY',
          title: <div>
            <span style={{ fontFamily: 'open_sansbold' }}>APOLLO</span>&nbsp;
            <span style={{ fontFamily: 'open_sanslight' }}>TECHNOLOGIES</span>
          </div>,
          content: 'TEST'
        },
        {
          id: 'ai',
          header: 'AI',
          title: <div>
            <span style={{ fontFamily: 'open_sansbold' }}>APOLLO</span>&nbsp;
            <span style={{ fontFamily: 'open_sanslight' }}>AI</span>
          </div>,
          content: 'TEST'
        },
        {
          id: 'media',
          header: 'MEDIA',
          title: <div>
            <span style={{ fontFamily: 'open_sansbold' }}>APOLLO</span>&nbsp;
            <span style={{ fontFamily: 'open_sanslight' }}>MEDIA</span>
          </div>,
          content: 'TEST'
        },
        {
          id: 'finance',
          header: 'FINANCE',
          title: <div>
            <span style={{ fontFamily: 'open_sansbold' }}>APOLLO</span>&nbsp;
            <span style={{ fontFamily: 'open_sanslight' }}>FINANCE</span>
          </div>,
          content: 'TEST'
        },
        {
          id: 'legal',
          header: 'LEGAL',
          title: <div>
            <span style={{ fontFamily: 'open_sansbold' }}>APOLLO</span>&nbsp;
            <span style={{ fontFamily: 'open_sanslight' }}>LEGAL</span>
          </div>,
          content: 'TEST'
        },
        {
          id: 'health',
          header: 'HEALTH',
          title: <div>
            <span style={{ fontFamily: 'open_sansbold' }}>APOLLO</span>&nbsp;
            <span style={{ fontFamily: 'open_sanslight' }}>HEALTH</span>
          </div>,
          content: 'TEST'
        },
        {
          id: 'transport',
          header: 'TRANSPORT',
          title: <div>
            <span style={{ fontFamily: 'open_sansbold' }}>APOLLO</span>&nbsp;
            <span style={{ fontFamily: 'open_sanslight' }}>TRANSPORT</span>
          </div>,
          content: 'TEST'
        },
        {
          id: 'energy',
          header: 'ENERGY',
          title: <div>
            <span style={{ fontFamily: 'open_sansbold' }}>APOLLO</span>&nbsp;
            <span style={{ fontFamily: 'open_sanslight' }}>ENERGY</span>
          </div>,
          content: 'TEST'
        },
        {
          id: 'cosmos',
          header: 'COSMOS',
          title: <div>
            <span style={{ fontFamily: 'open_sansbold' }}>APOLLO</span>&nbsp;
            <span style={{ fontFamily: 'open_sanslight' }}>COSMOS</span>
          </div>,
          content: 'TEST'
        }
      ]
    };
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
