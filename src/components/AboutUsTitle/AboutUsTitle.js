import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const TitleContainerWrap = styled.div`
  overflow-x: hidden;
  @media screen and (min-width: 768px) {
    margin-bottom: -6em;
  }
`;
export const TitleContainer = styled.div`
  position: relative;
  height: fit-content;
  padding: 2em 0;
  width: 300%;
  background-color: transparent;
  /* transition: all 0.1s linear; */
  @media screen and (max-width: 767px) {
    transform: skew(0deg) !important;
    left: 0 !important;
    width: 100%;
  }
`;
export const TitleWrap = styled.div`
  width: 15em;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes.big};
  font-family: "Playfair Display", serif;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  user-select: none;
  color: ${theme.colors.fontWhite};
  letter-spacing: 0.02em;
  line-height: 1em;

  display: ${(props) => (props.mobile ? "block" : "none")};
  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.huge};
    text-align: left;
    white-space: nowrap;
    display: ${(props) => (props.mobile ? "none" : "block")};
  }
  /* @media screen and (min-width: 960px) {
    font-size: 5em;
  }
  @media screen and (min-width: 1280px) {
    font-size: 5.5em;
  }
  @media screen and (min-width: 1600px) {
    font-size: 6em;
  } */
`;
