import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default class WindowManager extends Component {

  //App object = id, winX, winY, winWidth, winHeight, winOpen

  constructor(props){
    console.log("GOT HERE");
    super(props);

    var app = {id:0, winX:50, winY:50, winWidth:600, winHeight:600, winOpen:true};
    var Apps = [];
    Apps.push(app);

    this.state = {
      Apps: Apps,
      ActiveWindow: -1,
      Launcher: null,
      testApp: "true"
    };

    this.handleWindowMove = this.handleWindowMove.bind(this);
    this.handleWindowClose = this.handleWindowClose.bind(this);
    this.handleWindowMaximise = this.handleWindowMaximise.bind(this);


  }


  //example of a callback for spaces. Won't be complete for awhile
  resizeWindow(id, height, width){
    return 0;
  }

  handleWindowMove(id, x, y) {
    // Move the window
    console.log('Window Move Event');
  }

  handleWindowMaximise(id) {
    console.log('Window Maxmise Event');
  }

  handleWindowClose(id) {
    // Close the window
    console.log('Window Close Event');
  }

  findApp(id) {
    for (var i = 0; i < this.state.Apps.length; i++){
      var app = this.state.Apps[i];

      if (app.id == id){
        return app;
      }
    }
    return null;
  }

  concenateRender(id){
    var app = this.findApp(id);
    console.log(app);
    if (app == null){
      return null;
    }

    return (
      <div>
        {(app.winOpen)
        ? <Window
            title={'Window 0'}
            x={app.winX}
            y={app.winY}
            width={app.winWidth}
            height={app.winHeight}
            onMove={this.handleWindowMove}
            onClose={this.handleWindowClose}
            onMaximise={this.handleWindowMaximise} />
        : null}
      </div>
    );
  }

  render() {
    //render launcher first
    //render each app in the list
    var myComponents = [];
    myComponents.push(this.concenateRender(0));
    return (
      <div>
       {myComponents}
      </div>

    );
  }
}
