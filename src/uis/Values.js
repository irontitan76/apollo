import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { Animate, Box, Heading, Paragraph } from './../lib';

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
      return <Box key={ `key__${key}` } direction='column' pad='lg'>
        <Heading alignItems='center' size='xs' margin={{ bottom: 'sm' }} weight='400'>
          {value.heading}&nbsp;&nbsp;
          <FontAwesomeIcon icon={[ 'fal', 'chevron-right' ]} size='sm' />
        </Heading>
        <Paragraph margin='0' size='vs' weight='200'>{value.description}</Paragraph>
      </Box>
    });

    const Title = (children) => React.createElement(
      Heading,
      { alignSelf: 'center', margin: { top: 'vl', bottom: 'xl' }, size: 'xl', weight: 'regular'},
      children
    );

    return <Animate action='fadeIn'>
      <Box alignSelf='center' as='main' direction='column' justify='center'>
        <Box fill='#121212' height='50px'>

        </Box>
        <Box alignSelf='center' direction='column'>

          <Box style={{
              backgroundImage: `url(${require('./../assets/camp3-1x.webp') }`,
              backgroundPosition: 'bottom center',
              backgroundSize: 'cover' }}>
              <Box basis='lg' direction='column' fill='rgba(0,0,0,0.7)' margin='7%' pad='3rem' >
                <Heading color='white'>
                  We believe in making our universe better
                </Heading>
                <Paragraph color='white'>Our mission is to empower every
                  individual and business in the known universe by optimizing
                  and developing comprehensive solutions; we strive to reshape
                  industries for the good of humanity
                </Paragraph>
              </Box>
          </Box>

          <Box alignSelf='center' direction='column' justify='center'>
            <Box responsive>{ valueDisplay }</Box>

            <Box direction='column'>
              { Title('Our Story') }
              <Box responsive>
                <Box basis='1/2'></Box>
                <Paragraph basis='1/2' pad='lg' weight='light' >
                  Our company's path started in 2018 with a vision to change each
                  significant industry in the world. Our vision was grand, but we
                  knew that we needed to start small. With that in mind, we created
                  Fusion Industries as a professional services company with
                  offerings in the web application development space...

                  Fusion Industries was founded by Ross Sheppard in 2018. The company's
                  vision started when he was 16 years old after his first course in
                  computer programming (Java). He realized there was infinite
                  knowlege, so his initial strategy for Fusion Industries was a
                  relatively simple one - learn.
                </Paragraph>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Animate>;
  }
}

export default withTheme(Values);
