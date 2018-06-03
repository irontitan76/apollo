import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Animate, Box, Heading, Image, Paragraph } from './../lib';
import InsightsNav from './InsightsNav';

export class Insights extends Component {
  constructor() {
    super();

    this.state = {
      articles: [
        {
          basis: '25%',
          name: 'Differences Matter',
          image: require('./../assets/balloon-1x.webp'),
          content: 'In business, you must be cognizant of differences that incentivize creative development'
        },
        {
          basis: '50%',
          name: 'A Business Transformation',
          image: require('./../assets/whale-1x.webp'),
          content: 'Transform rapidly and enable scalability'
        },
        {
          basis: '25%',
          name: 'The Primal Leader',
          image: require('./../assets/dandelion-1x.webp'),
          content: 'What it means to be an effective leader'
        },
        {
          basis: '25%',
          name: 'Strategy and vision',
          image: require('./../assets/camp1-1x.webp'),
          content: 'What it means to be an effective leader'
        },
        {
          basis: '25%',
          name: 'The Primal Leader',
          image: require('./../assets/passion-1x.webp'),
          content: 'What it means to be an effective leader'
        },
        {
          basis: '25%',
          name: 'The Primal Leader',
          image: require('./../assets/skyline-1x.webp'),
          content: 'What it means to be an effective leader'
        },
        {
          basis: '25%',
          name: 'The Primal Leader',
          image: require('./../assets/bg4-1x.webp'),
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

    return <Animate action='fadeIn' duration='0.6s'>
      <Box
        as='main'
        direction='column'
        margin='0 auto'>
        <InsightsNav />
        <Box fill='#ddd'>
          <Box
            alignContent='between'
            height='100%'
            margin='3% auto'
            width='1250px'
            wrap={true}>
            {
              articles.map((article, key) => {
                if ( key % 2 === 1 ) {
                  return <Box
                    basis={article.basis}
                    key={`key__${key}`}
                    pad={{ bottom: 'lg', right: 'lg' }}>
                      <Card
                        basis='100%'
                        direction='column'
                        justify='end'
                        style={{ backgroundImage: `url(${article.image}`}}>
                      <Box
                        direction='column'
                        pad='md'
                        fill='white'
                        width='55%'>
                        <Heading
                          size='sm'
                          margin='0'
                          weight='semi'>
                          {article.name}
                        </Heading>
                        <Paragraph weight='light'>{article.content}</Paragraph>
                      </Box>
                    </Card>
                  </Box>
                } else {
                  return <Box
                    basis={article.basis}
                    key={ `key__${key}` }
                    pad={{ bottom: 'lg', right: 'lg' }}>
                    <Card
                      direction='column'
                      fill='white'>
                      <Image src={ article.image } height='150px' />
                      <Box
                        direction='column'
                        pad='lg'>
                        <Heading
                          margin='0'
                          size='sm'
                          weight='semi'>
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
