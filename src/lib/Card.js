import React, { Component } from 'react';
import { Box, Heading, Paragraph, Title } from './';

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

    // Need heading, category, description to have an object option to edit sizes, fonts, etc.

    let start = metaPosition === 'start'
      ? <Heading
          key={0}
          size='xs'
          margin={{ bottom: reverse ? 0 : 'auto', top: reverse ? 'auto' : 0 }}
          pad={ contentPad }>
          { meta }
        </Heading>
      : null;

    let end = metaPosition === 'end'
      ? <Heading
          key={3}
          border={ metaBorder }
          size='xs'
          margin={{ bottom: reverse ? 'auto' : 0, top: reverse ? 0 : 'auto' }}
          pad={ contentPad }>
          { meta }
        </Heading>
      : null;

    let contents = [
      start,
      image ? <Box alt='image' as='img' key={1} pad={imagePad} src={ image } style={{ maxWidth: '100%' }}/> : null,
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

Card.defaultProps = {
  contentPad: 'md',
  direction: 'column',
  imagePad: 0,
  metaPosition: 'end'
}
