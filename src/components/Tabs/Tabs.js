import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Tabs.css';

import Heading from './../Heading/Heading';
import Paragraph from './../Paragraph/Paragraph';

const testItems = [
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

class Tabs extends Component {
  _open(e, tab) {
    const tabs = document.getElementsByClassName('tab__content');
    const tabLinks = document.getElementsByClassName('tab__item');
    let i;

    for ( i = 0; i < tabs.length; i++ ) {
      tabs[i].style.display = 'none';
    }

    for ( i = 0; i < tabLinks.length; i++ ) {
      tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }

    document.getElementById(tab.toLowerCase()).style.display = 'block';
    e.currentTarget.className += ' active';
  }

  componentDidMount() {
    return document.getElementById('defaultOpen').click();
  }

  _renderHeaders(items) {
    return items.map((item, i) => (
      <button key={ `key__${i}` }
        id={ i === 0 ? 'defaultOpen' : null }
        className='tab__item'
        onClick={ (e) => this._open(e, item.id)}>{ item.header }</button>
    ));
  }

  _renderContent(items) {
    return items.map((item, i) => (
      <div key={ `key__${i}` }
        id={ item.id }
        className='tab__content'>
        <Heading align='center' content={ item.title } margin='sm' />
        <Paragraph align='center' content={ item.content } margin='sm' />
      </div>
    ));
  }

  render() {
    return(
      <section className='tab'>
        <div className='tab__header'>
          { this._renderHeaders(testItems) }
        </div>

        { this._renderContent(testItems) }
      </section>
    );
  }
}

export default Tabs;
