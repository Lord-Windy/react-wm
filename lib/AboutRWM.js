import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

export default class AboutRWM extends Component {
  constructor(props){
    super(props);
  }

  //Placing core text here to avoid any issues with Node providing text files
  //or using a database for something that I will strip out or shove in a
  //branch

  getAboutRWM(){
    return `
# React Window Manager

[React Window Manager](https://github.com/Lord-Windy/react-wm) or React-wm is a windowing client designed to work as fully as Gnome or Windows. While currently incomplete, in it’s current form it has full window functionality and apps have their own sandbox. In this sandbox, similar to Operating Systems, apps have limited ability to make changes outside of their window. Apps can have different styles, functionality and memory.

React was born from from a successful Hackathon win. Charon as it was called then was designed to be a replacement to traditional remote desktops such as SSH and video Remote Desktops. Charon’s functionality was perfect, it had terminal access, file browsing and the ability to stream movies and pictures along with a text editor.

The issue with Charon came from the existing windowing library we were using. At every point we were unable to implement fun interesting things, such as Windows being able to resize themselves, ask to be closed or even access their own Javascript dependencies. Poorly coded apps were liable to interfere with other apps, and the dependency list had to modified by hand. In the end we had to drop almost half our apps from the presentation for various reasons.

React-WM started as a two person project to explore a startup, but quickly became my baby. I had never been much of a web programmer, but the challenge of making a Windowing System was an incredibly rewarding one. While there is significant work to be done, this is a project I care about deeply.

My current challenge is to sort out resizing and implement a touch interface for Phones and Tablets. After that, I want to improve the way app cans be loaded so users are able to ‘install’ apps on the fly and there is no need to define methods for each app.

[Github Link](https://github.com/Lord-Windy/react-wm)
`
  }

  render(){
    var input = this.getAboutRWM();
    var s = new String(input);
    console.log(input);
    return (
      <span
       className = "textWindow">
       <figure>
         <img src="http://i.imgur.com/j5UUORe.jpg?1"
              />
         <figcaption>"Fig1. - Prize for Charon, React's predcessor".</figcaption>
       </figure>
        <ReactMarkdown source={input} />

      </span>
    );
  }

}
