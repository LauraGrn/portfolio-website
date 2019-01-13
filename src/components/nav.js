import React, { Component } from "react";
import { Link } from "react-router-dom";

const view_element_class = "show";

export default class Navigation extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.node.classList.add(view_element_class);
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="navigation" ref={node => (this.node = node)}>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/test">Test</Link>
        </div>
      </div>
    );
  }
}
