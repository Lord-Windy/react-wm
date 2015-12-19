import React, { Component } from 'react';

export default class BallSpace extends Component {
  constructor(props){
    super(props);
    this.dx=4;
    this.dy=4;
    this.y=150;
    this.x=10;
  }

  componentDidMount(){
    console.log('mounted');
    this.setupCanvas();
    this.setInterval(this.loop,10);
  }

  componentWillUnmount(){

  }

  setupCanvas(){
    this.canvas = this.getDOMNode();
    this.context = this._canvas.getContext('2d');
  }

  loop(){
    console.log('Looping!');
  }

  render(){

    //
    return (
      <canvas width="300" height="300" />
    );
  }
}
