import styled, { css } from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import posed from "react-pose";
import { tween } from "popmotion";
import Dots from "components/svg/dots.js";
import { matchPath, withRouter } from "react-router";

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;

  top: 0px;
  left: 0px;

  position: fixed;
  z-index: 5;
`;

const StyledButton = styled.button`
  width: 64px;
  height: 64px;
  right: 0;
  position: absolute;
  top:0;
  color: black;


  svg {
    background: transparent;
  }

  :focus {
    text-decoration: none!important;
    border: none!important;
    outline: none
  }

  :active {
    text-decoration: none!important;
    border: none!important;
    outline: none;
`;

const Styleditem = styled.div`
  color: #ffffff;
  margin-top: 2%;
  margin-left: 5%;

  a {
    text-decoration: none;
    color: #9a3d49;
    font-size: 1.5em;
    text-transform: uppercase;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  height: 64px;
  background: white;
  opacity: 0;
  border-radius: 50%;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  height: 100%;
  flex-direction: column;
`;

const SideBar = posed(Wrapper)({
  open: {
    x: "0%",
    delayChildren: 300,
    staggerChildren: 80,
    transition: {
      x: { ease: "easeOut", duration: 200 },
      opacity: { ease: "easeOut", duration: 200 },
      default: { ease: "linear", duration: 200 }
    }
  },
  closed: {
    x: "calc(-100% + 80px)",
    delay: 0,
    transition: {
      x: { ease: "easeOut", duration: 200 },
      opacity: { ease: "easeOut", duration: 200 },
      default: { ease: "linear", duration: 200 }
    }
  }
});

const Item = posed(Styleditem)({
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 20,
    opacity: 0
  }
});

const PosedBackground = posed(Background)({
  open: {
    transform: "scale(100)",
    opacity: 1,
    transition: {
      transform: { ease: "easeOut", duration: 900 }
    }
  },
  closed: {
    transform: "scale(0)",
    opacity: 0,
    transition: {
      transform: { ease: "easeOut", duration: 1000 }
    }
  }
});

class Navigation extends Component {
  state = {
    show: false,
    isOpen: false,
    route: null
  };

  constructor(props) {
    super(props);
    const isHomepage = matchPath(props.location.pathname, {
      path: "/",
      exact: true,
      strict: false
    });

    if (isHomepage) {
      this.timer = setTimeout(() => {
        this.setState({
          show: true
        });
      }, 6500);
    } else {
      this.state.show = true;
    }
  }

  // componentDidUpdate() {
  //   if (!this.state.show) {
  //     const isHomepage = matchPath(this.props.location.pathname, {
  //       path: "/",
  //       exact: true,
  //       strict: false
  //     });

  //     if (isHomepage) {
  //       this.timer = setTimeout(() => {
  //         this.setState({
  //           show: true
  //         });
  //       }, 6500);
  //     } else {
  //       this.setState({ show: true });
  //     }
  //   }
  // }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname !== state.route) {
      return {
        ...state,
        isOpen: false,
        route: props.location.pathname
      };
    }
    return null;
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;

    if (!this.state.show) {
      return null;
    }

    return (
      <SideBar pose={isOpen ? "open" : "closed"}>
        <PosedBackground pose={isOpen ? "open" : "closed"} />
        <Container style={{ position: "relative" }}>
          <StyledButton onClick={this.toggle}>
            {isOpen ? "X" : <Dots />}
          </StyledButton>
          <Item>
            <Link to="/">Home</Link>
          </Item>
          <Item>
            <Link to="/about">About</Link>
          </Item>
          <Item>
            <Link to="/contact">Contact</Link>
          </Item>
        </Container>
      </SideBar>
    );
  }
}

export default withRouter(Navigation);
