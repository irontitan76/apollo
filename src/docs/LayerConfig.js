import React, { Fragment } from 'react';

import Template from './Template';
import { Layer } from './../components';

export let config = {
  "id": "layer",
  "name": "Layer",
  "family": "Structure",
  "properties": [
    {
      "property": "children",
      "default": "null",
      "options": "n/a",
      "type": "{ string || object }",
      "description": "This is the children description."
    },
    {
      "property": "content",
      "default": "null",
      "options": "n/a",
      "type": "{ string || object }",
      "description": "This is the content description."
    }
  ]
};

export const LayerConfig = (
  <Fragment>
    <Template family='Structure' name='Layer' properties={ config.properties} />
  </Fragment>
);
