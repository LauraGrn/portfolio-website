// import React from "react";
// import Content from "components/content.js";
// import Foo from "components/foo.js";

// let lastScrollY = 0;

// //console.log(lastScrollY);

// export default class About extends React.Component {
//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);
//     this.scrollY = window.scrollY;
//   }

//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   banner = React.createRef();

//   handleScroll = event => {
//     lastScrollY = window.scrollY;
//     console.log(lastScrollY);
//     let box = document.querySelector(".scroll-container");
//     let boxHeight = box.offsetHeight;

//     // const isScrollingDown = scrollDelta > 0;
//     // const isScrollingUp = scrollDelta < 0;
//     // const hasScrolledPastFoo = true;
//     // const hasScrolledPastFirstElement = true;

//     //console.log(boxHeight);

//     if (lastScrollY <= 20) {
//       // if you scrolled more than(40px) then jump to next elementc- scrollIntoView
//       //this.scrollY = lastScrollY;
//       //this.banner.current.style.left = `${boxWidth + lastScrollY}px`;
//       this.banner.current.style.left = `${lastScrollY}px`;
//       this.banner.current.style.top = `${lastScrollY}px`;
//       this.outerContainer.style.height = `${boxHeight + lastScrollY}px`;
//     } else if (lastScrollY <= 80) {
//       this.banner.current.style.left = `50%`;
//       this.banner.current.style.top = `${lastScrollY}px`;
//     } else {
//       // if (!hasScrolledPastFoo) {
//         // document.querySelector(".foo").scrollIntoView({ block: "end" });
//       }

//       //this.outerContainer.style.height = `20%`;
//       //this.outerContainer.style.transition = `height 2000ms ease`;
//     }
//   };

//   render()
//     return (
//       <React.Fragment>
//         <div
//           className="scroll-container"
//           ref={node => (this.outerContainer = node)}
//         >
//           <div className="static-left" />
//           <Content innerRef={this.banner} />
//         </div>
//         <Foo />
//       </React.Fragment>
//     );

// }

// <HorParralax><Hello /></HorParralax>/
// this.root.firstChild

{
  /* <Container style={{ position: "relative" }}></Container> */
}
