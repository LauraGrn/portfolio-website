import React from "react";
// import Content from "components/content.js";
import ScrollPath from "components/scrollPath.js";
import Example from "components/svg/example.js";

export default class Test extends React.Component {
  render() {
    return (
      <div>
        {/* <Content /> */}
        <ScrollPath>
          <Example />
        </ScrollPath>
      </div>
    );
  }
}
