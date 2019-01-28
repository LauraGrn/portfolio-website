import React, { Component } from "react";
import styled from "styled-components";
import { color, fontSize, width } from "styled-system";

const StyledText = styled.span`
  ${color};
  ${fontSize};
  ${width};
  font-family: "Poppins", sans-serif;
`;

export default class HeadingText extends Component {
  state = { render: false };

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ render: true });
    }, 5000);
  }

  render() {
    return (
      <div>
        {this.state.render && (
          <StyledText
            className={this.state.hidden}
            fontSize={this.props.fontSize}
            color={this.props.color}
            width={this.props.width}
          >
            {this.props.children}
          </StyledText>
        )}
      </div>
    );
  }
}
