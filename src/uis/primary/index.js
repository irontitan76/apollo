import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import { Anchor, Box, Button } from './../../lib';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export class Primary extends Component {
  constructor() {
    super();

    this.state = {
      heroText: 'Accelerate your digital transformation',
      solutions: [
        {
          name: 'Team',
          icon: 'users',
          image: null,
          blurb: 'Our effective consultants increase your project velocity so that your business delivers innovations faster'
        },
        {
          name: 'Web',
          icon: 'browser',
          image: null,
          blurb: 'Choose our cutting-edge design system or advanced tools to accelerate and transform your business'
        },
        {
          name: 'Data',
          icon: 'database',
          image: null,
          blurb: 'With our data solutions, your business can quickly search and organize its data'
        },
        {
          name: 'Cloud',
          icon: 'cloud',
          image: null,
          blurb: 'Choose our cutting-edge design system or advanced tools to accelerate and transform your business'
        },
        {
          name: 'AI',
          icon: 'dna',
          image: null,
          blurb: 'With our data solutions, your business can quickly search and organize its data'
        }
      ]
    };
  }
  render() {
    const { heroText, solutions } = this.state;

    return (
      <Box as='article' direction='column' alignItems='center' justify='center'>
        <Box justify='center' style={{
            backgroundImage: `url(${require('./../../assets/skyline.jpg')}`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover' }}
            height='675px'>
            <Box alignItems='center' direction='column' color='white' margin={{ top: '6rem' }} pad='vl' textSize='vl' weight='200'>
              { heroText }
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
          {
            solutions.map((solution, key) => <Anchor weight='bold'>
              <Box>
                <FontAwesomeIcon icon={[ 'fal', solution.icon ]} size='lg' />
                <Box margin={{ left: 'sm' }}>{solution.name}</Box>
              </Box>
            </Anchor>
            )
          }
        </Box>
        {
          solutions.map((solution, key) => {
            const first = <Box basis='1/2'></Box>;
            const second = <Box basis='1/2' direction='column' pad={{ vertical: '12%' }} textAlign='center' textSize='lg' weight='light'>
              {solution.blurb}
              <Button alignSelf='center' fill='#222' height='40px' margin={{ top: 'xl' }} pad='0' primary>
                More about {solution.name.toLowerCase()}
              </Button>
            </Box>;

            return <Box alignSelf='center' alignItems='center' justify='between' width='1200px'>
              { key % 2 === 0 ? [ first, second ] : [ second, first ] }
            </Box>
          })
        }
      </Box>
    );
  }
}

export default withTheme(Primary);
