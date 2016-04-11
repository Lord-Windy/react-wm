import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

export default class Explain extends Component {
  constructor(props){
    super(props);
  }

  getText(){
    return `
Welcome to React Window Manager, a desktop window client for your browser to bridge the gap between mobile and PC.

Select the Button here to open the launcher.

And click the one of the symbols here to open up an Application window.
`
  }

  render(){
    var input = this.getText();
    return (
      <span
       className = "textFile">
        <ReactMarkdown source={input} />
        <figure>
          <img src="http://i.imgur.com/PuMc9hs.jpg" />
          <figcaption>Fig1. - A view of the pulpit rock in Norway.</figcaption>
        </figure>
      </span>
    );
  }


}
