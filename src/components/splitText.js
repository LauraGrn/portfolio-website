import React from "react";
import posed from "react-pose";
import SplitText from "react-pose-text";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};

export default class StyledSplitText extends React.Component {
  render() {
    return (
      <div>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          React Pose Text
        </SplitText>
      </div>
    );
  }
}
