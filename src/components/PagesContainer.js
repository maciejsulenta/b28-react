import styled from "styled-components";
import { theme } from "../assets/styles/theme";

export const PagesContainer = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${theme.colors.bgcDark};
  overflow-x: hidden;
  @media screen and (min-width: 450px) {
    font-size: 22px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 960px) {
    font-size: 26px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 27px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 32px;
  }
`;
