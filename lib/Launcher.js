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
      winWidth: 300,
      winHeight: 300,
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

  render() {
    return (
      <div className="launcher">
        <button
          className="launcher-btn"
          onClick={this.handleAppMenu}>
          &#9883;
        </button>
        {(this.state.appMenu)
          ? <button
              onClick={this.handleMakeApp}>
              bum
            </button>
          : null
        }
      </div>
    );
  }
}
