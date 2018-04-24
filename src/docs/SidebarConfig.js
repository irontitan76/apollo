import React, { Fragment } from 'react';

import Template from './Template';
import { Sidebar } from './../components';

export let config = {
  "id": "sidebar",
  "name": "Sidebar",
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

export const SidebarConfig = (
  <Fragment>
    <Template family='Structure' name='Sidebar' properties={ config.properties} />
  </Fragment>
);
