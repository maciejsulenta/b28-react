import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

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
  margin-bottom: ${(props) => (props.opinion ? "1.5em" : "4em")};
  @media screen and (min-width: 380px) {
    font-size: 1em;
  }
  @media screen and (min-width: 500px) {
    font-size: 1.2em;
  }
  @media screen and (min-width: 768px) {
    font-size: 1em;
    left: ${(props) => (props.opinion ? "-20%" : "20%")};
    width: 16em;
  }
  @media screen and (min-width: 1280px) {
    top: ${(props) => (props.opinion ? "0" : "-2em")};
    margin-bottom: ${(props) => (props.opinion ? "2em" : "4em")};
  }
`;

export const OpinionQuote = styled.p`
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
  line-height: 0.95em;
  text-align: center;
  letter-spacing: 0.015em;
  padding-top: 1em;
  color: ${theme.colors.opinionFont};
`;
