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
      ],
      story: "Our company's path started in 2018 with a vision to change each significant industry in the world. Our vision was grand, but we knew that we needed to start small. With that in mind, we created Fusion Technologies as a professional services company with offerings in the web application development space...\n By starting small, our decisions and ideas could be executed properly with the customer in mind. We needed to move fast, so a firm foundation with scalable modules built atop it was necessary. We also understood that knowledge is infinite, and that there are infinite pathways and strategies to bring about a vision - a vision for the betterment of humanity."
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

    return <Animate action='fadeIn' duration='.6s'>
      <Box
        alignSelf='center'
        as='main'
        direction='column'
        justify='center'>
        <Box
          fill='#121212'
          height='50px'>
          { /* submenu goes here */ }
        </Box>
        <Box alignSelf='center' width='100%'>
          <Box style={{
              backgroundImage: `url(${require('./../assets/camp3-1x.webp') }`,
              backgroundPosition: 'bottom center',
              backgroundSize: 'cover' }} width='100%'>
              <Box
                basis='lg'
                direction='column'
                fill='rgba(0,0,0,0.7)'
                margin='7%'
                pad='1rem 4rem 4rem 4rem'>
                <Heading
                  color='white'
                  size='vl'>
                  We believe in making our universe better
                </Heading>
                <Paragraph color='white'>Our mission is to empower every
                  individual and business in the known universe by optimizing
                  and developing comprehensive solutions; we strive to reshape
                  industries for the good of humanity
                </Paragraph>
              </Box>
          </Box>
        </Box>

        <Box
          alignSelf='center'
          direction='column'
          maxWidth='1250px'>
          <Box responsive>{ valueDisplay }</Box>
          <Box direction='column'>
            { Title('Our Story') }
            <Box responsive>
              <Box basis='1/2'></Box>
              <Paragraph
                basis='1/2'
                direction='column'
                pad='lg'
                weight='light'>
                {
                  this.state.story.split('\n').map((item, key) => (
                    <span key={key}>{item}<br/><br/></span>))
                }
              </Paragraph>
            </Box>
          </Box>
        </Box>

      </Box>
    </Animate>;
  }
}

export default withTheme(Values);
