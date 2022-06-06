import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const AboutUsTextContainer = styled.div`
  width: 100%;
  min-height: 400px;
  height: 24em;
  background-color: ${theme.colors.menuSecond};
  position: relative;
  top: -5em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 85%;
    right: -8%;
    min-height: 300px;
    height: 14em;
    justify-content: flex-end;
    padding-right: 2em;
    font-size: 0.8em;
  }
  @media screen and (min-width: 1280px) {
    height: 16em;
  }
  @media screen and (min-width: 1600px) {
    height: 17em;
    padding-right: 4.5em;
  }
  @media screen and (min-width: 1920px) {
    height: 18em;
    padding-right: 4em;
  }
`;

export const AboutUsTextWrap = styled.div`
  width: 70%;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  @media screen and (min-width: 1920px) {
    width: 50%;
  }
`;
export const AboutUsTextContent = styled.p`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: ${(props) => (props.lettering ? "600" : "400")};
  font-size: ${(props) => (props.lettering ? "0.85em" : "0.8em")};
  text-align: center;
  letter-spacing: 0.015em;
  color: ${theme.colors.fontDark};
  padding-bottom: ${(props) => (props.lettering ? ".5em" : "0")};

  @media screen and (min-width: 550px) {
    font-size: ${(props) => (props.lettering ? "1em" : ".9em")};
  }
  @media screen and (min-width: 768px) {
    font-size: ${(props) => (props.lettering ? ".8em" : ".7em")};
  }
  @media screen and (min-width: 1280px) {
    font-size: ${(props) => (props.lettering ? ".9em" : ".8em")};
  }
  @media screen and (min-width: 1600px) {
    font-size: ${(props) => (props.lettering ? "1.05em" : ".95em")};
  }
  @media screen and (min-width: 1920px) {
    font-size: ${(props) => (props.lettering ? "1.15em" : "1.05em")};
  }
`;
