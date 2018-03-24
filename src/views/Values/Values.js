import React, { Component } from 'react';
import './Values.css';

import Heading from './../../components/Heading/Heading';
import Image from './../../components/Image/Image';
import Paragraph from './../../components/Paragraph/Paragraph';
import Subtitle from './../../components/Subtitle/Subtitle';

class Values extends Component {
  render() {
    return (
      <article className='values container'>
        <Heading content='Our mission' align='center' size='xl' />
        <Subtitle content='We strive to reshape industries for the good of humanity' align='center' />
        <Image src={ require('./../../assets/bg4.jpg' )} alt='future of tech' margin='md' />
        <Heading content='Our values' align='start' size='lg' margin='xs' />
        <Paragraph align='start' margin='none'>
          The foundation of our company is key to pushing humanity forward. Our
          values are ingrained into our DNA. Taken together, they identify
          Apollo Industries as a company and its mission.
        </Paragraph>
        <ul className='list'>
          <li className='item'>
            <div style={{ color: 'var(--color5)'}}>Innovators at heart</div>
            Approach innovation with a structured thought process.
          </li>
          <li>
            <div style={{ color: 'var(--color4)'}}>Bias for action</div>
            Anticipate and respond to opportunities to improve and resolve righteously.
          </li>
          <li>
            <div style={{ color: 'var(--color6)'}}>Challenge respectfully</div>
            Think logically and generate ideas that challenge the status quo in a respectful way.
          </li>
          <li>
            <div style={{ color: 'var(--color1)'}}>Collaborate effectively</div>
            Form meaningful, effectual relationships and produce results together.
          </li>
          <li>
            <div style={{ color: 'var(--color2)'}}>Be compassionate</div>
            Every moment is an opportunity to improve lives.
          </li>
        </ul>

        <Heading content='Our story' align='start' size='lg' />
        <div style={{
            backgroundImage: `url(${require('./../../assets/path1-min.jpg')}`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '400px',
            width: '100%',
        }}>h</div>
        <Paragraph align='start'>
          The path
        </Paragraph>
      </article>
    )
  }
}

export default Values;
