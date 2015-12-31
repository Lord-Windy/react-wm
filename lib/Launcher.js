import React, { Component } from 'react';

export default class Launcher extends Component {

  constructor(props){
    super(props);
    this.state = {
      appMenu: false
    }
    this.handleAppMenu = this.handleAppMenu.bind(this);
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

  render() {
    return (
      <div className="launcher">
        <button
          className="launcher-btn"
          onClick={this.handleAppMenu}>
          &#9883;
        </button>
      </div>
    );
  }
}
