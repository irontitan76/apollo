import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Organizations.css';

import Heading from './../../components/Heading/Heading';
import Subtitle from './../../components/Subtitle/Subtitle';

class Organizations extends Component {
  render() {
    return (
      <article className='organizations'>
        <div className='container'>
          <Heading content='Our structure' align='center' size='xl' />
          <Subtitle content='An organization regardless its design is only as good as the people it comprises' align='center' />
        </div>
        <div className='banner'>
          <ul className='wrap'>
            <li>OVERVIEW</li>
            <li>TECHNOLOGY</li>
            <li>AI</li>
            <li>MEDIA</li>
            <li>FINANCE</li>
            <li>LEGAL</li>
            <li>HEALTH</li>
            <li>TRANSPORT</li>
            <li>ENERGY</li>
            <li>COSMOS</li>
          </ul>
        </div>
        <div className='container'>
          <Heading content='Overview' align='start' size='lg' margin='md' />
        </div>
      </article>
    );
  }
}

Organizations.defaultProps = {

};

Organizations.propTypes = {

};

export default Organizations;
