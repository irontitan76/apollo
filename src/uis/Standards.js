import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Box, Heading, Paragraph } from './../lib';

export class Standards extends Component {
  constructor() {
    super();

    this.state = {
      standards: [
        {
          heading: 'Think atomically',
          description: 'Approach innovation with a structured thought process'
        },
        {
          heading: 'Constantly modernize',
          description: 'Anticipate and respond to opportunities to improve'
        },
        {
          heading: 'Unify systems',
          description: 'Generate ideas that challenge the status quo respectfully'
        },
        {
          heading: 'Enhance exchange',
          description: 'Every moment is an opportunity to improve lives'
        },
        {
          heading: 'Dynamically innovate',
          description: 'Form meaningful relationships and produce results together'
        },
        {
          heading: 'Set conventions',
          description: 'Form meaningful relationships and produce results together'
        },
        {
          heading: 'Regularly refactor',
          description: 'Form meaningful relationships and produce results together'
        },
        {
          heading: 'Continuously test',
          description: 'Form meaningful relationships and produce results together'
        }
      ],
      story: "Our company's path started in 2018 with a vision to change each significant industry in the world. Our vision was grand, but we knew that we needed to start small. With that in mind, we created Fusion Technologies as a professional services company with offerings in the web application development space...\n By starting small, our decisions and ideas could be executed properly with the customer in mind. We needed to move fast, so a firm foundation with scalable modules built atop it was necessary. We also understood that knowledge is infinite, and that there are infinite pathways and strategies to bring about a vision - a vision for the betterment of humanity."
    };
  }

  render() {
    const { standards } = this.state;

    const Standards = styled(Box)`

    `;

    const standardDisplay = standards.map((standard, key) => {
      return <Box
        basis='25%'
        direction='column'
        key={ `key__${key}` }
        pad='lg'>
        <Heading
          alignItems='center'
          margin={{ bottom: 'sm' }}
          size='xs'
          weight='400'>
          {standard.heading}&nbsp;&nbsp;
          <FontAwesomeIcon icon={[ 'fal', 'chevron-right' ]} size='sm' />
        </Heading>
        <Paragraph
          margin='0'
          size='vs'
          weight='200'>
          {standard.description}
        </Paragraph>
      </Box>
    });

    return <Standards
        as='main'
        direction='column'
        margin='0 auto'>
      <Box justify='end' style={{
          backgroundImage: `url(${require('./../assets/water1.jpg')})`,
          backgroundPosition: 'center center',
          height: '500px',
          width: '100vw'
        }}>
        <Box
          basis='lg'
          direction='column'
          fill='rgba(0,0,0,0.7)'
          margin='7%'
          pad='1rem 4rem 4rem 4rem'>
          <Heading
            color='white'
            size='vl'>
            Our standards
          </Heading>
          <Paragraph color='white'>Fusion Technologies is a company by humans
            for humans. Our employees from every part of the company invoke a
            culture with a sense of wonder and adventure.
          </Paragraph>
        </Box>
      </Box>

      <Box direction='column'>
        <Heading
          alignSelf='center'
          weight='bolder'>
          The Fusion Standard
        </Heading>
        <Paragraph
          align='center'
          alignSelf='center'
          contain={1000}
          weight='light'>
          The Fusion Standard changes the way our organizations do business by
          eliminating overly complex and fragmented systems, necessitating
          innovative design, and streamlining processes. The Fusion Standard
          enables us to think atomically and allows for extensible design
          thereby simplifying release cadences.
        </Paragraph>
      </Box>

      <Box
        alignSelf='center'
        justify='center'
        maxWidth='1250px'
        responsive
        wrap>
        { standardDisplay }
      </Box>
    </Standards>;
  }
}

export default withTheme(Standards);
