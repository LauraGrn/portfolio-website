import React from "react";
import Skills from "components/skills.js";
import RevealRight from "components/revealRight.js";

export default class Test extends React.Component {
  render() {
    return (
      <div>
        <Skills />

        {/* <ContentRight /> */}

        <RevealRight />

        {/* <ContentLeft /> */}

        <Skills />
        {/* <ContentRight /> */}

        <RevealRight />
      </div>
    );
  }
}
