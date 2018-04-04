import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import { Heading, Paragraph } from './';

class Tabs extends Component {
  _onClick(e, tab) {
    let i, siblings = e.target.parentElement.children;
    let content = e.target.parentElement.parentElement.children;

    for ( i = 0; i < content.length; i++ ) {
      if ( i !== 0 ) {
        content[i].style.display = 'none';
      }
    }

    for ( i = 0; i < siblings.length; i++ ) {
      siblings[i].className = siblings[i].className.replace(' active', '');
    }

    document.getElementById(tab).style.display = 'block';
    e.currentTarget.className += ' active';
  }

  componentDidMount() {
    let e = document.getElementById('defaultOpen');
    return e !== null ? e.click() : null;
  }

  _renderHeaders(items) {
    const TabHeader = styled.button`
      background-color: var(--blue);
      border: none;
      border-bottom: 4px solid #fff;
      border-top: 4px solid #fff;
      color: var(--light);
      cursor: pointer;
      flex-basis: 11.11%;
      float: left;
      font-family: 'open_sansregular';
      font-size: 1rem;
      outline: none;
      padding: 2%;

      &:first-child {
        background-color: var(--dark);
      }

      &:hover:not(:first-child) {
        background-color: var(--blue);
        border-bottom: 4px solid var(--blue);
        border-top: 4px solid var(--blue);
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
        filter: brightness(90%);
        color: var(--light);
      }

      &:hover:first-child {
        border-bottom: 4px solid var(--dark);
        border-top: 4px solid var(--dark);
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
      }

      &:first-child.active {
        border-bottom: 4px solid var(--dark);
        border-top: 4px solid var(--dark);
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
      }

      &:not(:first-child).active {
        background-color: var(--blue);
        border-bottom: 4px solid var(--blue);
        border-top: 4px solid var(--blue);
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
        filter: brightness(90%);
        color: var(--light);
      }

      @media (max-width: 768px) {
        border-bottom: none;
        border-top: none;
        color: var(--light);
        cursor: pointer;
        flex: 1;
        flex-basis: 100%;
        padding: 2%;

        &:hover:first-child {
          border-bottom: none;
          border-top: none;
          box-shadow: none;
          filter: brightness(90%);
        }

        &:hover:not(:first-child) {
          border-bottom: none;
          border-top: none;
          box-shadow: none;
        }

        &:first-child.active {
          border-bottom: none;
          border-top: none;
          box-shadow: none;
        }

        &:not(:first-child).active {
          border-bottom: none;
          border-top: none;
          box-shadow: none;
        }
      }
    `;

    return items.map((item, i) => (
      <TabHeader key={ `key__${i}` } id={ i === 0 ? 'defaultOpen' : null }
        onClick={ (e) => this._onClick(e, item.id)}>{ item.header }</TabHeader>
    ));
  }

  _renderContent(items) {
    const fadeEffect = keyframes`
      from {
        opacity: 0; }
      to {
        opacity: 1; }
    `;

    const TabContent = styled.div`
      animation: ${fadeEffect} 1s;
      display: none;
      padding: 6px 12px;
    `;

    return items.map((item, i) => (
      <TabContent key={ `key__${i}` } id={ item.id }>
        <Heading align='center' content={ item.title } margin='sm' />
        <Paragraph align='center' content={ item.content } margin='sm' />
      </TabContent>
    ));
  }

  render() {
    const { items } = this.props;

    const Tabs = styled.section`
      margin: 0 auto;
      max-width: 1200px;
      text-align: center;
    `;

    const TabsHeaders = styled.div`
      background-color: var(--blue);
      display: flex;
      font-family: 'open_sansregular';
      justify-content: space-between;
      list-style-type: none;
      margin: 3% auto 0 auto;
      overflow: hidden;
      padding: 0;

      @media (max-width: 768px) {
        flex-wrap: wrap;
      }
    `;

    if ( typeof items === 'undefined'
      || (typeof items !== 'object' && !(items.length > 0)) ) {
      return null;
    } else {
      return (
        <Tabs>
          <TabsHeaders>
            { this._renderHeaders(items) }
          </TabsHeaders>

          { this._renderContent(items) }
        </Tabs>
      );
    }
  }
}

Tabs.defaultProps = {
  direction: 'vertical'
}

export default Tabs;
