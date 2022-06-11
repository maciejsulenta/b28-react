import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import DoorImage from "../../assets/images/contact.png";
export const ContactWrap = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1em;
`;
export const ContactCone = styled.div`
  position: absolute;
  width: 100%;
  height: 80%;
  clip-path: polygon(0 0, 100% 25%, 100% 75%, 0% 100%);
  background-color: ${theme.colors.menuSecond};
  z-index: 0;
`;
export const ImageContainer = styled.div`
  width: 22%;
  height: 80%;
  background-image: url(${DoorImage});
  background-size: cover;
  background-position: center;
  z-index: 1;
`;
export const InfoContainer = styled.div`
  width: 25%;
  height: 60%;
  /* background-color: cadetblue; */
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.left ? "center" : "flex-start")};
`;
export const InfoWrap = styled.div`
  width: ${(props) => (props.left ? "60%" : "fit-content")};
  text-align: center;
  display: flex;
  flex-direction: ${(props) => (props.left ? "column" : "row")};
  justify-content: center;
  align-items: center;

  margin-left: ${(props) => (props.left ? "0" : "22%")};
  margin-bottom: 0.8em;
  font-size: 0.7em;
`;
export const StyledLink = styled.a`
  text-decoration: none;
  font-family: "Playfair Display";
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.2em 0.6em;
  border-radius: 1em;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${theme.colors.menuFifth};
  }
`;
export const SocialIcon = styled.img`
  width: 0.9em;
  height: 0.9em;
`;
export const Text = styled.p`
  color: ${theme.colors.fontDark};
  font-weight: ${(props) => (props.info ? "700" : "400")};
`;
