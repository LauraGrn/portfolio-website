import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  cursor: pointer;
  animation: opacity-in 1.5s ease-in-out 3.5s forwards;
  display: flex;
  justify-content: flex-end;
  width: 50px;
  height: 50px;
  transition: all 0.15s ease;

  :active {
    text-decoration: none;
  }

  :hover {
    transform: rotate(-45deg);
  }
`;

const StyledCircle = styled.circle`
  fill: #2b2118;
`;

const Dots = React.forwardRef((props, ref) => {
  return (
    <StyledSvg xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(20 7)" stroke="none">
        <StyledCircle cx="4" cy="3.987" r="3.883" />
        <StyledCircle cx="4" cy="17.126" r="3.883" />
        <StyledCircle cx="4" cy="30.252" r="3.883" />
      </g>
      <circle
        stroke="#2B2118"
        strokeWidth="2"
        cx="24"
        cy="24"
        r="23"
        fill="none"
        fillRule="evenodd"
      />
    </StyledSvg>
  );
});

export default Dots;
