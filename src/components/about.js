import React from "react";

let lastScrollY = 0;

console.log(lastScrollY);

export default class About extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  banner = React.createRef();

  handleScroll = () => {
    lastScrollY = window.scrollY;
    console.log(lastScrollY);

    if (lastScrollY > 0) {
      this.banner.current.style.left = `${lastScrollY}px`;
    }
  };

  render() {
    return (
      <div className="banner_container">
        <div className="test" ref={this.banner} />
        <div className="foo">There will be an element here</div>
      </div>
    );
  }
}
