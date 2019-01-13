import React from "react";
import styled, { keyframes } from "styled-components";

const animation = keyframes` {
  0%, 70%, 100% {
    transform: scale3D(1, 1, 1);
  } 35% {
    transform: scale3D(0, 0, 1);
  }
}`;

const Container = styled.div`
  width: 40px;
  height: 40px;
  margin: 100px auto;
`;

const Cube = styled.div`
  width: 33%;
  height: 33%;
  background-color: #b0976d;
  float: left;
  animation: ${animation} 1.3s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    animation-delay: 0.1s;
  }
  &:nth-child(5) {
    animation-delay: 0.2s;
  }
  &:nth-child(6) {
    animation-delay: 0.3s;
  }
  &:nth-child(7) {
    animation-delay: 0s;
  }
  &:nth-child(7) {
    animation-delay: 0.1s;
  }
  &:nth-child(8) {
    animation-delay: 0.2s;
  }
`;

export default function SpinnerElement(props: any) {
  return (
    <Container {...props}>
      <Cube color={props.color} />
      <Cube color={props.color} />
      <Cube color={props.color} />
      <Cube color={props.color} />
      <Cube color={props.color} />
      <Cube color={props.color} />
      <Cube color={props.color} />
      <Cube color={props.color} />
      <Cube color={props.color} />
    </Container>
  );
}
