import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../assets/styles/theme";
export const GalleryWrap = styled.div`
  display: flex;
  width: 600vw;
  position: relative;
`;
export const Slide = styled.div`
  flex: ${(props) => (props.starter ? "1" : "5")};
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(20, 1fr);
`;
export const ImageContainer = styled(motion.div)`
  background-color: ${theme.colors.bgcDark};
  grid-column: ${(props) => props.col};
  grid-row: ${(props) => props.row};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  /* box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.15); */
  z-index: 2;
  transition: all 0.4s ease;
`;
