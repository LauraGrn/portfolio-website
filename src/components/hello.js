import React, { Component } from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

export default class Hello extends Component {
  render() {
    return (
      <div className="hello" ref={this.props.innerRef}>
        <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="bounceOutLeft"
          delay={6000}
        >
          <h1>
            <svg width={428} height={343} viewBox="0 0 428.83 343.87">
              <line
                className="line"
                x1="21.5"
                y1="0.01"
                x2="21.5"
                y2="152.01"
                style={{
                  strokeDashoffset: "2e-05",
                  strokeDasharray: "none"
                }}
              />
              <line
                className="line"
                x1="21.5"
                y1="74.01"
                x2="103.17"
                y2="74.01"
                style={{
                  strokeDashoffset: "2e-05",
                  strokeDasharray: "none"
                }}
              />
              <line
                className="line"
                x1="103.17"
                y1="0.01"
                x2="103.17"
                y2="152.01"
                style={{
                  strokeDashoffset: "2e-05",
                  strokeDasharray: "none"
                }}
              />
              <line
                className="line"
                x1="168.17"
                y1="0.01"
                x2="168.17"
                y2="152.01"
                style={{
                  strokeDashoffset: "2e-05",
                  strokeDasharray: "none"
                }}
              />
              <line
                className="line"
                x1="168.17"
                y1="19.5"
                x2="245.83"
                y2="19.5"
                style={{
                  strokeDashoffset: "2e-05",
                  strokeDasharray: "none"
                }}
              />
              <line
                className="line"
                x1="168.17"
                y1="76.01"
                x2="240.83"
                y2="76.01"
                style={{
                  strokeDashoffset: "2e-05",
                  strokeDasharray: "none"
                }}
              />
              <line
                className="line"
                x1="168.17"
                y1="131.5"
                x2="245.83"
                y2="131.5"
                style={{
                  strokeDashoffset: "2e-05",
                  strokeDasharray: "none"
                }}
              />
              <g>
                <line
                  className="line"
                  x1="21.5"
                  y1="186.68"
                  x2="21.5"
                  y2="338.68"
                  style={{
                    strokeDashoffset: "2e-05",
                    strokeDasharray: "none"
                  }}
                />
                <line
                  className="line"
                  x1="21.5"
                  y1="318.17"
                  x2="94.17"
                  y2="318.17"
                  style={{
                    strokeDashoffset: "2e-05",
                    strokeDasharray: "none"
                  }}
                />
              </g>
              <g>
                <line
                  className="line"
                  x1="128.5"
                  y1="186.68"
                  x2="128.5"
                  y2="338.68"
                  style={{
                    strokeDashoffset: "2e-05",
                    strokeDasharray: "none"
                  }}
                />
                <line
                  className="line"
                  x1="128.5"
                  y1="318.17"
                  x2="201.17"
                  y2="318.17"
                  style={{
                    strokeDashoffset: "2e-05",
                    strokeDasharray: "none"
                  }}
                />
              </g>
              <g>
                <circle
                  className="line"
                  cx="283.51"
                  cy="262.69"
                  r="60.68"
                  style={{
                    strokeDashoffset: "2e-05",
                    strokeDasharray: "none"
                  }}
                />
              </g>
              <g>
                <circle
                  className="dot"
                  cx="403.17"
                  cy="316.01"
                  r="25.67"
                  data-svg-origin="403.17000007629395 316.00999641418457"
                  style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                />
              </g>
            </svg>
          </h1>
        </ScrollAnimation>
      </div>
    );
  }
}
