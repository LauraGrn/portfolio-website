import React, { Component } from "react";
import "animate.css/animate.min.css";
import Banner from "components/banner.js";
import Scroll from "components/scroll.js";
import Example from "components/svg/example.js";
import ScrollPath from "components/scrollPath.js";
import Content from "components/content.js";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <Scroll />
        <ScrollPath>
          <Example />
        </ScrollPath>
        <Content />
      </React.Fragment>
    );
  }
}
