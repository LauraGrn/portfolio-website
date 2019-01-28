import React from "react";
import styled, { keyframes } from "styled-components";

const add_go = "go";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  align-content: center;
  background-color: transparent;
  padding 50px;
  align-items: center;
`;

const Svg = styled.svg`
  background-color: transparent;
  opacity: 1;
`;

const StyledPath = styled.path`
  stroke: #ffffff;
  stroke-dasharray: ${props => props.myPathLength};
  opacity: 1;
  animation: ${props => (props.myPathLength ? dash(props) : null)} 5s
    ease-in-out;
  padding: 1px;
`;

const dash = props => keyframes` {
    from {
        stroke-dashoffset: ${props.myPathLength};
      }
    
      to {
        stroke-dashoffset: 0;
      }
  }
  `;

export default class AnimatedCirclePath extends React.Component {
  state = { pathlength: 0 };

  componentDidMount() {
    let myPathLength = this.path.getTotalLength();
    this.setState({ pathlength: myPathLength });
    this.timer = setTimeout(() => {
      //   console.log(myPathLength);
      //   this.svgRef.classList.add(add_go);
      this.svgRef.style.opacity = `0`;
      this.svgRef.style.transition = `opacity 800ms ease`;
    }, 6000);

    this.timerTwo = setTimeout(() => {
      this.path.style.fill = `#ffffff`;
      this.path.style.transition = `fill 5000ms ease`;
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    clearTimeout(this.timerTwo);
  }

  render() {
    return (
      <Wrapper>
        <Svg
          width={200}
          height={200}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1002 1002"
          ref={node => (this.svgRef = node)}
        >
          <StyledPath
            fill="none"
            d="M1,501a500,500 0 1,0 1000,0a500,500 0 1,0 -1000,0"
            ref={node => (this.path = node)}
            strokeWidth="4"
            myPathLength={this.state.pathlength}
          />
        </Svg>
      </Wrapper>
    );
  }
}
