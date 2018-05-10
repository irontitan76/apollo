import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Animate, Box, Hamburger, Heading, Image, Paragraph, Title } from './../lib';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import InsightsNav from './InsightsNav';

export class Insights extends Component {
  constructor() {
    super();

    this.state = {
      articles: [
        {
          basis: '1/4',
          name: 'Differences Matter',
          image: require('./../assets/balloon.jpg'),
          content: 'In business, you must be cognizant of differences that incentivize creative development'
        },
        {
          basis: '1/2',
          name: 'A Business Transformation',
          image: require('./../assets/whale.jpg'),
          content: 'Transform rapidly and enable scalability'
        },
        {
          basis: '1/4',
          name: 'The Primal Leader',
          image: require('./../assets/dandelion.jpg'),
          content: 'What it means to be an effective leader'
        },
        {
          basis: '1/4',
          name: 'Strategy and vision',
          image: require('./../assets/camp1.jpg'),
          content: 'What it means to be an effective leader'
        },
        {
          basis: '1/4',
          name: 'The Primal Leader',
          image: require('./../assets/passion.jpg'),
          content: 'What it means to be an effective leader'
        },
        {
          basis: '1/4',
          name: 'The Primal Leader',
          image: require('./../assets/skyline.jpg'),
          content: 'What it means to be an effective leader'
        },
        {
          basis: '1/4',
          name: 'The Primal Leader',
          image: require('./../assets/bg4.jpg'),
          content: 'What it means to be an effective leader'
        }
      ]
    }
  }
  render() {
    const { articles } = this.state;

    const Card = styled(Box)`
      transition: transform .3s ease-out;

      &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        transform: translate(0, -3px);
      }
    `;

    return <Animate action='fadeIn'>
      <Box direction='column' margin='0 auto'>
        <InsightsNav />
        <Box fill='#ddd'>
          <Box alignContent='between' height='650px' margin='3% auto' width='1250px' wrap='wrap'>
            {
              articles.map((article, key) => {
                if ( key % 2 === 1 ) {
                  return <Box key={`key__${key}`} basis={article.basis} pad={{ right: 'lg' }}>
                      <Card justify='end' direction='column' style={{ backgroundImage: `url(${article.image}`}} width='100%'>
                      <Box direction='column' pad='md' fill='white' width='55%'>
                        <Heading size='sm' margin='0' weight='semi'>
                          {article.name}
                        </Heading>
                        <Paragraph weight='light'>{article.content}</Paragraph>
                      </Box>
                    </Card>
                  </Box>
                } else {
                  return <Box key={ `key__${key}` } pad={{ right: 'lg' }} basis={article.basis}>
                    <Card direction='column' fill='white'>
                      <Image src={ article.image } height='150px' />
                      <Box direction='column' pad='lg'>
                        <Heading size='sm' margin='0' weight='semi'>
                          {article.name}
                        </Heading>
                        <Paragraph weight='light'>{article.content}</Paragraph>
                      </Box>
                    </Card>
                  </Box>
                }
              })
            }
          </Box>
        </Box>
      </Box>
    </Animate>;
  }
}

export default withTheme(Insights);
