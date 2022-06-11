import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import DoorImage from "../../assets/images/contact.png";
export const ContactWrap = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 1em;
    min-height: 70vh;
    /* margin-bottom: 1em; */
  }
`;
export const ContactCone = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    width: 100%;
    height: 80%;
    clip-path: polygon(0 0, 100% 30%, 100% 70%, 0% 100%);
    background-color: ${theme.colors.menuSecond};
    z-index: 0;
  }
`;
export const ImageContainer = styled.div`
  width: 15em;
  height: 21em;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  background-image: url(${DoorImage});
  background-size: cover;
  background-position: center;
  z-index: 0;
  position: absolute;
  margin-top: -2.5em;
  @media screen and (min-width: 768px) {
    position: static;
    max-width: 450px;
    max-height: 580px;
    clip-path: none;
    z-index: 2;
    margin-top: 0;
  }
`;
export const InfoContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${(props) => (props.left ? "20em" : "0")};
  margin-bottom: 2em;
  @media screen and (min-width: 768px) {
    width: 25%;
    height: 60%;
    align-items: ${(props) => (props.left ? "center" : "flex-start")};
    margin-bottom: 0;
    padding-top: 0;
  }
`;
export const InfoWrap = styled.div`
  width: 10em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8em;
  font-size: 0.7em;
  @media screen and (min-width: 768px) {
    width: ${(props) => (props.left ? "60%" : "fit-content")};
  }
  @media screen and (min-width: 960px) {
    margin-left: ${(props) => (props.left ? "0" : "22%")};
  }
`;
export const StyledLink = styled.a`
  text-decoration: none;
  font-family: "Playfair Display";
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  padding: 0.2em 0.6em;
  border-radius: 1em;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${theme.colors.menuFifth};
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const SocialIcon = styled.img`
  width: 0.9em;
  height: 0.9em;
`;
export const Text = styled.p`
  color: ${theme.colors.fontWhite};
  font-weight: ${(props) => (props.info ? "700" : "400")};

  @media screen and (min-width: 768px) {
    color: ${theme.colors.fontDark};
  }
`;
export const Logo = styled.div`
  position: relative;
  width: 70%;
  aspect-ratio: 1/1;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: -20em;
  @media screen and (min-width: 768px) {
    width: 40%;
    margin-top: 0;
  }
  @media screen and (min-width: 160px) {
    width: 30%;
    margin-top: 3em;
  }
`;
