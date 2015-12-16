import React, { Component } from 'react';
import Window from 'Window';

export default class WindowManager extends Component {

  //App object = id, winX, winY, winWidth, winHeight, winOpen

  constructor(props){
    console.log("GOT HERE");
    super(props);

    var app = {id:0, winX:50, winY:50, winWidth:600, winHeight:600, winOpen:true};
    var appe = {id:1, winX:50, winY:300, winWidth:300, winHeight:300, winOpen:true};
    var Apps = [];
    Apps.push(app);
    Apps.push(appe);

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
    var app = this.findApp(id);

    app.winX = x;
    app.winY = y;

    this.updateApp(id, app);
  }

  handleWindowMaximise(id) {
    var app = this.findApp(id);

    app.winX = 0;
    app.winY = 0;
    app.winWidth = window.innerWidth;
    app.winHeight = window.innerHeight;


    this.updateApp(id, app);
  }

  handleWindowClose(id) {
    // Close the window
    var app = this.findApp(id);

    app.winOpen = false;

    this.updateApp(id, app);
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

  updateApp(id, toUpdate){
    var apps = this.state.Apps;
    for (var i = 0; i < apps.length; i++){
      var app = apps[i];

      if (app.id == id){
        apps[i] = toUpdate;
        this.setState({
          Apps: apps
        });
        return;
      }
    }
    return null;
  }

  concenateRender(id){
    var app = this.findApp(id);
    if (app == null){
      return null;
    }

    return (
      <div>
        {(app.winOpen)
        ? <Window
            title={'Window ' + app.id}
            id={app.id}
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
    myComponents.push(this.concenateRender(1));
    return (
      <div>
       {myComponents}
      </div>

    );
  }
}
