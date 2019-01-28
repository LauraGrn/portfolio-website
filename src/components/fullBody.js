import React, { Component } from "react";
import styled from "styled-components";
import { color, fontSize, width } from "styled-system";
import ScrollAnimation from "react-animate-on-scroll";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: flex-end;
  background-color: #000000;
`;

const StyledText = styled.span`
  ${color};
  ${fontSize};
  ${width};
  font-family: "Poppins", sans-serif;
`;

export default class FullBody extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" delay={800} animatePreScroll={false}>
        <Container>
          <StyledText fontSize={3} color={"#000000"} width={"50%"}>
            Some interesting text here about building products and what I like
          </StyledText>
        </Container>
      </ScrollAnimation>
    );
  }
}
