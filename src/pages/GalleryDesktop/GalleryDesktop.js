import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../assets/styles/theme";
export const GalleryWrap = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    display: flex;
    width: 600vw;
    position: relative;
  }
`;
export const Slide = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    flex: ${(props) => (props.starter ? "1" : "5")};
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(100, 1fr);
    grid-template-rows: repeat(20, 1fr);
  }
`;
export const ImageContainer = styled(motion.div)`
  background-color: ${theme.colors.bgcDark};
  grid-column: ${(props) => props.col};
  grid-row: ${(props) => props.row};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  z-index: 2;
  transition: all 0.4s ease;
`;
export const ProgressBar = styled.div`
  height: 0.5em;
  width: 100vw;
  position: fixed;
  display: inline-block;
  top: 0;
  left: 0;
  background-color: ${theme.colors.opinionFont};
  z-index: 999;
`;
