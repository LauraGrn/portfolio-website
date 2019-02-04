import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const ContainerLeft = styled.div`
  display: flex;
  width: 80vw;
  height:60%;
  justify-content: flex-start;
  background-color: #a8763e;
  margin
`;

export default class Skills extends React.Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" delay={500} animatePreScroll={false}>
        <ContainerLeft>{this.props.children}</ContainerLeft>
      </ScrollAnimation>
    );
  }
}
