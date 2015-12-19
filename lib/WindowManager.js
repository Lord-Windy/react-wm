import React, { Component } from 'react';
import Window from 'Window';
import BallSpace from 'BallSpace';

export default class WindowManager extends Component {

  //App object = id, winX, winY, winZ, winWidth, winHeight, winOpen

  constructor(props){
    console.log('GOT HERE');
    super(props);

    var sp = new BallSpace();
    console.log(sp);
    var app = {
      id:0,
      winX:50,
      winY:50,
      winZ:0,
      winWidth:600,
      winHeight:600,
      winOpen:true,
      winSpace: sp
    };


    var Apps = [];
    Apps.push(app);
    console.log(Apps);
    this.state = {
      Apps: Apps,
      curID: 1,
      Launcher: null,
      testApp: 'true'
    };

    this.handleResizeWindow = this.handleResizeWindow.bind(this);
    this.handleWindowMove = this.handleWindowMove.bind(this);
    this.handleWindowClose = this.handleWindowClose.bind(this);
    this.handleWindowMaximise = this.handleWindowMaximise.bind(this);
    this.handleAddApp = this.handleAddApp.bind(this);
  }


  /**
 * Callback for windows to allow resizing of their windows.
 * @param {Number} id of the app being changed
 * @param {Number} height
 * @param {Number} width
 */
  handleResizeWindow(id, height, width){
    var app = this.findApp(id);

    app.winWidth = width;
    app.winHeight = height;

    this.updateApp(id, app);
  }

  /**
 * Callback for windows to allow moving of their windows.
 * @param {Number} id of the app being changed
 * @param {Number} x
 * @param {Number} y
 */
  handleWindowMove(id, x, y) {
    // Move the window
    var app = this.findApp(id);

    app.winX = x;
    app.winY = y;

    this.updateApp(id, app);
  }

  /**
  * Callback for windows to allow maximising of their windows.
  * @param {Number} id of the app being changed
  */
  handleWindowMaximise(id) {
    var app = this.findApp(id);

    app.winX = 0;
    app.winY = 0;
    app.winWidth = window.innerWidth;
    app.winHeight = window.innerHeight;

    this.updateApp(id, app);
  }

  /**
 * Callback for windows to allow to destroy themselves
 * @param {Number} id of the app being changed
 */
  handleWindowClose(id) {
    // Close the window
    this.deleteApp(id);
  }

  /**
  * Callback for windows to allow creation of new app.
  * @param {Object: App} App
  */
  handleAddApp(app) {
    //App object = id, winX, winY, winWidth, winHeight, winOpen
    app.id = this.state.curID;
    var newID = this.state.curID + 1;
    app.winZ = this.state.Apps.length + 1;
    var Apps = this.state.Apps;
    Apps.push(app);

    this.setState({
      Apps: Apps,
      curID: newID
    });
  }

  /**
  * Callback for windows to allow resizing of their windows.
  * @param {Number} id of the app being found
  */
  findApp(id) {
    for (var i = 0; i < this.state.Apps.length; i++){
      var app = this.state.Apps[i];
      if (app.id == id){
        return app;
      }
    }
    return null;
  }

  /**
  * Deletes the app by the given ID
  * @param {Number} id of the app being changed
  */
  deleteApp(id){
    var apps = this.state.Apps;
    for (var i = 0; i < apps.length; i++){
      var app = apps[i];

      if (app.id == id){
        apps.splice(i,1);
        console.log(apps);
        this.setState({
          Apps: apps
        });
        return;
      }
    }
    return null;
  }

  /**
  * Updates the Z position of the calling app to bring it to the foreground.
  * @param {Number} pos in the array
  * @param {Array: Apps} apps
  */
  updateZ(pos, apps){
    //already at the end of the list

    if (apps[pos].winZ == apps.length){
      return apps;
    }

    for (var i = 0; i < apps.length; i++){
      if (i == pos){
        apps[i].winZ = apps.length;
      } else {
        apps[i].winZ = apps[i].winZ - 1;
      }
    }
    return apps;
  }

  /**
  * Updates the state with a new version of the app.
  * @param {Number} id of the app being changed
  * @param {Object: App} toUpdate
  */
  updateApp(id, toUpdate){
    var apps = this.state.Apps;
    for (var i = 0; i < apps.length; i++){
      var app = apps[i];

      if (app.id == id){
        apps[i] = toUpdate;
        apps = this.updateZ(i, apps);
        this.setState({
          Apps: apps
        });
        return;
      }
    }
    return null;
  }

  /**
  * Creates a window component for the render function
  * @param {Number} id
  */
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
            z={app.winZ}
            width={app.winWidth}
            height={app.winHeight}
            space={app.winSpace}
            onResize={this.handleResizeWindow}
            onMove={this.handleWindowMove}
            onClose={this.handleWindowClose}
            onMaximise={this.handleWindowMaximise} />
        : null}
      </div>
    );
  }

  /**
  * Generates an array of components to render
  */
  renderApps(){
    var components = [];

    for (var i = 0; i < this.state.Apps.length; i++){
      components.push(this.concenateRender(this.state.Apps[i].id));
    }

    return components;

  }

  render() {
    return (
      <div>
       {this.renderApps()}
      </div>
    );
  }
}
