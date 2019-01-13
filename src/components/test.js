import React from "react";

export default class Test extends React.Component {
  render() {
    return (
      <div className="swing_container">
        <div
          className="swingloaded"
          onMouseOver={this.setHover}
          onMouseOut={this.cancelHover}
        />
        <div
          className="swing-rightloaded"
          onMouseOver={this.setHover}
          onMouseOut={this.cancelHover}
        />
      </div>
    );
  }
}

// let container = document.querySelector(".swing_container");
// let left = document.querySelector(".swingloaded");
// let right = document.querySelector(".swing-rightloaded");
// let mouseposition = event.clientX;
// console.log("mouseposition is" + mouseposition);

// left.style.width = `${mouseposition}px`;
// // left.style.transition = `width 2000ms ease`;
// right.style.width = `${container - mouseposition}px`;
// // right.style.transition = `width 2000ms ease`;

// if amount scrolled > red box.width
// then add pixels to width of red
// if amount scrolled < red box.width
// then add difference to width of pink

// Pixels to add
// value scrolled - redcoordinates.width

// let redcoordinates = red.getBoundingClientRect();
// console.log(redcoordinates);
// let pinkcoordinates = pink.getBoundingClientRect();
// console.log(pinkcoordinates);

// onMouseOver = event => {
//   // event.persist();
//   // console.log(event);

//   let left = document.querySelector(".swingloaded");
//   let leftWidth = left.getBoundingClientRect().width;
//   let right = document.querySelector(".swing-rightloaded");
//   let rightWidth = right.getBoundingClientRect().width;
//   let itleft = event.left;
//   console.log(itleft);

//   // if  {
//   //   right.style.width = `${rightWidth + 400}px`;
//   //   right.style.transition = `width 2000ms ease`;
//   // } else {
//   //   left.style.width = `${leftWidth + 400}px`;
//   //   left.style.transition = `width 2000ms ease`;
//   // }

//   // if mouseposition < leftWidth then rightWidth + 25%
//   // else leftWidth + 25%
