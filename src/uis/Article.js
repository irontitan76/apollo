import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Animate, Box, Heading, Image, Paragraph } from './../lib';
import InsightsNav from './InsightsNav';

export class Article extends Component {
  constructor() {
    super();

    this.state = {
      item: {
        author: 'Ross Sheppard',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        createdAt: 'May 7, 2018',
        modifiedAt: 'May 8, 2018',
        title: 'Differences Matter'
      }
    }
  }
  render() {
    const { item: { title, author, createdAt, modifiedAt, content } } = this.state;

    return <Animate action='fadeIn'>
      <InsightsNav />
      <Box fill='#ddd' justify='center' width='100%'>
        <Box width='1250px'>
          <Box direction='column' fill='white' margin={{ top: 'vl', bottom: 'lg' }} width='800px'>
            <Box style={{
                backgroundImage: `url(${require('./../assets/camp1.jpg') }`,
                backgroundPosition: 'bottom center',
                backgroundSize: 'cover' }} height='450px' />
            <Box direction='column' pad='xl'>
              <div style={{ color: '#656565' }}>{createdAt}</div>
              <Heading margin={{ top: 'xl' }} weight='extra'>{title}</Heading>
              <Paragraph>{content}</Paragraph>
            </Box>
          </Box>
          <Box direction='column' fill='white' margin={{ top: 'vl', bottom: 'lg', left: 'xl' }} width='450px'>
            Hi
          </Box>
        </Box>
      </Box>
    </Animate>
  }
}

export default withTheme(Article);
