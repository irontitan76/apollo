import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Template from './Template';
import { Card, Container } from './../components';

export let config = {
  "id": "card",
  "name": "Card",
  "family": "Structure",
  "path": null,
  "description": "A container that can consit of image, title, content, and meta",
  "properties": [
    {
      "property": "detail",
      "default": "null",
      "options": "n/a",
      "type": "{ string || element }",
      "description": "Optional content describing the purpose of the card"
    },
    {
      "property": "heading",
      "default": "null",
      "options": "n/a",
      "type": "{ string || element }",
      "description": "Optional title for the card"
    },
    {
      "property": "image",
      "default": "null",
      "options": "n/a",
      "type": "{ string || element }",
      "description": "Optional image in the card"
    },
    {
      "property": "imagePad",
      "default": "md",
      "options": "n/a",
      "type": "{ string }",
      "description": "Optional padding for the image within the card"
    },
    {
      "property": "meta",
      "default": "null",
      "options": "n/a",
      "type": "{ string || element }",
      "description": "Optional and supplementary information (often used for links)"
    },
    {
      "property": "reverse",
      "default": "null",
      "options": "n/a",
      "type": "{ bool }",
      "description": "Whether to reverse the media and text order within the card"
    },
    {
      "property": "subtitle",
      "default": "null",
      "options": "n/a",
      "type": "{ string || element }",
      "description": "Optional subtitle for the card"
    },
    {
      "property": "textPad",
      "default": "md",
      "options": "n/a",
      "type": "{ string }",
      "description": "Optional padding for the text within the card"
    },
    {
      "property": "video",
      "default": "null",
      "options": "n/a",
      "type": "{ object || element }",
      "description": "Optional video in the card"
    }
  ]
};

export const CardConfig = (
  <Fragment>
    <Template
      family='Structure'
      name='Card'
      properties={ config.properties }
      propsOptions={ <div
        style={{
          fontSize: '0.8rem',
          fontFamily: 'var(--font-semibold)',
          padding: '12px 8px'
        }}>
        *Properties for <Link to='/design/structure/container'>Container</Link> are also available
      </div> } />
      <Card heading='Heading' subtitle='Subtitle' desc='Description' meta='Meta' width='!25%'  />
  </Fragment>
);
