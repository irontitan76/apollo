import React from 'react';

import Brand from './../components/Brand';

const titleProps = {
   noLogo: true,
   color: 'dark',
   size: '1.5rem',
   justify: 'center'
}

export const items = [
  {
    id: 'all',
    header: 'ALL',
    title: <Brand key='key__industries' org='INDUSTRIES' {...titleProps} />,
    content: <div key='key' style={{ textAlign: 'left' }}>
      Apollo Industries is a startup venture with the following characteristics:
      <ul>
        <li>The company employs a flattened and modular business model.</li>
        <li>At its conception, the company will be one entity with several projects targeting varying verticals.</li>
        <li>As it grows, the company will comprise organizations with each entity providing impactful solutions for specific verticals.</li>
        <li>The company's goal is to start as small and inexpensively as possible with <u>no</u> debt financing.</li>
      </ul>
    </div>
  },
  {
    id: 'tech',
    header: 'TECHNOLOGY',
    title: <Brand key='key__technology' org='TECHNOLOGY' {...titleProps} />,
    content: 'TEST'
  },
  {
    id: 'ai',
    header: 'AI',
    title: <Brand key='key__ai' org='AI' {...titleProps} />,
    content: 'TEST'
  },
  {
    id: 'media',
    header: 'MEDIA',
    title: <Brand key='key__media' org='MEDIA' {...titleProps} />,
    content: 'TEST'
  },
  {
    id: 'finance',
    header: 'FINANCE',
    title: <Brand key='key__finance' org='FINANCE' {...titleProps} />,
    content: 'TEST'
  },
  {
    id: 'legal',
    header: 'LEGAL',
    title: <Brand key='key__legal' org='LEGAL' {...titleProps} />,
    content: 'TEST'
  },
  {
    id: 'health',
    header: 'HEALTH',
    title: <Brand key='key__health' org='HEALTH' {...titleProps} />,
    content: 'TEST'
  },
  {
    id: 'transport',
    header: 'TRANSPORT',
    title: <Brand key='key__transport' org='TRANSPORT' {...titleProps} />,
    content: 'TEST'
  },
  {
    id: 'energy',
    header: 'ENERGY',
    title: <Brand key='key__energy' org='ENERGY' {...titleProps} />,
    content: 'TEST'
  },
  {
    id: 'cosmos',
    header: 'COSMOS',
    title: <Brand key='key__cosmos' org='COSMOS' {...titleProps} />,
    content: 'TEST'
  }
];
