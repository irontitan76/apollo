import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, Heading, Image, Paragraph, Subtitle } from './';

class Card extends Component {
  render() {
    const {
      desc, detail, image, meta, heading, imagePad, reverse, subtitle, textPad,
      video, ...props
    } = this.props;

    const Card = styled(Container)`
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);

      &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      }
    `;

    let top = <div>
      <Image src={ require('./../assets/bg4.jpg') } />
    </div>;

    let bottom = <Container direction='column' textPad>
      <Heading children={ heading } margin='xs' />
      <Subtitle children={ subtitle } margin='none' size='sm' />
      <Paragraph align='left' children={ desc } margin='lg' />
    </Container>;

    return (
      <Card
        as='section'
        direction='column'
        height='!100%'
        {...props}>
        { !reverse ? [top, bottom] : [bottom, top]}
        <div
          style={{
            borderTop: '1px solid #ccc',
            color: 'var(--primary)',
            fontSize: '0.8rem',
            marginTop: '3%',
            padding: '5% 4%' }}>
          { meta }
        </div>
      </Card>
    );
  }
}

Card.defaultProps = {
  reverse: false
};

export default Card;
