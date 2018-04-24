import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';

import {
  Brand, Container, Menu, Search, Sidebar
} from './../components';

import ComponentData from './../docs';
import menu from './../data/menu.json';

class Design extends Component {
  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);
  }

  _onChange(e) {
    e.preventDefault();
    let value = ReactDOM.findDOMNode(this.refs.search).value.toLowerCase().trim();
    let items = ReactDOM.findDOMNode(this.refs.menu).getElementsByTagName('a');

    for ( let i = 0; i < items.length; i++ ) {
      if ( items[i].innerHTML.toLowerCase().indexOf(value) > -1) {
        items[i].style.display = '';
      } else {
        items[i].style.display = 'none';
      }
    }
  }

  _getRoutes(items) {
    let stack = [], routes = [], node, i = 0;
    stack.push(...items);

    while ( stack.length > 0 ) {
      node = stack.pop();

      if ( node.children && node.children.length ) {
        node.children.forEach(child => stack.push(child));
      }

      if ( node.render ) {
        let rendered = node.render ? ComponentData[node.render] : null;

        routes.push(<Route
          key={ `key__${i}` }
          path={ node.path }
          render={ () => rendered } />);
      }

      i++;
    }
    return routes;
  }

  render() {
    return (
      <Fragment>
        <Sidebar bgColor='blue'>
          <Link to='/'>
            <Brand
              alignItems='center'
              bgColor='blue'
              justify='start'
              height='!75px'
              pad='!10% 0 10% 10%'
              style={{ cursor: 'pointer' }} />
          </Link>
          <Search
            ref='search'
            placeholder='Search components...'
            onKeyUp={(e) => this._onChange(e)} />
          <Menu ref='menu' items={ menu } />
        </Sidebar>

        <Container
          animation='fadeIn 1s'
          as='section'
          direction='column'
          margin='!0 20px auto 285px'>
          <div>
            { this._getRoutes(menu) }
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Design;
