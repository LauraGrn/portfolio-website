import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const ContainerRight = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  justify-content: flex-end;
`;

const Box = styled.div`
  width: 80%;
  height: 100%;
  background-color: #eae6e5;
  margin-top: 50px;
`;

export default class RevealRight extends React.Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" delay={800} animatePreScroll={false}>
        <ContainerRight>
          <Box />
        </ContainerRight>
      </ScrollAnimation>
    );
  }
}
