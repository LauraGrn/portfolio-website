import React, { Component } from "react";
import StyledText from "components/text.js";
import TextWrapper from "components/textWrapper.js";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

export default class ContentRight extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" duration={5}>
        <TextWrapper
          ref={this.props.innerRef}
          width={"100%"}
          display={"flex"}
          alignItems={"top"}
          justifyContent={"flex-end"}
          height={"auto"}
          mt={"5%"}
        >
          <StyledText fontSize={7} color={"#444140"} height={"auto"}>
            A big bold headline
          </StyledText>
        </TextWrapper>
      </ScrollAnimation>
    );
  }
}
