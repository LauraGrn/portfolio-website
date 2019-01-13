import React, { Component } from "react";
import AnimatedCircle from "components/animatedCircle.js";
import AnimatedPath from "components/animatedPath.js";

const loaded_open_class = "loaded";

export default class Banner extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.node.classList.add(loaded_open_class);
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleScroll = event => {};

  render() {
    return (
      <div className="banner_container">
        <div className="banner" ref={node => (this.node = node)}>
          <AnimatedCircle />
          <AnimatedPath />
        </div>
        <div className="banner-right" />
      </div>
    );
  }
}
