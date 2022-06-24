import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import { motion } from "framer-motion";
import { galleryData } from "../../assets/data/galleryData";

export const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 960px) {
    display: none;
  }
`;
export const SlidesContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  gap: 2.5em;

`;
export const Title = styled.span`
  position: relative;
  height: fit-content;
  font-size: ${theme.fontSizes.big};
  font-family: "Playfair Display", serif;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  user-select: none;
  color: ${theme.colors.fontWhite};
  letter-spacing: 0.02em;
  line-height: 1em;
  display: flex;
  justify-content: center;
  align-items: center;

`;
export const SlidesWrap = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  display: flex;
  gap: 1em;

`;
export const Slide = styled.div`
  position: absolute;
  min-width: 300px;
  width: 90vw;
  height: 100%;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 550px) {
    width: 70vw;
  }
  @media screen and (min-width: 768px) {
    width: 45vw;
  }
`;
export const Image = styled(motion.div)`
  position: relative;
  width: 90%;
  height: 90%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  transition: all 0.5s ease;
`;
