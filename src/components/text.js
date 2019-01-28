import styled from "styled-components";
import {
  color,
  fontSize,
  width,
  display,
  height,
  flex,
  alignItems,
  textAlign,
  space
} from "styled-system";

const StyledText = styled.span`
  ${color};
  ${fontSize};
  ${width};
  ${display};
  ${height};
  ${flex};
  ${alignItems};
  ${textAlign};
  ${space};
  font-family: "Poppins", sans-serif;
`;

export default StyledText;
