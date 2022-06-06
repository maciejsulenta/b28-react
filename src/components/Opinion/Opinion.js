import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const OpinionTitle = styled.h2`
  width: 7em;
  font-family: "Playfair Display";
  font-size: 1.2em;
  color: ${theme.colors.fontWhite};
  letter-spacing: 0.015em;
  text-align: center;
  font-weight: 400;
  /* background-color: blue; */
  padding: 1em 0 2em 0;
  @media screen and (min-width: 500px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 1280px) {
    font-size: 1.6em;
  }
  @media screen and (min-width: 1920px) {
    padding: 3em 0 2em 0;
  }
`;

export const OpinionContainer = styled.div`
  width: 14em;
  font-size: 0.88em;
  height: fit-content;
  color: ${theme.colors.opinionFont};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => (props.opinion == "true" ? "1.5em" : "4em")};
  @media screen and (min-width: 380px) {
    font-size: 1em;
  }
  @media screen and (min-width: 500px) {
    font-size: 1.2em;
  }
  @media screen and (min-width: 768px) {
    font-size: 1em;
    left: ${(props) => (props.opinion == "true" ? "-20%" : "20%")};
    width: 16em;
    margin-bottom: 4em;
  }
  @media screen and (min-width: 960px) {
  }
  @media screen and (min-width: 1280px) {
    left: ${(props) => (props.opinion == "true" ? "-22%" : "22%")};
    font-size: 1.2em;
    width: 16em;
    margin-bottom: ${(props) => (props.opinion == "true" ? "2em" : "4em")};
  }
  @media screen and (min-width: 1600px) {
    font-size: 1.3em;
  }
`;

export const OpinionQuote = styled.p`
  /* font-family: "Monotype Corsiva"; */
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  font-style: italic;
  font-weight: 400;
  font-size: 3.1em;
  line-height: 0.8em;
`;
export const OpinionText = styled.p`
  font-family: "Playfair Display";
  font-size: 1em;
  font-weight: 400;
  line-height: 0.9em;
  text-align: center;
  letter-spacing: 0.015em;
  padding-top: 1em;
  color: ${theme.colors.opinionFont};
`;
