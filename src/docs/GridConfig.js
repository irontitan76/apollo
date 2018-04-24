import React, { Fragment } from 'react';

import Template from './Template';
import { Grid } from './../components';

export let config = {
  "id": "grid",
  "name": "Grid",
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

export const GridConfig = (
  <Fragment>
    <Template family='Structure' name='Grid' properties={ config.properties} />
  </Fragment>
);
