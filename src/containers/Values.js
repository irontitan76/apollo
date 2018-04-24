import React, { Component } from 'react';
import styled from 'styled-components';

import { Container, Heading, Image, Paragraph, Subtitle } from './../components';

class Values extends Component {
  render() {
    const List = styled.ul`
      display: flex;
      list-style-type: none;
      flex-wrap: wrap;
      padding: 0;
      text-align: center;
    `;

    const ListItem = styled.li`
      box-sizing: border-box;
      cursor: pointer;
      flex-basis: 50%;
      font-size: .9rem;
      padding: .75rem .9rem;
      transition: all 0.5s ease;

      &:first-child {
        border-top: 1px solid rgba(0, 0, 0, 0.08);
        border-left: 1px solid rgba(0, 0, 0, 0.08);
      }

      &:not(:first-child):not(:last-child) {
        border-top: 1px solid rgba(0, 0, 0, 0.08);
        border-left: 1px solid rgba(0, 0, 0, 0.08);
      }

      &:last-child {
        border: 1px solid rgba(0, 0, 0, 0.08);
        flex-basis: 100%;
      }

      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
      }

      @media (max-width: 768px) {
        background-color: transparent;
        box-shadow: none;
        flex-basis: 100%;
        margin: 0 0 0.5rem 0;
        padding: .75rem .9rem 1.5rem .9rem;

        &:hover {
          box-shadow: none;
        }
      }
    `;

    const ValueText = styled.div`
      font-family: 'open_sanssemibold';
      font-size: 1rem;
      padding: .5rem 0;
      margin-bottom: .75rem;
    `;

    return (
      <Container as='section' justify='center'>
        <Container animation='fadeIn 1s' direction='column' width='!1200px'>
          <Heading as='h1' justify='center' margin='md' textAlign='center' style={{ marginTop: '10%' }}>Our mission</Heading>
          <Subtitle justify='center' margin='!0 0 5% 0' textAlign='center'>
            We strive to reshape industries for the good of humanity
          </Subtitle>
          <Image src={ require('./../assets/bg4.jpg' )} alt='future of tech' margin='md' />
          <Heading as='h3' margin='sm'>Our Values</Heading>
          <Paragraph>
            The foundation of our company is key to pushing humanity forward. Our
            values are ingrained into our DNA. Taken together, they identify
            Apollo Industries as a company and its mission.
          </Paragraph>

          <List>
            <ListItem>
              <ValueText style={{ color: 'var(--green)'}}>Innovators at heart</ValueText>
              Approach innovation with a structured thought process.
            </ListItem>
            <ListItem>
              <ValueText style={{ color: 'var(--orange)'}}>Bias for action</ValueText>
              Anticipate and respond to opportunities to improve and resolve righteously.
            </ListItem>
            <ListItem>
              <ValueText style={{ color: 'var(--purple)'}}>Challenge respectfully</ValueText>
              Think logically and generate ideas that challenge the status quo in a respectful way.
            </ListItem>
            <ListItem>
              <ValueText style={{ color: 'var(--blue)'}}>Collaborate effectively</ValueText>
              Form meaningful, effectual relationships and produce results together.
            </ListItem>
            <ListItem>
              <ValueText style={{ color: 'var(--red)'}}>Do good</ValueText>
              Every moment is an opportunity to improve lives.
            </ListItem>
          </List>

          <Heading as='h3' margin='sm'>Our story</Heading>
          <div style={{
              backgroundImage: `url(${require('./../assets/path1-min.jpg')}`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '400px'
          }}></div>
          <Paragraph align='left' style={{ marginBottom: '6%'}}>
            Our company's path started in 2018 with a vision to change each significant industry in the world. Our vision was grand, but we knew that we needed to start small. With that in mind, we created Apollo Industries as a professional services company with offerings in the web application development space.
          </Paragraph>
        </Container>
      </Container>
    )
  }
}

export default Values;
