import React, { Component, Fragment } from 'react';
import { Container, Heading, Subtitle, Table } from './../components';

export const Code = ({name}) => (
  <div style={{ fontFamily: 'Consolas, monospace' }}>
    <span style={{ color: '#7647A2' }}>import</span>
    {' { '}{ name }{' } '}
    <span style={{ color: '#7647A2' }}>from</span> 'apollo';
    <br />
    <br />
    <div>{ '<' }<span style={{ color: 'var(--blue)' }}>{ name }</span>{ '>' }</div>
    <div style={{ paddingLeft: '1%' }}>{ '{ children }'}</div>
    <div>{ '<' }<span style={{ color: 'var(--blue)' }}>/{ name }</span>{ '>' }</div>
  </div>
);

export class Template extends Component {
  render() {
    const {
      family, name, properties, usageOptions, propsOptions, examplesOptions
    } = this.props;

    return (
      <Container as='section' direction='column' margin='!0' alignItems='start'>
        <Container alignItems='baseline'>
          <Heading
            id={ family.toLowerCase() }
            as='h2'
            children={ family }
            fontFamily='regular' />
          <Subtitle
            id={ name.toLowerCase() }
            children={ name }
            style={{ marginLeft: '10%' }} />
        </Container>
        <Heading
          as='h4'
          children='Usage'
          fontFamily='light'/>
        <Code name={ name } />
        { usageOptions }
        <Heading
          as='h4'
          children='Properties'
          fontFamily='light' />
        <Table
          headers={ ['Property', 'Default', 'Options', 'Type', 'Description'] }
          rows={ properties } />
        { propsOptions }
        <Heading
          as='h4'
          children='Examples'
          fontFamily='light' />
        { examplesOptions }
      </Container>
    )
  }
}

export default Template;
