import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 3000px;
  width: 500px;
  display: flex;
  align-content: flex-start;
  justify-content: center;
  border: 2px solid black;
  // margin-top: 100px;
`;

export default class ScrollPath extends Component {
  pathLength;

  componentDidMount() {
    window.addEventListener("mousewheel", this.handleScroll);
    const svgRef = this.node;
    this.pathLength = svgRef.getTotalLength();
    // console.log(svgRef);
    // console.log(this.pathLength);
    svgRef.style.strokeDasharray = this.pathLength + " " + this.pathLength;
    svgRef.style.strokeDashoffset = this.pathLength;
    svgRef.getBoundingClientRect();
  }

  componentWillUnmount() {
    window.removeEventListener("mousewheel", this.handleScroll);
  }

  handleScroll = event => {
    const svgRef = this.node;
    const pixelsScrolled = window.scrollY;
    // console.log(pixelsScrolled);
    const viewportHeight = window.innerHeight;
    const totalHeight = document.documentElement.offsetHeight;
    const percentageScrolled = pixelsScrolled / (totalHeight - viewportHeight);
    let drawLength = this.pathLength * percentageScrolled;
    // console.log({ pixelsScrolled, totalHeight, percentageScrolled });
    // console.log(drawLength);
    svgRef.style.strokeDashoffset = this.pathLength - drawLength;

    // const percentageScrolled =
    //   (document.documentElement.scrollTop + document.body.scrollTop) /
    //   (document.documentElement.scrollHeight -
    //     document.documentElement.clientHeight);
    // // console.log(percentageScrolled);
    // let drawLength = this.pathLength * percentageScrolled;
    // svgRef.style.strokeDashoffset = this.pathLength - drawLength;
  };

  //   render() {
  //     return <Wrapper>{this.props.children}</Wrapper>;
  //   }

  render() {
    return (
      <Wrapper>
        <React.Fragment>
          {React.Children.map(this.props.children, child =>
            React.cloneElement(child, { ref: node => (this.node = node) })
          )}
        </React.Fragment>
      </Wrapper>
    );
  }
}
