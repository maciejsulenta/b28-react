import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const TitleWrap = styled.div`
  z-index: 2;
`;
export const Title = styled.h2`
  font-size: 2.6em;
  font-family: "Playfair Display", serif;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  user-select: none;
  color: ${theme.colors.fontWhite};
  letter-spacing: 0.02em;
  line-height: 1em;
  @media screen and (min-width: 768px) {
    font-size: 3em;
  }
`;
