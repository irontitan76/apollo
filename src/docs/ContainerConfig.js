import React, { Fragment } from 'react';

import Template from './Template';
import { Container } from './../components';

export let config = {
  "id": "container",
  "name": "Container",
  "family": "Structure",
  "properties": [
    {
      "property": "align",
      "default": "left",
      "options": "left, center, right",
      "type": "{ string }",
      "description": "Horizontal alignment of the Box"
    },
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

export const ContainerConfig = (
  <Fragment>
    <Template family='Structure' name='Container' properties={ config.properties} />
    <Container>
      <Container alignItems='start'   bgColor='gray' color='light' justify='start'  pad='xs' width='md'>Top Left Content</Container>
      <Container alignItems='center'  bgColor='dark' color='light' justify='center' pad='xs' width='md'>Center Content</Container>
      <Container alignItems='end'     bgColor='gray' color='light' justify='end'    pad='xs' width='md'>Bottom Right Content</Container>
    </Container>
  </Fragment>
);
