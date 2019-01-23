import React, { Component } from "react";
import StyledText from "components/text.js";
import TextWrapper from "components/textWrapper.js";
// import "animate.css/animate.min.css";
// import ScrollAnimation from "react-animate-on-scroll";

export default class Content extends Component {
  render() {
    return (
      // <ScrollAnimation animateIn="fadeIn" duration={5}>
      <TextWrapper
        ref={this.props.innerRef}
        width={"100%"}
        display={"flex"}
        alignItems={"top"}
        justifyContent={"center"}
        height={"auto"}
        mt={"100px"}
      >
        <StyledText fontSize={4} color={"#444140"} textAlign={"center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </StyledText>
      </TextWrapper>
      // </ScrollAnimation>
    );
  }
}
