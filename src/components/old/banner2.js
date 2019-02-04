import React, { Component } from "react";
import AnimatedCircle from "components/animatedCircle.js";
import AnimatedPath from "components/animatedPath.js";
import styled from "styled-components";
import posed from "react-pose";
import { tween } from "popmotion";

const Container = styled.div`
  height: 100vh;
  width: auto;
  background-color: #f7ebe8;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const Square = posed.div({
  before: {
    height: "100vh",
    width: "100%",
    transition: tween
  },
  idle: {
    height: "100vh",
    width: "50%",
    transition: tween
  },
  hovered: {
    height: "100vh",
    width: "70%",
    transition: tween
  }
});

const Left = styled(Square)`
  background: #ff6978;
`;

const Right = styled(Square)`
  background-color: #444140;
`;

export default class BannerTwo extends Component {
  state = { leftHover: false, rightHover: false };
  componentDidMount() {
    this.timer = setTimeout(() => {
      // this.leftContainer.classList.add(loaded_open_class);
      this.leftContainer.style.width = `50%`;
      this.leftContainer.style.transition = `width 1500ms ease`;
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <Container>
        <Left
          initialPose="before"
          pose={this.state.rightHover ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ leftHover: true })}
          onMouseLeave={() => this.setState({ leftHover: false })}
          ref={node => (this.leftContainer = node)}
        >
          <AnimatedCircle />
          <AnimatedPath />
        </Left>
        <Right
          pose={this.state.leftHover ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ rightHover: true })}
          onMouseLeave={() => this.setState({ rightHover: false })}
        />
      </Container>
    );
  }
}
