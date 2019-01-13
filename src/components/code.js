import React from "react";
import HelloTwo from "components/svgHello.js";

let lastScrollY = 0;

console.log(lastScrollY);

export default class About extends React.Component {
  componentDidMount() {
    // window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("mousewheel", this.handleScroll);
    this.scrollY = window.scrollY;
  }

  componentWillUnmount() {
    // window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("mousewheel", this.handleScroll);
  }

  banner = React.createRef();

  handleScroll = event => {
    // Check if we have scrolled past the top of the outer container
    // If not, we exit.
    if (this.outerContainer.getBoundingClientRect().top > 0) {
      return;
    }

    // Get the amount of pixels scrolled past the top of the outer container
    const scrolledInsideContainer = event.scrollY - this.outerContainer.offsetTop;

    // lastScrollY = window.scrollY;
    // console.log(lastScrollY);

    // if (lastScrollY > 0) {
    // x + event.deltaY <= 0 || x + event.deltaY + test.width
    if (event.deltaY) {
      // event.preventDefault();
      const lastScrollY = this.scrollY + event.deltaY;
      this.scrollY = lastScrollY;
      this.banner.current.style.left = `${lastScrollY + 20}px`;

      // this.banner.current.style.top = `${lastScrollY + 20}px`;
    }
  };

  render() {
    return (
      <div ref={node => this.outerContainer = node}>
        <div className="element-move-horizontal_container">
          <HelloTwo innerRef={this.banner} />
          <div className="foo">some stuff here</div>
        </div>
        <div className="foo">There will be an element here</div>
      </div>
    );
  }
}

// <HorParralax><Hello /></HorParralax>/
// this.root.firstChild


render() {
    return (
      <div
        className="scroll-container"
        ref={node => (this.outerContainer = node)}
      >
        <Content innerRef={this.banner} />
      </div>
    );
  }
}
