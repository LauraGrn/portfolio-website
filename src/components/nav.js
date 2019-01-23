import styled, { css } from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 0px;
  overflow: hidden;

  ${props =>
    props.show &&
    css`
      height: 3%;
      width: 100vw;
      top: 0px;
      left: 0px;
      transition: height 1000ms ease;
      position: fixed;
      z-index: 5;
      background: #ffffff;
      display: flex;
      justify-content: flex-end;
    `}
`;

const Styledlink = styled(Link)`
  color: #ccc;
`;

// const StyledLink = styled(Link)`
//   ${Wrapper} & {

//   }
// `;

export default class Navigation extends Component {
  state = {
    show: false
  };

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        show: true
      });
    }, 6500);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <Wrapper show={this.state.show}>
        <Styledlink to="/">Home</Styledlink>
        <Styledlink to="/about">About</Styledlink>
        <Styledlink to="/test">Test</Styledlink>
      </Wrapper>
    );
  }
}
