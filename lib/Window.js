import React, { Component } from 'react';

export default class Window extends Component {

  constructor(props) {
    super(props);

    this.state = {
      offsetX: 0,
      offsetY: 0,
      headerMouseDown: false,
      buttonMouseDown: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleCloseButtonDown = this.handleCloseButtonDown.bind(this);
    this.handleCloseButtonUp = this.handleCloseButtonUp.bind(this);
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
    this.handleMaximiseButtonClick = this.handleMaximiseButtonClick.bind(this);

    // Bind the mousemove and mouseup events to the entire page
    // Otherwise the 'dragging' will stop if the mouse leaves the header
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown(event) {
    var windowRect = this.refs.window.getBoundingClientRect();

    // Save the mouse's offest relative to the top left of the window
    this.setState({
      offsetX: event.clientX - windowRect.left,
      offsetY: event.clientY - windowRect.top,
      headerMouseDown: true,
    });
  }

  handleMouseUp(event) {
    this.setState({
      headerMouseDown: false,
      buttonMouseDown: false
    });
  }

  handleMouseMove(event) {
    // If the header is being dragged and we're not holding a header button
    if (this.state.headerMouseDown && !this.state.buttonMouseDown) {

      // Move to the mouse's position with minus the offset when the drag
      // started
      var windowRect = this.refs.window.getBoundingClientRect();
      var x = event.clientX - this.state.offsetX;
      var y = event.clientY - this.state.offsetY;
      this.props.onMove(this.props.id, x, y);
    }
  }

  handleCloseButtonDown(event) {
    this.setState({
      buttonMouseDown: true
    });
  }

  handleCloseButtonUp(event) {
    this.setState({
      buttonMouseDown: false
    });
  }

  handleCloseButtonClick(event) {
    if (this.props.onClose) {
      this.props.onClose(this.props.id);
    }
  }

  handleMaximiseButtonClick(event) {
    if (this.props.onMaximise) {
      this.props.onMaximise(this.props.id);
    }
  }

  style() {
    return {
      top: `${this.props.y}px`,
      left: `${this.props.x}px`,
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      zIndex: `${this.props.z}`
    };
  }

  render() {
    return (
      <div
        className="window"
        style={this.style()}
        ref="window">
        <div
          className="header"
          onMouseDown={this.handleMouseDown}>
          {this.props.title}
          {(this.props.onClose)
            ? <button
                className="header-btn"
                onMouseDown={this.handleCloseButtonDown}
                onMouseUp={this.handleCloseButtonUp}
                onClick={this.handleCloseButtonClick}>
                &#x2715;
              </button>
            : null}
          {(this.props.onMaximise)
            ? <button
                className="header-btn"
                onClick={this.handleMaximiseButtonClick}>
                &#9744;
              </button>
            : null}
      </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Window.propTypes = {
  title: React.PropTypes.string,
  id: React.PropTypes.number.isRequired,
  x: React.PropTypes.number.isRequired,
  x: React.PropTypes.number.isRequired,
  z: React.PropTypes.number.isRequired,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  space: React.PropTypes.object
}

Window.defaultProps = {
  title: 'Window',
  width: 640,
  height: 480
};
