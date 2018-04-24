import React, { Fragment } from 'react';

import Template from './Template';
import { Split } from './../components';

export let config = {
  "id": "split",
  "name": "Split",
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

export const SplitConfig = (
  <Fragment>
    <Template family='Structure' name='Split' properties={ config.properties} />
  </Fragment>
);
