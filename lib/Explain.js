import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

export default class Explain extends Component {
  constructor(props){
    super(props);
  }

  getText(){
    return `
## Welcome to React Window Manager

a desktop window client for your browser to bridge the gap between mobile and PC.

![alt text](http://i.imgur.com/EeLJPg7.png "Closed Menu")

Select the Button here to open the launcher.

![alt text](http://i.imgur.com/k1DV0MC.png "Opened Menu")

And click the one of the symbols here to open up an Application window.
`
  }

  render(){
    var input = this.getText();
    return (
      <span
       className = "textWindow">

        <ReactMarkdown source={input} />

      </span>
    );
  }


}
