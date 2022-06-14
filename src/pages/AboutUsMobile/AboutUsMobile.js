import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const AboutUsWrap = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const TextContainer = styled.div`
  width: 100%;
  min-height: 400px;
  height: 24em;
  background-color: ${theme.colors.menuSecond};
  position: relative;
  top: -4em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextWrap = styled.div`
  width: 80%;
  position: relative;
`;
export const Text = styled.p`
  font-family: ${(props) => (props.lettering ? "Playfair Display" : "Nunito")};
  font-style: normal;
  font-weight: ${(props) => (props.lettering ? "800" : "500")};
  font-size: ${(props) => (props.lettering ? theme.fontSizes.normal : "0.8em")};
  text-align: center;
  letter-spacing: 0.02em;
  color: ${theme.colors.fontDark};
  padding-bottom: ${(props) => (props.lettering ? "1em" : "0")};
  line-height: 1em;

  @media screen and (min-width: 550px) {
    font-size: ${(props) => (props.lettering ? "1.1em" : ".9em")};
  }
`;
export const Image = styled.div`
  width: 70%;
  position: relative;
  top: ${(props) => props.topPos};
  z-index: 2;
  background-color: brown;
  aspect-ratio: 2.3/3;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 550px) {
    width: 60%;
  }
`;
