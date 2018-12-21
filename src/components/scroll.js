import React, { Component } from "react";

export default class Scroll extends Component {
  render() {
    return (
      <span className="hello-scrolldown" style={{ bottom: 90 }}>
        <i className="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={18}
            viewBox="0 0 17 10"
          >
            <path
              className="cls-1"
              d="M6.22,8.75,3.37,5.89H17V4.12H3.37L6.22,1.25,5,0,0,5l5,5Z"
            />
          </svg>
        </i>
        <span className="txt">
          <span>S</span>
          <span>c</span>
          <span>r</span>
          <span>o</span>
          <span>l</span>
          <span>l</span>
        </span>
      </span>
    );
  }
}
