import React from "react";
import ContentLeft from "components/contentLeft.js";
import ContentRight from "components/contentRight.js";
import RevealLeft from "components/revealLeft.js";
import RevealRight from "components/revealRight.js";

export default class Test extends React.Component {
  render() {
    return (
      <div>
        <ContentLeft />
        {/* <AnimatedCircle /> */}
        <RevealLeft />
        <ContentRight />
        {/* <AnimatedCircle /> */}
        <RevealRight />
        <ContentLeft />
        {/* <AnimatedCircle /> */}
        <RevealLeft />
        <ContentRight />
        {/* <AnimatedCircle /> */}
        <RevealRight />
      </div>
    );
  }
}
