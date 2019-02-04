import React, { Component } from "react";
import StyledText from "components/text.js";
import TextWrapper from "components/textWrapper.js";
import Skills from "components/skills.js";
import styled from "styled-components";

// const Box = styled.div`
//   width: 100vw;
//   height: 40%;
//   background-color: #ffffff;
//   border: dashed 1px #444140;
// `;

export default class SkillsContent extends Component {
  render() {
    return (
      <Skills>
        <TextWrapper
          ref={this.props.innerRef}
          width={"100%"}
          display={"flex"}
          alignItems={"middle"}
          justifyContent={"flex-start"}
          mt={"2%"}
        >
          <StyledText fontSize={7} color={"#444140"}>
            A big bold headline
          </StyledText>
        </TextWrapper>
      </Skills>
    );
  }
}
