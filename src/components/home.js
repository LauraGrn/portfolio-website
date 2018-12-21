import React, { Component } from "react";
import "animate.css/animate.min.css";
import BannerBox from "components/bannerbox";
import Foo from "components/foo";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <BannerBox />
        <Foo />
      </React.Fragment>
    );
  }
}
