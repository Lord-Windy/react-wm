import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

export default class PMS extends Component {
  constructor(props){
    super(props);
  }

  getText(){
    return `## Project Mod Smasher

Project Mod Smasher is a Java program that merges Mods for the Dominions 4 game.

Dominions 4 is the labor of love of two Swedish professors. The fourth in its series, it plays very similar to a complex war board game. It has a small community, but a very loyal one. Frankly it has one of the best competitive communities I have ever seen. Turns progress slowly and the concepts are so complex that mistakes happen often and as such the community is extraordinarily forgiving and kind even in co-operative games.

Dominion mods are extremely powerful and completely change the makeup of a game. However, programming limitations set by the developers means that if two mods clash (more on that later) than whomever is loaded last is used. Mods are given a very limited range of IDs. For nations that might mean between an integer value of between 100 and 199, or for Spells between 5000 and 7999. These IDs are used everywhere and changing them by hand is a massive chore thanks to dependency hell. At the moment this leaves people allocating Dominions 4 mod IDs similar to IP addresses to avoid clashes. In a single game, it would be near impossible to reach the maxes of these IDs but despite that people conform to these allocations.

My solution was to apply Lexical Analysis to the problem. Each mod comes stand alone in a file that lists everything they need. By converting each entry into a Mod Item that lists their dependencies. Once you’ve loaded more than one, it becomes possible to do a mass ID change and compile into a single mod.

It is currently 3/4 finished. Normal mods are capable of being Smashed. Events, which have been added new to Dominions 4, are different and require tweaking to the Lexical Analyser to represent the fact that they don’t need any form of identification within the game.
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
