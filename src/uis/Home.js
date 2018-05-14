import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { Anchor, Animate, Box, Button } from './../lib';

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

    return <Animate action='fadeIn'>
      <main>
        <Box as='article' direction='column' alignItems='center' justify='center'>
          <Box justify='center' style={{
              backgroundImage: `url(${require('./../assets/skyline-1x.webp')}`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover' }}
              height='675px'>
              <Box alignItems='center' direction='column' color='white' margin={{ top: '6rem' }} pad='vl' textAlign='center' textSize='vl' weight='200'>
                { heroText }
                <Box>
                <Button alignSelf='center' border='2px solid transparent' hoverBorder='2px solid white' fill='green' height='2.5rem' margin={{ top: 'vl', right: 'md' }} pad='0' style={{ lineHeight: 1 }} basis='lg' primary>
                  <FontAwesomeIcon icon={[ 'fal', 'binoculars' ]} />
                  &nbsp;&nbsp;Learn more
                </Button>
                <Button alignSelf='center' border='2px solid transparent' fill='#222' height='2.5rem' margin={{ top: 'vl' }} pad='0' style={{ lineHeight: 1 }} basis='lg' primary>
                  <FontAwesomeIcon icon={[ 'fal', 'briefcase' ]} />
                  &nbsp;&nbsp;Our solutions
                </Button>
                </Box>
              </Box>
          </Box>
          <Box alignSelf='center' alignItems='center' justify='between' margin='xl' maxWidth='1250px' width='87%'>
            {
              solutions.map((solution, key) => <Anchor key={`key__${key}`} weight='bold'>
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
              const first = <Box basis='1/2' key='key__1'></Box>;
              const second = <Box basis='1/2' key='key__2' direction='column' pad={{ vertical: '12%' }} textAlign='center' textSize='lg' weight='light'>
                {solution.blurb}
                <Button alignSelf='center' fill='#222' height='40px' margin={{ top: 'xl' }} pad='0' primary>
                  More about {solution.name.toLowerCase()}
                </Button>
              </Box>;

              return <Box alignSelf='center' alignItems='center' justify='between' key={`key__${key}`} maxWidth='1250px' responsive width='87%'>
                { key % 2 === 0 ? [ first, second ] : [ second, first ] }
              </Box>
            })
          }
        </Box>
      </main>
    </Animate>;
  }
}

export default withTheme(Primary);
