import React, { Component } from "react";
import "animate.css/animate.min.css";
import Banner from "components/banner.js";
import Scroll from "components/scroll.js";
// import Line from "components/svg/line.js";
// import ScrollPath from "components/scrollPath.js";

import Test from "components/test.js";
// import FullBody from "components/fullBody.js";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner
          homeAnimation={this.props.homeAnimation}
          updateHomeAnimation={this.props.updateHomeAnimation}
        />

        <Scroll />
        <Test />
        {/* <ScrollPath>
          <Line />
        </ScrollPath> */}
      </React.Fragment>
    );
  }
}
