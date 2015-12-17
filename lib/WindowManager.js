import React, { Component } from 'react';
import Window from 'Window';

export default class WindowManager extends Component {

  //App object = id, winX, winY, winWidth, winHeight, winOpen

  constructor(props){
    console.log('GOT HERE');
    super(props);

    var app = {
      id:0,
      winX:50,
      winY:50,
      winWidth:600,
      winHeight:600,
      winOpen:true
    };

    var appe = {
      id:1,
      winX:50,
      winY:300,
      winWidth:300,
      winHeight:300,
      winOpen:true
    };

    var appr = {
      id:2,
      winX:150,
      winY:300,
      winWidth:300,
      winHeight:300,
      winOpen:true
    };

    var Apps = [];
    Apps.push(app);
    Apps.push(appe);
    Apps.push(appr);
    console.log(Apps);
    this.state = {
      Apps: Apps,
      ActiveWindow: -1,
      Launcher: null,
      testApp: 'true'
    };

    this.handleResizeWindow = this.handleResizeWindow.bind(this);
    this.handleWindowMove = this.handleWindowMove.bind(this);
    this.handleWindowClose = this.handleWindowClose.bind(this);
    this.handleWindowMaximise = this.handleWindowMaximise.bind(this);
    this.handleAddApp = this.handleAddApp.bind(this);
  }

  //example of a callback for spaces. Won't be complete for awhile
  handleResizeWindow(id, height, width){
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

  handleAddApp(app) {
    //App object = id, winX, winY, winWidth, winHeight, winOpen
    var Apps = this.state.Apps;
    Apps.push(app);

    this.setState({
      Apps: Apps
    });
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

  deleteSlice(){

  }

  deleteApp(){

  }

  updateSlice(pos, apps){
    //already at the end of the list
    console.log(pos);
    console.log(apps.length);
    if (pos == apps.length - 1){
      return apps;
    }

    var app = apps[pos];
    console.log(app);
    apps.splice(pos, 1);
    console.log(apps);
    apps.push(app);

    return apps;
  }

  updateApp(id, toUpdate){
    var apps = this.state.Apps;
    for (var i = 0; i < apps.length; i++){
      var app = apps[i];

      if (app.id == id){
        apps[i] = toUpdate;
        apps = this.updateSlice(i, apps);
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
            onResize={this.handleResizeWindow}
            onMove={this.handleWindowMove}
            onClose={this.handleWindowClose}
            onMaximise={this.handleWindowMaximise} />
        : null}
      </div>
    );
  }

  renderApps(){
    var components = [];

    for (var i = 0; i < this.state.Apps.length; i++){
      components.push(this.concenateRender(this.state.Apps[i].id));
    }

    return components;

  }

  render() {
    //render launcher first
    //render each app in the list
    return (
      <div>
       {this.renderApps()}
      </div>

    );
  }
}
