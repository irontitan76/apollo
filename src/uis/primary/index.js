import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import { Anchor, Box, Button } from './../../lib';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export class Primary extends Component {
  render() {
    return (
      <Box as='article' direction='column' alignItems='center' justify='center'>
        <Box justify='center' style={{
            backgroundImage: `url(${require('./../../assets/skyline.jpg')}`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover' }}
            height='675px'>
            <Box alignItems='center' direction='column' color='white' margin={{ top: '6rem' }} pad='vl' textSize='vl' weight='200'>
              Accelerate your digital transformation
              <Box>
              <Button alignSelf='center' border='2px solid transparent' fill='green' height='2.5rem' margin={{ top: 'vl', right: 'md' }} pad='0' style={{ lineHeight: 1 }} width='lg' primary>
                <FontAwesomeIcon icon={[ 'fal', 'binoculars' ]} />
                &nbsp;&nbsp;Learn more
              </Button>
              <Button alignSelf='center' border='2px solid transparent' fill='#222' height='2.5rem' margin={{ top: 'vl' }} pad='0' style={{ lineHeight: 1 }} width='lg' primary>
                <FontAwesomeIcon icon={[ 'fal', 'briefcase' ]} />
                &nbsp;&nbsp;Our solutions
              </Button>
              </Box>
            </Box>
        </Box>
        <Box alignSelf='center' alignItems='center' justify='between' margin='xl' width='1200px'>
          <Anchor weight='bold'>
            <Box>
              <FontAwesomeIcon icon={[ 'fal', 'users' ]} size='lg' />
              <Box margin={{ left: 'sm' }}>Team</Box>
            </Box>
          </Anchor>
          <Anchor weight='bold'>
            <Box>
              <FontAwesomeIcon icon={[ 'fal', 'browser' ]} size='lg' />
              <Box margin={{ left: 'sm' }}>Web</Box>
            </Box>
          </Anchor>
          <Anchor weight='bold'>
            <Box>
              <FontAwesomeIcon icon={[ 'fal', 'database' ]} size='lg' />
              <Box margin={{ left: 'sm' }}>Data</Box>
            </Box>
          </Anchor>
          <Anchor weight='bold'>
            <Box>
              <FontAwesomeIcon icon={[ 'fal', 'cloud' ]} size='lg' />
              <Box margin={{ left: 'sm' }}>Cloud</Box>
            </Box>
          </Anchor>
          <Anchor weight='bold'>
            <Box>
              <FontAwesomeIcon icon={[ 'fal', 'dna' ]} size='lg' />
              <Box margin={{ left: 'sm' }}>AI</Box>
            </Box>
          </Anchor>
        </Box>
        <Box alignSelf='center' alignItems='center' justify='between' width='1200px'>
          <Box basis='1/2'>

          </Box>
          <Box basis='1/2' direction='column' pad={{ vertical: '12%' }} textAlign='center' textSize='lg' weight='light'>
            Our effective consultants increase your project velocity so that your business delivers innovations faster
            <Button alignSelf='center' fill='#222' height='40px' margin={{ top: 'xl' }} pad='0' primary>
              More about team
            </Button>
          </Box>
        </Box>
        <Box alignSelf='center' alignItems='center' justify='between' width='1200px'>
          <Box basis='1/2' direction='column' pad={{ vertical: '12%' }} textAlign='center' textSize='lg' weight='light'>
            Choose our cutting-edge design system or advanced tools to accelerate and transform your business
            <Button alignSelf='center' fill='#222' height='40px' margin={{ top: 'xl' }} pad='0' primary>
              More about web
            </Button>
          </Box>
          <Box basis='1/2'>

          </Box>
        </Box>
        <Box alignSelf='center' alignItems='center' justify='between' width='1200px'>
          <Box basis='1/2'>

          </Box>
          <Box basis='1/2' direction='column' pad={{ vertical: '12%' }} textAlign='center' textSize='lg' weight='light'>
            With our data solutions, your business can quickly search and organize its data
            <Button alignSelf='center' fill='#222' height='40px' margin={{ top: 'xl' }} pad='0' primary>
              More about data
            </Button>
          </Box>
        </Box>
        <Box alignSelf='center' alignItems='center' justify='between' width='1200px'>
          <Box basis='1/2' direction='column' pad={{ vertical: '12%' }} textAlign='center' textSize='lg' weight='light'>
            Choose our cutting-edge design system or advanced tools to accelerate and transform your business
            <Button alignSelf='center' fill='#222' height='40px' margin={{ top: 'xl' }} pad='0' primary>
              More about cloud
            </Button>
          </Box>
          <Box basis='1/2'>

          </Box>
        </Box>
        <Box alignSelf='center' alignItems='center' justify='between' width='1200px'>
          <Box basis='1/2'>

          </Box>
          <Box basis='1/2' direction='column' pad={{ vertical: '12%' }} textAlign='center' textSize='lg' weight='light'>
            With our data solutions, your business can quickly search and organize its data
            <Button alignSelf='center' fill='#222' height='40px' margin={{ top: 'xl' }} pad='0' primary>
              More about AI
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withTheme(Primary);
