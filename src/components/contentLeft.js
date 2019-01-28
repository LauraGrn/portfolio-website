import React, { Component } from "react";
import StyledText from "components/text.js";
import TextWrapper from "components/textWrapper.js";

export default class ContentLeft extends Component {
  render() {
    return (
      <TextWrapper
        ref={this.props.innerRef}
        width={"100%"}
        display={"flex"}
        alignItems={"middle"}
        justifyContent={"flex-start"}
        height={"auto"}
        mt={"30%"}
      >
        <StyledText fontSize={7} color={"#444140"} height={"auto"}>
          A big bold headline
        </StyledText>
      </TextWrapper>
    );
  }
}
