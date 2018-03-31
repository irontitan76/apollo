import React, { Component } from 'react';
import './Tabs.css';

import Heading from './../Heading/Heading';
import Paragraph from './../Paragraph/Paragraph';

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

    document.getElementById(tab).style.display = 'block';
    e.currentTarget.className += ' active';
  }

  componentDidMount() {
    let e = document.getElementById('defaultOpen');
    return e !== null ? e.click() : null;
  }

  _renderHeaders(items) {
    const { direction } = this.props;

    return items.map((item, i) => (
      <button key={ `key__${i}` }
        id={ i === 0 ? 'defaultOpen' : null }
        className={ `tab__item tab__item--${direction}` }
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
    const { items } = this.props;

    if ( typeof items === 'undefined'
      || (typeof items !== 'object' && !(items.length > 0)) ) {
      return null;
    } else {
      return (
        <section className='tab'>
          <div className='tab__header'>
            { this._renderHeaders(items) }
          </div>

          { this._renderContent(items) }
        </section>
      );
    }
  }
}

Tabs.defaultProps = {
  direction: 'vertical'
}

export default Tabs;
