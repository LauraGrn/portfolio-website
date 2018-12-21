import React, { Component } from "react";
import Hello from "components/hello";
import Banner from "components/banner";
import Scroll from "components/scroll";

export default class BannerBox extends Component {
  render() {
    return (
      <div className="banner_container">
        <Banner />
        <Hello />
        <Scroll />
      </div>
    );
  }
}
