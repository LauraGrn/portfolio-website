import React from "react";

const add_go = "go";
export default class AnimatedCircle extends React.Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.node.classList.add(add_go);
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="svg-wrapper">
        <svg width={190} height={190} ref={node => (this.node = node)}>
          <circle stroke="#444140" fill="#444140" cx={95} cy={95} r={94} />
        </svg>
      </div>
    );
  }
}
