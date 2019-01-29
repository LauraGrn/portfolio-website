import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import SquiggleSvg from "components/svg/squiggleSvg.js";
import ContentLeft from "components/contentLeft.js";

const ContainerLeft = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  justify-content: flex-start;
`;

const Box = styled.div`
  width: 50%;
  height: 83%;
  background-color: #ffffff;
  border: dashed 1px #444140;
`;

export default class RevealLeft extends React.Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" delay={500} animatePreScroll={false}>
        <ContainerLeft>
          <Box>
            <ContentLeft />
            <SquiggleSvg />
          </Box>
        </ContainerLeft>
      </ScrollAnimation>
    );
  }
}
