import React, { Component } from "react";
import AnimatedCirclePath from "components/animatedCirclePath.js";
import AnimatedPath from "components/animatedPath.js";
import styled from "styled-components";
import HeadingText from "components/headingText.js";
import Text from "components/text.js";

const Container = styled.div`
  height: 100vh;
  width: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const Full = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #a8763e;

  left: 0;
  z-index: 3;
`;

const Left = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
  background-color: #a8763e;
  left: 0;
  z-index: 2;
  overflow-x: hidden;
`;

const Right = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
  background-color: #ffffff;
  right: 0;
  z-index: 1;
`;

export default class Banner extends Component {
  state = {
    leftHover: false,
    rightHover: false,
    firstAnimationFinished: this.props.homeAnimation
  };

  componentDidMount() {
    window.addEventListener("mousewheel", this.handleScroll);

    this.timerOne = setTimeout(() => {
      window.removeEventListener("mousewheel", this.handleScroll);
      if (this.fullContainer) {
        this.fullContainer.style.width = `50%`;
        this.fullContainer.style.opacity = `0`;
        this.fullContainer.style.transition = `width 1500ms ease, opacity 3000ms ease`;
      }
    }, 5000);

    this.timerTwo = setTimeout(() => {
      this.setState({ firstAnimationFinished: true });
      this.props.updateHomeAnimation();
    }, 8000);
  }

  componentWillUnmount() {
    clearTimeout(this.timerOne);
    clearTimeout(this.timerTwo);
  }

  handleScroll = event => {
    event.preventDefault();
  };

  onMouseEnterLeft = e => {
    // debugger;
    if (!this.state.firstAnimationFinished) return;
    this.setState({ leftHover: true });
    this.leftContainer.style.width = `70%`;
    this.leftContainer.style.transition = `width 1100ms ease`;
    this.rightContainer.style.width = "30%";
    this.rightContainer.style.transition = `width 1100ms ease`;
  };

  onMouseLeaveLeft = e => {
    this.setState({ leftHover: false });
    this.leftContainer.style.width = `50%`;
    this.leftContainer.style.transition = `width 1100ms ease`;
    this.rightContainer.style.width = "50%";
    this.rightContainer.style.transition = `width 1500ms ease`;
  };

  onMouseEnterRight = e => {
    if (!this.state.firstAnimationFinished) return;
    this.setState({ rightHover: true });
    this.rightContainer.style.width = `70%`;
    this.rightContainer.style.transition = `width 1100ms ease`;
    this.leftContainer.style.width = "30%";
    this.leftContainer.style.transition = `width 1100ms ease`;
  };

  onMouseLeaveRight = e => {
    this.setState({ rightHover: false });
    this.rightContainer.style.width = `50%`;
    this.rightContainer.style.transition = `width 1100ms ease`;
    this.leftContainer.style.width = "50%";
    this.leftContainer.style.transition = `width 1100ms ease`;
  };

  render() {
    // console.log({ state: this.state });
    return (
      <Container>
        {!this.state.firstAnimationFinished && (
          <Full ref={node => (this.fullContainer = node)}>
            <AnimatedCirclePath />
          </Full>
        )}
        <Left
          onMouseEnter={this.onMouseEnterLeft}
          onMouseLeave={this.onMouseLeaveLeft}
          ref={node => (this.leftContainer = node)}
        >
          {this.state.leftHover ? (
            <div>
              <Text fontSize={3} color={"#fff"} width={"350px"}>
                Fed up with Lorem Ipsum? Yes! I'd rather have some placeholder
                text about...
              </Text>
              <AnimatedPath />
            </div>
          ) : (
            <HeadingText
              fontSize={5}
              color={"#2B2118"}
              width={"30%"}
              display={"block"}
              height={"100px"}
            >
              Product Manager
            </HeadingText>
          )}
        </Left>
        <Right
          onMouseEnter={this.onMouseEnterRight}
          onMouseLeave={this.onMouseLeaveRight}
          ref={node => (this.rightContainer = node)}
        >
          {this.state.rightHover === false ? (
            <HeadingText fontSize={5} color={"#2B2118"} width={"30%"}>
              Creative Developer
            </HeadingText>
          ) : null}
          {this.state.rightHover ? (
            <div width={"350px"}>
              <Text fontSize={3} color={"#2B2118"} width={"350px"}>
                Fed up with Lorem Ipsum? Yes! I'd rather have some placeholder
                text about...
              </Text>
              <AnimatedPath />
            </div>
          ) : null}
        </Right>
      </Container>
    );
  }
}
