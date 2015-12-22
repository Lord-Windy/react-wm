import React, { Component } from 'react';

export default class BallSpace extends Component {
  constructor(props){
    super(props);
    this.state = {
      dx: 4,
      dy: 4,
      y: 150,
      x: 10
    };
  }

  componentDidMount(){
    console.log('mounted');
    this.setupCanvas();
    this.interval = setInterval(this.loop.bind(this),10);
  }

  componentWillUnmount(){
    console.log('unmounted');
    clearInterval(this.interval);
  }

  setupCanvas(){
    this.context = this.refs.canvas.getContext('2d');
    this.setState({
      context: this.context
    });
  }

  loop(){

    var context = this.state.context;
    var dx = this.state.dx;
    var dy = this.state.dy;
    var x = this.state.x;
    var y = this.state.y;


    context.clearRect(0,0,300,300);
    context.beginPath();
    context.fillStyle="#0000ff";
    context.arc(x,y,20,0,Math.PI*2,true);
    context.closePath();
    context.fill();
    if(x<0 || x>300)
      dx=-dx;
    if( y<0 || y>300)
      dy=-dy;
      x+=dx;
      y+=dy;


    this.setState({
      context: this.context,
      dx: dx,
      dy: dy,
      x: x,
      y: y
    })
  }

  render(){

    //
    return (
      <canvas ref="canvas" width="300" height="300" />
    );
  }
}
