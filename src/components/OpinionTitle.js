import styled from "styled-components";
import { theme } from "../assets/styles/theme";

export const OpinionTitle = styled.h2`
  width: 8em;
  font-family: "Playfair Display";
  font-size: 1.2em;
  color: ${theme.colors.fontWhite};
  letter-spacing: 0.015em;
  text-align: center;
  font-weight: 400;
  /* background-color: brown; */
  padding: 1em 0;
  @media screen and (min-width: 500px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 1280px) {
    font-size: 1.6em;
  }

`;
