import React, { Component } from 'react';
import BallSpace from 'BallSpace';
import AboutMe from 'AboutMe';
import PMS from 'PMS';
import AboutRWM from 'AboutRWM';
import Explain from 'Explain';

export default class Launcher extends Component {

  constructor(props){
    super(props);
    this.state = {
      appMenu: false
    }
    this.handleAppMenu = this.handleAppMenu.bind(this);
    this.handleMakeApp = this.handleMakeApp.bind(this);

    this.handleMakeExplain();

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
    var space = this.getAboutMe();

    var app = {
      id: -1, //no need to worry about this, WindowManager will fix it
      winX: 150,
      winY: 100,
      winZ: 0, //another one WindowManager will handle
      winWidth: 800,
      winHeight: 600,
      space: space
    };

    this.props.addApp(app);

  }

  handleMakePMS(){
    var space = this.getPMS();

    var app = {
      id: -1, //no need to worry about this, WindowManager will fix it
      winX: 150,
      winY: 100,
      winZ: 0, //another one WindowManager will handle
      winWidth: 800,
      winHeight: 600,
      space: space
    };

    this.props.addApp(app);

  }

  handleMakeExplain(){
    var space = this.getExplain();

    var app = {
      id: -1, //no need to worry about this, WindowManager will fix it
      winX: 150,
      winY: 100,
      winZ: 0, //another one WindowManager will handle
      winWidth: 800,
      winHeight: 600,
      space: space
    };

    this.props.addApp(app);

  }

  handleMakeReactWM(){
    var space = this.testApp();

    var app = {
      id: -1, //no need to worry about this, WindowManager will fix it
      winX: 150,
      winY: 100,
      winZ: 0, //another one WindowManager will handle
      winWidth: 800,
      winHeight: 600,
      space: space
    };

    this.props.addApp(app);

  }

  handleMakeBall(){
    var space = this.getBallspace();

    var app = {
      id: -1, //no need to worry about this, WindowManager will fix it
      winX: 150,
      winY: 100,
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
      <AboutRWM />
    )
  }

  getPMS(){
    return (
      <PMS />
    )
  }

  getAboutMe(){
    return (
      <AboutMe />
    )
  }

  getExplain(){
    return (
      <Explain />
    )
  }

  getBallspace(){
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
              ME
            </button>
            <button
              title="Explain"
              className="launcher-btn"
              onClick={this.handleMakeExplain.bind(this)}>
              E
            </button>
            <button
              title="React Window Manager"
              className="launcher-btn"
              onClick={this.handleMakeReactWM.bind(this)}>
              R
            </button>
            <button
              title="Project Mod Smasher"
              className="launcher-btn"
              onClick={this.handleMakePMS.bind(this)}>
              F
            </button>
            <button
              title="Bouncing Ball"
              className="launcher-btn"
              onClick={this.handleMakeBall.bind(this)}>
              O
            </button>
            </span>
          : null
        }
      </div>
    );
  }
}
