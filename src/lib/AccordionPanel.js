import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { Transition } from 'react-transition-group';
import { Box, Button } from '../lib';

export default class AccordionPanel extends Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);

    this.state = { maxHeight: 0 };
  }

  _onClick(node) {
    const { onChange } = this.props;
    onChange();
  }

  componentDidMount() {
    const { open, first } = this.props;

    const node = ReactDOM.findDOMNode(this);
    this.setState({
      ...this.state,
      maxHeight: first ? 0 : node.clientHeight
    });
  }

  render() {
    /*
      - fix animation for more than 2 items and openMulti logic
      (also very coupled to Accordion component)
      - create rotation for arrow
    */
    const { heading, children, icon, open, ...props } = this.props;
    const collapseIcon = !!icon
      ? <span style={{
          lineHeight: '1.5rem',
          fontSize: '1.5rem',
          transform: !!open ? 'rotate(0deg)' : 'rotate(-90deg)',
          transition: 'transform 3s ease'
        }}>
        { typeof icon === 'boolean' ? String.fromCharCode(9660) : icon }
      </span>
      : null;

    const defaultPanelStyle = {
      maxHeight: 0,
      overflow: 'hidden',
      transition: `max-height 200ms linear`
    };

    let transitionPanelStyles = {
      entering: { maxHeight: open ? 0 : this.state.maxHeight },
      entered: { maxHeight: open ? this.state.maxHeight : 0 }
    }

    return <Box direction='column' ref='panel'>
      <Button {...props}
        justify='between'
        onClick={(e) => this._onClick(e)}
        outline='none'>
        { heading }
        { collapseIcon }
      </Button>
      <Transition appear in={true} timeout={100}>
        {(status) => {
          return <div style={{
              ...defaultPanelStyle,
              ...transitionPanelStyles[status]
            }}>
            { children }
          </div>
        }}
      </Transition>
    </Box>;
  }
}

AccordionPanel.defaultProps = {
  border: {
    left: 'none',
    right: 'none',
    top: 'none',
    bottom: '1px solid #ccc'
  },
  color: 'dark',
  cursor: 'pointer',
  fill: 'clear',
  hoverBorder: {
    left: 'none',
    right: 'none',
    top: 'none',
    bottom: '1px solid #ccc'
  },
  hoverColor: 'dark',
  hoverFill: 'transparent',
  icon: true,
  justify: 'start',
  width: 'full'
};
