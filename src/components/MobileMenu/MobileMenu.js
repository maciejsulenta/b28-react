import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../assets/styles/theme";
import { Link } from "react-scroll";

export const MobileMenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 998;
`;
export const MobilePhoneContainer = styled(motion.div)`
  position: relative;
  background-color: ${(props) => props.bgc};
  width: 100%;
  height: 35.5vh;
  margin-bottom: -3vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em;
  align-items: center;
`;
export const MobileMenuLogo = styled.h2`
  font-size: 7em;
  font-family: "Wolfgang";
  font-weight: 400;
  background: linear-gradient(241.66deg, #595959 31.41%, #2e2e2e 65.83%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  transform: skewY(7deg);
`;
export const MobileMenuPhone = styled.h3`
  font-family: "Playfair Display";
  font-size: 1.1em;
  letter-spacing: 5%;
  font-weight: 500;
  color: ${theme.colors.fontDark};
`;
export const MobileItemContainer = styled(motion.div)`
  position: relative;
  background-color: ${(props) => props.bgc};
  width: 100%;
  height: 12.2vh;
  margin-top: -0.7vh;
  z-index: ${(props) => props.zi};

  &:after {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    left: 99.5%;
    top: 0;
    border: 6vh solid transparent;
    border-left: 10vh solid ${(props) => props.bgc};
  }

  &:before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    right: 99.5%;
    top: 0;
    border: 6vh solid transparent;
    border-right: 10vh solid ${(props) => props.bgc};
  }
`;
export const ItemLink = styled(Link)`
  /* background-color: brown; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Playfair Display";
  font-size: 1.1em;
  letter-spacing: 5%;
  font-weight: 500;
  color: ${theme.colors.fontDark};
`;
