import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

export default class AboutMe extends Component {
  constructor(props){
    super(props);
  }

  getText(){
    return `
# Samuel Brown

### Contact Details:-

**Phone:** 0412744217

**Email:** sam@samuelbrown.me

Most of my career has been in tech support. I responded extremely well to additional training in programming and worked diligently in my own time to perfect it. I pick up new skills rapidly to solve problems in my programming pursuits. This has helped me immensely from my transition from Tech Support  with minimal programming to University.

I’ve recently discovered the joy of web development. Networking and system programming are areas I excel and enjoy. After some successful Hackathon Projects I’ve been awakened to the power of web development.

I can work independently, however I am very social and love working within teams.  I thrive on challenges and tenacious when attacking tasks. It is important for me to deliver results in a timely manner as part of a team.

### Hobbies:

* Dominions 4
* Needlework
* Walking my Dogs

### Recent Contests:

* **Unearthed 2016:-** Vulcan Rock Identifier.

  Python and Open Computer Vision to detect size of rock fragments in Block Cave mines. Achieved 60fps detection on a low powered mackintosh using Edge Detection.

* **QUU Design Jam 2016:-** River Sediment Trading Scheme

  *Won: First place, Internship (turned down).*

  Moreton Bay will be unviable to release waste water from sewage plants in the next 10 years. The issue is sediment released up river. Using existing sensor technology to measure the sediment it is possible to require landowners manage their riverfront property.

* **QUT Hack 2015:**- Charon Browser Desktop

  *Won: $1000 cash prize.*

  A complete browser desktop giving access to files, terminal, pictures and videos in a browser. All applications can be launched from a launcher and are enclosed in a moveable window. Reason for my React-WM project was to improve this system.

### Technical Experience

C/C++ (8 years), C#/.Net (7 years),Java (7 years) Network Code(7 years), Thrift, Swift, Javascript, HTML+CSS, Git, SVN, Python, Lua

### Current Projects (Brief):

* *React-WM:-* A desktop in a browser and you are currently inside a version of it. More spoken about in it’s own App. [Github Link](https://github.com/Lord-Windy/react-wm)

* *Mercury/Vesta:-* Server/Client pair, allowing home computers to act low overhead servers. Utilising UDP’s properties of no maintenance computer cycles or TCP keep-alive, it is possible to have a server run in the background safely. Vesta the home client, connects to Mercury which handles all requests. Through the power of Apache Thrift connections, Vesta can open a TCP connection to Mercury to pass data forward to whomever requests it. Plans to integrate into React-VM. Unavailable for viewing at this time.

* *Project Mod Smasher:-* Java project that combines Dominion 4 mods together. It uses Lexical Analysis to determine dependencies between Unique IDs to avoid dependency hell. Big issue with Dominions 4 is there a small range of Unique ID for mods and they are assigned like IP addresses instead of dynamically. Available for viewing on request.

### History

* **University of Queensland** *2014 - Present*

  Bachelor of IT - Software Engineering

* **Tafe** **2014 - 2014**

  Cert III in IT. Learned how to administrate a Taken as pathway into University.

* **IBM Senior Technical Support** *2011 - 2013*

  Top level of contactable support for the IBM products. Responsible for ensuring that customers concerns are resolved. Took ownership of customer problems. Required significant technological knowledge of Windows and Mac operating systems, along with scripting solutions. Worked with Engineering and other team members to solve problems.

* **IBM Technical Support** *2010-11*

  A role supporting mobile devices for IBM customers. Provided tech support and training in how to use their problems.

### References available upon request.

`
  }

  render(){
    var input = this.getText();
    return (
      <span
       className = "textWindow">
       <figure>
        <img src="http://i.imgur.com/nu7RVSk.png?1"/>
        <figcaption>Myself at Unearthed</figcaption>
       </figure>
       <ReactMarkdown
       source={input} />

      </span>
    );
  }

}
