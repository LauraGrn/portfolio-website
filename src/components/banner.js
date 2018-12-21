import React, { Component } from "react";
const loaded_open_class = "loaded";

export default class Banner extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.node.classList.add(loaded_open_class);
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return <div className="banner" ref={node => (this.node = node)} />;
  }
}
