import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const TitleContainerWrap = styled.div`
  overflow-x: hidden;
  @media screen and (min-width: 768px) {
    margin-bottom: -6em;
  }
`;
export const TitleContainer = styled.div.attrs((props) => ({
  style: {
    left: props.posText,
  },
}))`
  position: relative;
  height: fit-content;
  padding: 2em 0;
  width: 300%;
  background-color: transparent;
  transition: all 0.01s linear;
  @media screen and (max-width: 767px) {
    transform: skew(0deg) !important;
    left: 0 !important;
    width: 100%;
  }
`;
export const Title = styled.h2`
  display: ${(props) => (props.mobile ? "block" : "none")};
  font-family: "Playfair Display";
  font-size: 3.2em;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.015em;
  color: ${theme.colors.fontWhite};
  @media screen and (min-width: 450px) {
    font-size: 4em;
  }
  @media screen and (min-width: 550px) {
    font-size: 5.5em;
  }
  @media screen and (min-width: 768px) {
    font-size: 6em;
    text-align: left;
    display: ${(props) => (props.mobile ? "none" : "block")};
  }
  @media screen and (min-width: 960px) {
    font-size: 6.5em;
  }
  @media screen and (min-width: 1600px) {
    font-size: 7em;
  }
`;
