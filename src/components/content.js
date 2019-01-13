import React, { Component } from "react";

export default class Content extends Component {
  render() {
    return (
      <div className="content-block" ref={this.props.innerRef}>
        <div className="content-1" />
        <div className="content-2" />
      </div>
    );
  }
}
