import React, { Component } from "react";

export default class Scroll extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.node.style.opacity = "10";
    }, 6000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="anim-arrow" ref={node => (this.node = node)}>
        <div className="tri-1" />
        <div className="tri-2" />
      </div>
    );
  }
}
