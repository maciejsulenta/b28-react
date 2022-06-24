import styled from "styled-components";
import { theme } from "../assets/styles/theme";

export const Title = styled.h2`
  font-size: ${(props) =>
    props.opinions ? theme.fontSizes.normal : theme.fontSizes.big};
  font-family: "Playfair Display", serif;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  user-select: none;
  color: ${theme.colors.fontWhite};
  letter-spacing: 0.02em;
  line-height: 1em;
`;
