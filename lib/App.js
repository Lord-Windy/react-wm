import React, { Component } from 'react';
import Window from 'Window';
var sum = require('sum');

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      winX: 50,
      winY: 100,
      winOpen: true
    };

    this.handleWindowMove = this.handleWindowMove.bind(this);
    this.handleWindowClose = this.handleWindowClose.bind(this);
  }

  handleWindowMove(x, y) {
    // Move the window
    this.setState({
      winX: x,
      winY: y
    });
  }

  handleWindowClose() {
    // Close the window
    this.setState({
      winOpen: false
    });
  }

  handl

  render() {
    return (
      <div>
        <h1>Hello, World.</h1>
        {(this.state.winOpen)
          ? <Window
              title={'Window 1'}
              x={this.state.winX}
              y={this.state.winY}
              width={480}
              height={300}
              onMove={this.handleWindowMove}
              onClose={this.handleWindowClose} />
          : null}
      </div>
    );
  }
}
