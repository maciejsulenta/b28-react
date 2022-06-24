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
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-self: center;
    transform: translateX(1em);
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
  padding: 0.2em 0.7em;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    width: 50px;
    height: 50px;
    background-color: ${theme.colors.fontWhite};
  }

  &:hover {
    color: ${theme.colors.fontDark};
    padding: 0.2em 0.7em;

    background-color: ${theme.colors.fontWhite};
  }
`;
export const LogoHeader = styled(motion.p)`
  display: none;
  @media screen and (min-width: 768px) {
    font-family: "Wolfgang";
    font-size: 3em;
    width: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
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
export const StyledLink = styled.a`
  text-decoration: none;
`;
export const Image = styled.img``;
