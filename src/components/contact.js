import React, { Component } from "react";
import styled from "styled-components";
import TextWrapper from "components/textWrapper.js";
import StyledText from "components/text.js";
import {
  width,
  height,
  position,
  top,
  right,
  bottom,
  left,
  color,
  zIndex,
  borders
} from "styled-system";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f7ebe8;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow: hidden;
  background-color: #9a3d49;
  top: 0;
  z-index: 1;
`;

const Border = styled.div`
  ${position};
  ${top};
  ${width};
  ${right};
  ${bottom};
  ${left};
  ${height};
  ${color};
  ${zIndex};
  ${borders};
`;

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <TextWrapper
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="80%"
          m="10%"
          flexDirection="column"
        >
          <StyledText color="#ffffff" fontSize={6} textAlign="left">
            Let's build something together
          </StyledText>
          <StyledText color="#ffffff" fontSize={4} textAlign="center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium!
          </StyledText>
        </TextWrapper>

        <Border
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          bg="#A8763E"
          height="100px"
          zIndex="2"
        />
      </Container>
    );
  }
}
