import React, { Component } from 'react';
import Window from 'Window';
var sum = require('sum');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      winX: 50,
      winY: 100,
      winWidth: 300,
      winHeight: 150,
      winOpen: true
    };

    this.handleWindowMove = this.handleWindowMove.bind(this);
    this.handleWindowClose = this.handleWindowClose.bind(this);
    this.handleWindowMaximise = this.handleWindowMaximise.bind(this);
  }

  handleWindowMove(x, y) {
    // Move the window
    this.setState({
      winX: x,
      winY: y
    });
  }

  handleWindowMaximise() {
    console.log('handleWindowMaximise');

    this.setState({
      winX: 0,
      winY: 0,
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
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
              width={this.state.winWidth}
              height={this.state.winHeight}
              onMove={this.handleWindowMove}
              onClose={this.handleWindowClose}
              onMaximise={this.handleWindowMaximise} />
          : null}
      </div>
    );
  }
}
