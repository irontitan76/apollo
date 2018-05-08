import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import { Box, Heading, Image, Paragraph } from './../../lib';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export class Values extends Component {
  constructor() {
    super();

    this.state = {
      values: [
        {
          heading: 'Innovators at heart',
          description: 'Approach innovation with a structured thought process'
        },
        {
          heading: 'Bias for action',
          description: 'Anticipate and respond to opportunities to improve'
        },
        {
          heading: 'Challenge respectfully',
          description: 'Generate ideas that challenge the status quo respectfully'
        },
        {
          heading: 'Be compassionate',
          description: 'Every moment is an opportunity to improve lives'
        },
        {
          heading: 'Collaborate efficiently',
          description: 'Form meaningful relationships and produce results together'
        }
      ]
    };
  }

  render() {
    const { values } = this.state;
    const valueDisplay = values.map((value, key) => {
      return <Box key={ `key__${key}` } direction='column' pad='lg' width='20%'>
        <Heading alignItems='center' size='xs' margin={{ bottom: 'sm' }} weight='400'>
          {value.heading}&nbsp;&nbsp;
          <FontAwesomeIcon icon={[ 'fal', 'chevron-right' ]} size='sm' />
        </Heading>
        <Paragraph margin='0' size='vs' weight='200'>{value.description}</Paragraph>
      </Box>
    });

    const Title = (children) => React.createElement(
      Heading,
      { alignSelf: 'center', margin: { top: 'vl', bottom: 'xl' }, weight: 'regular'},
      children
    );

    return <Box alignSelf='center' direction='column' justify='center' width='100%'>
      <Box height='45px' width='100%' fill='light'>
        {/* Company Navigation goes here */}
      </Box>
      <Box alignSelf='center' width='1200px'>
        <Box alignSelf='center' direction='column' justify='center'>
          { Title('Our Values') }
          <Image src='http://via.placeholder.com/1200x400' alt='explore'  />
          <Box width='1200px'>{ valueDisplay }</Box>

          { Title('Our Story') }
          <Paragraph alignSelf='end' weight='light' width='50%'>
            Fusion Industries was founded by Ross Sheppard in 2018. The company's
            vision started when he was 16 years old after his first course in
            computer programming (Java). He realized that there was infinite
            knowlege to gain, and he set out to discover as much as he could. His
            strategy for Fusion Industries was a relatively simple one - learn.
          </Paragraph>
        </Box>
      </Box>
    </Box>;
  }
}

export default withTheme(Values);
