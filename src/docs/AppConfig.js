import React from 'react';

import Template from './Template';

export let config = {
  "id": "app",
  "name": "App",
  "family": "Structure",
  "path": null,
  "description": "A container for the entire web application",
  "properties": [
    {
      "property": "center",
      "default": "true",
      "options": "true, false",
      "type": "{ bool }",
      "description": "Whether to center the elements within the App",
      "content": ""
    },
    {
      "property": "children",
      "default": "null",
      "options": "n/a",
      "type": "{ string || object }",
      "description": "Pass child elements using the prop space between the JSX tags",
      "content": ""
    },
    {
      "property": "margin",
      "default": 0,
      "options": "xs, sm, md, lg, xl, [actual]",
      "type": "{ string }",
      "description": "Margin size around the App element",
      "content": ""
    },
    {
      "property": "maxWidth",
      "default": "1200px",
      "options": "n/a",
      "type": "{ string }",
      "description": "Maximum width of elements within App element",
      "content": ""
    },
    {
      "property": "width",
      "default": "null",
      "options": "n/a",
      "type": "{ string }",
      "description": "Width of the App element",
      "content": ""
    }
  ]
};

export const AppConfig = (
  <Template family='Structure' name='App' properties={ config.properties } />
);
