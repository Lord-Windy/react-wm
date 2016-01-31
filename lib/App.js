import React, { Component } from 'react';
import WindowManager from 'WindowManager';
import Launcher from 'Launcher';

import './css/app.scss';

var sum = require('sum');

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <WindowManager />
      </div>
    );
  }
}
