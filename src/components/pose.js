import React from "react";
import posed from "react-pose";
import styled from "styled-components";
import { tween } from "popmotion";

const Container = styled.div`
  height: 100vh;
  width: auto;
  background-color: #f7ebe8;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const Square = posed.div({
  idle: {
    height: "100vh",
    width: "50%",
    transition: tween
  },
  hovered: {
    height: "100vh",
    width: "70%",
    transition: tween
  }
});

const StyledSquareleft = styled(Square)`
  background: #ff6978;
`;

const StyledSquareright = styled(Square)`
  background-color: #444140;
`;

export default class Pose extends React.Component {
  state = { leftHover: false, rightHover: false };

  render() {
    return (
      <Container>
        <StyledSquareleft
          pose={this.state.rightHover ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ leftHover: true })}
          onMouseLeave={() => this.setState({ leftHover: false })}
        />
        <StyledSquareright
          pose={this.state.leftHover ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ rightHover: true })}
          onMouseLeave={() => this.setState({ rightHover: false })}
        />
      </Container>
    );
  }
}
