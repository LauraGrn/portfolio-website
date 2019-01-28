import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const ContainerLeft = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  justify-content: flex-start;
`;

const Box = styled.div`
  width: 80%;
  height: 100%;
  background-color: #ffffff;
  margin-top: 50px;
`;

export default class RevealLeft extends React.Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" delay={500} animatePreScroll={false}>
        <ContainerLeft>
          <Box />
        </ContainerLeft>
      </ScrollAnimation>
    );
  }
}
