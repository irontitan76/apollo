import React, { Component } from 'react';
import { Box } from '../lib';

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);

    let open = typeof this.props.open === 'number'
      ? [this.props.open]
      : this.props.open || [];

    this.state = {
      open,
      first: Array(props.children.length).fill(true)
    };
  }

  _onChange(i, first) {
    let firstState = [...this.state.first];
    let open = [...this.state.open];
    const { openMulti } = this.props;
    const openIndex = open.indexOf(i);

    if ( openIndex > -1 ) {
      open.splice(openIndex, 1);
    } else {
      openMulti ? open.push(i) : open = [i];
    }

    firstState[i] = false;

    this.setState({ open, first: firstState });
  }

  render() {
    const { children, iconAll, ...props } = this.props;

    const panels = React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        icon: iconAll,
        onChange: (first) => this._onChange(index, first),
        open: this.state.open.indexOf(index) > -1,
        first: this.state.first[index]
      });
    });

    return <Box direction='column' style={{ maxHeight: '100%' }}{...props}>
      {panels}
    </Box>;
  }
}
