import React from "react";
import styled, { keyframes } from "styled-components";

const SquiggleSvg = React.forwardRef((props, ref) => {
  return (
    <svg
      className="squiggle"
      // viewBox="0 0 800 600"
      height="800px"
      width="600px"
      fill="#FFFFFF"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: "none" }}
      >
        <defs>
          <filter id="squiggly-0">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="0"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="1"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          <filter id="squiggly-2">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="3"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          <filter id="squiggly-4">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="4"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
          </filter>
        </defs>
      </svg>

      <path
        d="M287,300a113,113 0 1,0 226,0a113,113 0 1,0 -226,0"
        fill="#444140"
      />
    </svg>
  );
});

export default SquiggleSvg;
