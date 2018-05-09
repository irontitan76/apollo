import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import { Animate, Box, Heading, Paragraph } from './../lib';
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
      { alignSelf: 'center', margin: { top: 'vl', bottom: 'xl' }, size: 'xl', weight: 'regular'},
      children
    );

    return <Animate action='fadeIn'>
      <Box alignSelf='center' direction='column' justify='center'>
        <Box fill='#121212' height='50px'>

        </Box>
        <Box alignSelf='center' direction='column'>

          <Box style={{
              backgroundImage: `url(${require('./../assets/camp3.jpg') }`,
              backgroundPosition: 'bottom center',
              backgroundSize: 'cover' }} height='550px' width='100vw'>
              <Heading color='white' fill='rgba(0,0,0,0.7)' height='300px' margin='7%' pad='3rem' size='vl' width='40%'>
                We believe in making our universe better
                <Paragraph color='white'>Our mission is to empower every
                  individual and business in the known universe by optimizing
                  and developing comprehensive solutions; we strive to reshape
                  industries for the good of humanity
                </Paragraph>
              </Heading>
          </Box>

          <Box alignSelf='center' direction='column' justify='center' width='1200px'>
            <Box width='1200px'>{ valueDisplay }</Box>

            { Title('Our Story') }
            <Paragraph alignSelf='end' weight='light' width='50%'>
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
    </Animate>;
  }
}

export default withTheme(Values);
