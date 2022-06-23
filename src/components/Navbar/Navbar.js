import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const NavbarContainer = styled.div`
  height: 4em;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  z-index: 998;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 960px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 20px;
  }
`;

export const NavWrap = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    width: 21em;
    /* background-color: gray; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    justify-self: center;
  }
`;
export const MenuLink = styled(Link)`
  font-family: "Pirata One";
  font-size: 0.8em;
  text-decoration: none;
  text-transform: uppercase;
  color: ${theme.colors.fontWhite};
  white-space: nowrap;
  cursor: pointer;
`;
export const LogoHeader = styled(motion.p)`
  display: none;
  @media screen and (min-width: 768px) {
    font-family: "Wolfgang";
    font-size: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.33em;
    color: ${theme.colors.fontWhite};
    cursor: pointer;
  }
`;
export const NavSocials = styled(motion.div)`
  display: none;
  @media screen and (min-width: 768px) {
    width: 6em;
    height: 2em;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
export const NavSocial = styled(motion.div)`
  cursor: pointer;
`;
export const Image = styled.img``;
