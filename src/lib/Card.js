import React, { Component } from 'react';
import styled from 'styled-components';
import { Box, Heading, Paragraph, Title } from './';
import { getDefaults } from './utils';

export default class Card extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      children, heading, category, contentPad, description, image, imagePad,
      meta, metaBorder, metaPosition, reverse, ...props
    } = this.props;

    let start = metaPosition === 'start'
      ? <Heading
          key={0}
          size='xs'
          margin={{ bottom: 'auto', top: 0 }}
          pad={ contentPad }>
          { meta }
        </Heading>
      : null;

    let end = metaPosition === 'end'
      ? <Heading
          key={3}
          border={ metaBorder }
          size='xs'
          margin={{ bottom: 0, top: 'auto' }}
          pad={ contentPad }>
          { meta }
        </Heading>
      : null;

    let contents = [
      start,
      <Box alt='image' as='img' key={1} pad={imagePad} src={ image } style={{ maxWidth: '100%' }}/>,
      children,
      <Box direction='column' key={2} pad={ contentPad }>
        <Title>{category}</Title>
        <Heading as='h3' family='extra' margin={{ top: 0, bottom: 'xl' }}>
          {heading}
        </Heading>
        <Paragraph>{description}</Paragraph>
      </Box>,
      end
    ];

    return <Box {...props}>
      {!!reverse ? contents.reverse() : contents}
    </Box>
  }
}

const css = {
  "metaPosition": {
    "name": "metaPosition",
    "default": "end",
    "options": {
      "start": "start",
      "end": "end"
    }
  }
};

Card.defaultProps = {
  contentPad: 'md',
  direction: 'column',
  imagePad: 0,
  ...getDefaults(css)
}
