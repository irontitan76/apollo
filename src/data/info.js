import React from 'react';

import Brand from './../components/Brand';

export const items = [
  {
    id: 'all',
    header: 'ALL',
    title: <Brand key='key__industries' org='INDUSTRIES'/>,
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
    title: <Brand key='key__technology' org='TECHNOLOGY'/>,
    content: 'TEST'
  },
  {
    id: 'ai',
    header: 'AI',
    title: <Brand key='key__ai' org='AI'/>,
    content: 'TEST'
  },
  {
    id: 'media',
    header: 'MEDIA',
    title: <Brand key='key__media' org='MEDIA'/>,
    content: 'TEST'
  },
  {
    id: 'finance',
    header: 'FINANCE',
    title: <Brand key='key__finance' org='FINANCE'/>,
    content: 'TEST'
  },
  {
    id: 'legal',
    header: 'LEGAL',
    title: <Brand key='key__legal' org='LEGAL'/>,
    content: 'TEST'
  },
  {
    id: 'health',
    header: 'HEALTH',
    title: <Brand key='key__health' org='HEALTH'/>,
    content: 'TEST'
  },
  {
    id: 'transport',
    header: 'TRANSPORT',
    title: <Brand key='key__transport' org='TRANSPORT'/>,
    content: 'TEST'
  },
  {
    id: 'energy',
    header: 'ENERGY',
    title: <Brand key='key__energy' org='ENERGY'/>,
    content: 'TEST'
  },
  {
    id: 'cosmos',
    header: 'COSMOS',
    title: <Brand key='key__cosmos' org='COSMOS'/>,
    content: 'TEST'
  }
];
