import React, { Component } from 'react';
import BallSpace from 'BallSpace';

export default class Launcher extends Component {

  constructor(props){
    super(props);
    this.state = {
      appMenu: false
    }
    this.handleAppMenu = this.handleAppMenu.bind(this);
    this.handleMakeApp = this.handleMakeApp.bind(this);
  }

  handleAppMenu(){
    var toChange = true;
    if (this.state.appMenu){
      toChange = false;
    }

    this.setState({
      appMenu: toChange
    });
  }

  //App object = id, winX, winY, winZ, winWidth, winHeight, space
  handleMakeApp(){
    var space = this.testApp();
    var app = {
      id: -1, //no need to worry about this, WindowManager will fix it
      winX: 50,
      winY: 50,
      winZ: 0, //another one WindowManager will handle
      winWidth: 800,
      winHeight: 600,
      space: space
    };

    this.props.addApp(app);

  }

  // Will be removed when I update with Launcher
  testApp(){
    return (
      <BallSpace />
    )
  }
  //&#9883;
  render() {
    return (
      <div className="launcher">
        <button
          className="launcher-btn"
          onClick={this.handleAppMenu}>
          B
        </button>

        {(this.state.appMenu)
          ? <span>
            <button
              title="About Me"
              className="launcher-btn"
              onClick={this.handleMakeApp}>
              T
            </button>
            <button
              title="Bouncing Ball"
              className="launcher-btn"
              onClick={this.handleMakeApp}>
              O
            </button>
            <button
              title="React Window Manager"
              className="launcher-btn"
              onClick={this.handleMakeApp}>
              R
            </button>
            <button
              title="Project Mod Smasher"
              className="launcher-btn"
              onClick={this.handleMakeApp}>
              F
            </button>
            </span>
          : null
        }
      </div>
    );
  }
}
