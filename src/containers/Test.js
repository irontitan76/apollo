import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import {
  Accordion, AccordionPanel, Anchor, Animate, App, Box, Button, Card, Heading, Menu,
  Paragraph, Search, Sidebar, Title
} from '../lib';

import menuItems from './../data/menu.json';

const items = ['accordion', 'animate', 'box', 'button', 'card', 'heading',
  'paragraph', 'search', 'sidebar', 'title'];

export default class Test extends Component {
  _onChange(e) {
    e.preventDefault();
    let value = ReactDOM.findDOMNode(this.refs.search).value.toLowerCase().trim();
    let items = ReactDOM.findDOMNode(this.refs.menu).getElementsByTagName('a');

    let count = 0;

    for ( let i = 0; i < items.length; i++ ) {
      if ( items[i].innerHTML.toLowerCase().indexOf(value) > -1) {
        items[i].style.display = '';
      } else {
        items[i].style.display = 'none';
        count++;
      }
    }

    if ( count === items.length ) {
      ReactDOM.findDOMNode(this.refs.noresults).style.display = 'flex';
    } else {
      ReactDOM.findDOMNode(this.refs.noresults).style.display = 'none';
    }
  }

  render() {

    const Menu = styled(Box)``;
    const MenuItem = styled(Anchor)``;

    const Dropdown = styled(Box)`
      position: absolute;
      z-index: 1;

      &:hover div {
        display: flex;
      }
    `;
    const DropdownContent = styled(Box)``;

    return (
      <Box responsive>
        { /* need to create a split component */ }
        <App />
        <Sidebar fill='blue' scroll={{
            color: 'light',
            thumbColor: '#ddd',
            thumbHoverColor: 'dark',
            width: '7px'
          }} width='270px'>

          <Anchor path='/' justify='center' color='white'
            pad={{ horizontal: 'md', vertical: 'vl' }}  shrink='0'>
            <img src={ require('./../assets/apollo-logo.png')} />
          </Anchor>

          <Search ref='search' border={{ horizontal: 'none',
              vertical: '1px solid #004575' }} color='white' justify='center' pad='lg'
            placeholder='Search components...'
            placeholderOptions={`
              color: var(--light);
              font-family: var(--font-light);
              opacity: 0.6;
            `} onKeyUp={e => this._onChange(e)} textAlign='center' textSize='sm' />

          <Box direction='column' ref='menu' shrink='0'>
            <Box
              ref='noresults'
              color='gray'
              display='none'
              justify='center'
              margin='sm'
              textSize='0.8rem'>
              No search results
            </Box>
            {
              items.map((item, i) => <Anchor
                color='white'
                hoverColor='white'
                hoverFill='#004575'
                justify='center'
                key={ `key__${i}` }
                path={ `#${item}` }
                pad={{ vertical: 'sm' }}
                textSize='sm'>
                { item.charAt().toUpperCase() + item.slice(1) }
              </Anchor>)
            }
          </Box>
        </Sidebar>

        <Box
          direction='column'
          margin={{ left: '270px' }}
          pad={{ horizontal: 'xl' }}
          responsiveOptions={`margin: 0;`}>

          <Menu direction='column'  width='25%'>

            <Dropdown direction='column' pad='md'>
              <MenuItem>Hi</MenuItem>
              <DropdownContent display='none' pad={{ left: 0, top: 'md', right: 'md' }}>
                <MenuItem>World</MenuItem>
              </DropdownContent>
            </Dropdown>
          </Menu>

          <Heading id='accordion'>Accordion</Heading>
          <Heading size='sm' margin={{ vertical: 'sm' }}>Use Accordion to toggle between hiding and showing large amounts of content</Heading>
            <code style={{ fontSize: '1.1rem', paddingLeft: '1rem', marginBottom: '1rem'}}>
              { `import { Accordion, AccordionPanel } from 'fusion';` }
                <br />
                <br />
              { `<Accordion [openMulti]>` }
                <br />
              &nbsp;&nbsp;{ `<AccordionPanel>{children}</AccordionPanel>`}
                <br />
              { `</Accordion>` }
            </code>
          <Accordion>
            <AccordionPanel heading='Accordion 1'>
              <Box pad='md'>Some content</Box>
            </AccordionPanel>
            <AccordionPanel heading='Accordion 2'>
              <Box pad='md'>Some more content :)</Box>
            </AccordionPanel>
          </Accordion>

          <Heading id='animate'>Animate</Heading>
          <Heading size='sm' margin={{ vertical: 'sm' }}>Use Animate as a wrapper around other components to add predefined animations to the HTML element</Heading>
          <code style={{ fontSize: '1.1rem', paddingLeft: '1rem', marginBottom: '1rem'}}>
            { `import { Animate } from 'fusion';` }
              <br />
              <br />
            { `<Animate action='fadeIn' duration='3s' iterate='infinite'>` }
              <br />
            &nbsp;&nbsp;{ `{children}`}
              <br />
            { `</Animate>` }
          </code>
          <Box justify='between' responsive>
            <Animate action='fadeIn' basis='16.67%' duration='3.1s' iterate='infinite' margin='sm'>
              <Box alignItems='center' family='semi' fill='gray' height='sm' justify='center'textAlign='center'>Fade In</Box>
            </Animate>
            <Animate action='fadeOut' basis='16.67%' duration='3s' iterate='infinite' margin='sm'>
              <Box alignItems='center' family='semi' fill='gray' height='sm' justify='center'textAlign='center'>Fade Out</Box>
            </Animate>
            <Animate action='wobble' basis='16.67%' duration='3s' iterate='infinite' margin='sm'>
              <Box alignItems='center' family='semi' fill='gray' height='sm' justify='center' textAlign='center'>Wobble</Box>
            </Animate>
            <Animate action='rotateX' basis='16.67%' duration='3s' iterate='infinite' margin='sm'>
              <Box alignItems='center' family='semi' fill='gray' height='sm' justify='center' textAlign='center'>RotateX</Box>
            </Animate>
            <Animate action='rotateY' basis='16.67%' duration='3s' iterate='infinite' margin='sm'>
              <Box alignItems='center' family='semi' fill='gray' height='sm' justify='center' textAlign='center'>RotateY</Box>
            </Animate>
            <Animate action='rotate' basis='16.67%' duration='3s' iterate='infinite' margin='sm' onHover>
              <Box alignItems='center' family='semi' fill='gray' height='sm' justify='center' textAlign='center'>Rotate On Hover</Box>
            </Animate>
          </Box>

          <Heading pad={{ between: 'hi' }} id='box'>Box</Heading>
          <Heading size='sm' margin={{ vertical: 'sm' }}>The Box component is the core component of most others and is the most robust overall</Heading>
          <code style={{ fontSize: '1.1rem', paddingLeft: '1rem', marginBottom: '1rem'}}>
            { `import { Box } from 'fusion';` }
              <br />
              <br />
            { `<Box fill='green' width='full'>` }
              <br />
            &nbsp;&nbsp;{ `{children}`}
              <br />
            { `</Box>` }
          </code>
          <Box alignItems='start' color='white' fill='green' justify='center' pad='md' width='full'>Full Width</Box>
          <Box alignItems='center' color='dark' fill='gray' justify='center' pad='md' width='3/4'>3/4 Width</Box>
          <Box alignItems='end' color='white' fill='blue' justify='center' pad='md' width='2/3'>2/3 Width</Box>
          <Box alignItems='end' color='white' fill='dark' justify='center' pad='md' width='1/2'>1/2 Width</Box>
          <Box alignItems='end' color='white' fill='red' justify='center' pad='md' width='1/3'>1/3 Width</Box>
          <Box alignItems='end' color='white' fill='brown' justify='center' pad='md' width='1/4'>1/4 Width</Box>

          <Heading id='button'>Button</Heading>
          <Heading size='sm' margin={{ vertical: 'sm' }}>Use the Button to navigate to other routes and perform actions like submitting a form</Heading>
          <code style={{ fontSize: '1.1rem', paddingLeft: '1rem', marginBottom: '1rem'}}>
            { `import { Button } from 'fusion';` }
              <br />
              <br />
            { `<Button path='/' replace>` }
              <br />
            &nbsp;&nbsp;{ `{children}`}
              <br />
            { `</Button>` }
          </code>
          <Box justify='even' pad={{ between: '300px' }} wrap>
            <Button fill='dark' primary onClick={
                (e) => e.target.innerText = e.target.innerText === 'Hello World'
                  ? 'Default'
                  : 'Hello World'
              }>Default</Button>
            <Button fill='green' primary onClick={
                (e) => e.target.innerText = e.target.innerText === 'Yay!'
                  ? 'Success'
                  : 'Yay!'
              }>Success</Button>
            <Button fill='yellow' primary onClick={
                (e) => e.target.innerText = e.target.innerText === 'Watch out'
                  ? 'Warning'
                  : 'Watch out'
              }>Warning</Button>
            <Button fill='red' primary onClick={
                (e) => e.target.innerText = e.target.innerText === 'Argh, failure!'
                  ? 'Danger'
                  : 'Argh, failure!'
              }>Danger</Button>
            <Button fill='gray' primary onClick={
                (e) => e.target.innerText = e.target.innerText === 'Let\'s start over'
                  ? 'Reset'
                  : 'Let\'s start over'
              }>Reset</Button>
            <Button fill='blue' primary path='/test'>Primary</Button>
            <Button fill='purple' secondary path='/test'>Secondary</Button>
          </Box>

          <Heading id='card'>Card</Heading>
          <Heading size='sm' margin={{ vertical: '' }}>The Card component is a brief snippet of content for a user to navigate into or to display search results.</Heading>
          <code style={{ fontSize: '1.1rem', paddingLeft: '1rem', marginBottom: '1rem'}}>
            { `import { Card } from 'fusion';` }
              <br />
              <br />
            { `<Card heading='Sample heading' category='Category' description='Sample description' image={ require('/path/to')}>` }
              <br />
            &nbsp;&nbsp;{ `{children}`}
              <br />
            { `</Card>` }
          </code>
          <Box justify='around' responsive>
            <Card
              basis='lg'
              heading='Card 1 Heading'
              category='CATEGORY 1'
              description='Card 1 Description'
              fill='light'
              image={ require('./../assets/bg4.jpg') }
              margin={{ top: 'sm' }}
              meta='Put an Anchor component here!' />
            <Card
              basis='xl'
              heading='Card 2 Heading'
              category='CATEGORY 2'
              description='Card 2 Description'
              fill='orange'
              image={ require('./../assets/bio.jpg') }
              margin={{ top: 'sm' }}
              meta='Put an Anchor component here!'
              metaBorder={{ bottom: '1px solid #ddd' }}
              reverse />
          </Box>

          <Heading id='heading'>Heading</Heading>
          <Heading size='sm' margin={{ vertical: '' }}>Use Heading to allow users to quickly scroll and find relevant content</Heading>
          <code style={{ fontSize: '1.1rem', paddingLeft: '1rem', marginBottom: '1rem'}}>
            { `import { Heading } from 'fusion';` }
              <br />
              <br />
            { `<Heading size='lg'>` }
              <br />
            &nbsp;&nbsp;{ `{children}`}
              <br />
            { `</Heading>` }
          </code>
          <Box direction='column' pad={{ horizontal: 'xl' }}>
            <Heading size='vl'>Heading 1</Heading>
            <Heading size='xl'>Heading 2</Heading>
            <Heading size='lg'>Heading 3</Heading>
            <Heading size='md'>Heading 4</Heading>
            <Heading size='sm'>Heading 5</Heading>
            <Heading size='xs'>Heading 6</Heading>
          </Box>

          <Heading id='paragraph'>Paragraph</Heading>
          <Heading size='sm' margin={{ vertical: '' }}>Paragraphs are text blocks that is configured to be at an optimum line length for reading</Heading>
          <code style={{ fontSize: '1.1rem', paddingLeft: '1rem', marginBottom: '1rem'}}>
            { `import { Paragraph } from 'fusion';` }
              <br />
              <br />
            { `<Paragraph justify='center' contain>` }
              <br />
            &nbsp;&nbsp;{ `{children}`}
              <br />
            { `</Paragraph>` }
          </code>
          <Box responsive justify='center' wrap>
            <Paragraph contain>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum eros sodales, laoreet arcu eleifend, vulputate ipsum. Phasellus vel felis urna. Cras vel vulputate mauris. Aenean gravida auctor euismod. Sed porttitor orci at odio fringilla, at consequat diam tristique. Maecenas sed gravida mi. Sed iaculis augue eu sollicitudin finibus. Phasellus tempor lorem ligula, non aliquam turpis semper eget.
            </Paragraph>
          </Box>

          <Heading id='search'>Search</Heading>
          <Heading size='sm' margin={{ vertical: '' }}>Data is prevalent everwhere today and the Search component rules it all</Heading>
          <code style={{ fontSize: '1.1rem', paddingLeft: '1rem', marginBottom: '1rem'}}>
            { `import { Search } from 'fusion';` }
              <br />
              <br />
            { `<Search onKeyUp={func} onEnter={func} />` }
          </code>
          <Box direction='column'>
            <Search border='blue' color='black' pad='lg' placeholderOptions='color: var(--blue); font-family: var(--font-light);' margin={{ bottom: 'sm' }}/>
            <Search color='white' fill='dark' pad='xl' placeholderOptions='color: var(--light); font-family: var(--font-light);'/>
          </Box>

          <Heading id='sidebar'>Sidebar</Heading>
          <Heading size='sm' margin={{ vertical: '' }}>A Sidebar is used for fixed containers on any side of the screen</Heading>
          <code style={{ fontSize: '1.1rem', paddingLeft: '1rem', marginBottom: '1rem'}}>
            { `import { Sidebar } from 'fusion';` }
              <br />
              <br />
            { `<Sidebar>` }
              <br />
            &nbsp;&nbsp;{ `{children}`}
              <br />
            { `</Sidebar>` }
          </code>
          <Box>The blue menu is a Sidebar component</Box>

          <Heading id='title'>Title</Heading>
          <Heading size='sm' margin={{ vertical: '' }}>Use the Title to emphasize certain text content</Heading>
          <code style={{ fontSize: '1.1rem', paddingLeft: '1rem', marginBottom: '1rem'}}>
            { `import { Title } from 'fusion';` }
              <br />
              <br />
            { `<Title>` }
              <br />
            &nbsp;&nbsp;{ `{children}`}
              <br />
            { `</Title>` }
          </code>
          <Box responsive>
            <Title>Sample title</Title>
          </Box>

          <Heading height='10vh'></Heading>
        </Box>
      </Box>
    );
  }
}
