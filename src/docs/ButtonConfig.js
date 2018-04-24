import React, { Fragment } from 'react';

import Template from './Template';
import { Button } from './../components';

export let config = {
  "id": "button",
  "name": "Button",
  "family": "Navigation",
  "properties": [
    {
      "property": "circle",
      "default": "false",
      "options": "true, false",
      "type": "{ bool }",
      "description": "Whether to render the element as a circular Button"
    },
    {
      "property": "children",
      "default": "null",
      "options": "n/a",
      "type": "{ string || object }",
      "description": "Pass child elements using the prop space between the JSX tags"
    },
    {
      "property": "className",
      "default": "null",
      "options": "n/a",
      "type": "{ string }",
      "description": "Additional classes"
    },
    {
      "property": "color",
      "default": "dark",
      "options": "color, ![hex]",
      "type": "{ string }",
      "description": "Text color"
    },
    {
      "property": "fill",
      "default": "light",
      "options": "color, ![hex]",
      "type": "{ string }",
      "description": "Background color"
    },
    {
      "property": "hoverColor",
      "default": "null",
      "options": "color, ![hex]",
      "type": "{ string }",
      "description": "Text color on hover"
    },
    {
      "property": "hoverFill",
      "default": "null",
      "options": "color, ![hex]",
      "type": "{ string }",
      "description": "Background color on hover "
    },
    {
      "property": "hoverLine",
      "default": "null",
      "options": "color, ![hex]",
      "type": "{ string }",
      "description": "Border color on hover"
    },
    {
      "property": "icon",
      "default": "null",
      "options": "refer to Icon component",
      "type": "{ string || object }",
      "description": "Border color on hover"
    },
    {
      "property": "label",
      "default": "null",
      "options": "n/a",
      "type": "{ string || object }",
      "description": "Pass child elements using the prop space between the JSX tags"
    },
    {
      "property": "line",
      "default": "null",
      "options": "color, ![hex]",
      "type": "{ string }",
      "description": "Border color"
    },
    {
      "property": "onClick",
      "default": "null",
      "options": "n/a",
      "type": "{ function }",
      "description": "Function for when the element is clicked"
    },
    {
      "property": "pad",
      "default": "null",
      "options": "xs, sm, md, lg, xl, ![actual]",
      "type": "{ string }",
      "description": "Border color"
    },
    {
      "property": "reverse",
      "default": "false",
      "options": "true, false",
      "type": "{ boolean }",
      "description": "Whether icon is on right or left of any text"
    },
    {
      "property": "round",
      "default": "null",
      "options": "true, false, ![radius]",
      "type": "{ string || boolean }",
      "description": "Whether button has rounded corners"
    }
  ]
};

export const ButtonConfig = (
  <Fragment>
    <Template family='Navigation' name='Button' properties={ config.properties } />
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2%', width: '100%' }}>
      <Button label='Default' style={{ marginRight: '1%' }} />
      <Button label='Danger' color='light' fill='red' line='red' hoverColor='red' hoverFill='light' hoverLine='red' style={{ marginRight: '1%' }} />
      <Button label='Warning' color='light' fill='yellow' line='yellow' hoverColor='yellow' hoverFill='light' hoverLine='yellow' style={{ marginRight: '1%' }}/>
      <Button label='Success' color='light' fill='green' line='green' hoverColor='green' hoverFill='light' hoverLine='green' style={{ marginRight: '1%' }}/>
      <Button label='Primary' primary style={{ marginRight: '1%' }} />
      <Button label='Secondary' secondary style={{ marginRight: '1%' }} />
    </div>
  </Fragment>
);
