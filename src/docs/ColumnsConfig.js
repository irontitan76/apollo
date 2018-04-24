import React, { Fragment } from 'react';

import Template from './Template';
import { Columns } from './../components';

export let config = {
  "id": "columns",
  "name": "Columns",
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

export const ColumnsConfig = (
  <Fragment>
    <Template family='Structure' name='Columns' properties={ config.properties} />
  </Fragment>
);
