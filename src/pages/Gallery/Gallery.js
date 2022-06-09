import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const GalleryWrap = styled.div`
  display: flex;
  width: 500vw;
  position: relative;
`;
export const Slide = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(20, 1fr);
`;
export const Title = styled.h2`
  position: absolute;
  top: 50%;
  left: 50vw;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.25);
  font-family: "Playfair Display";
  font-size: 6em;
  font-weight: 500;
  letter-spacing: 0.015em;
  z-index: -1;
`;
export const ImageContainer = styled.div`
  background-color: brown;
  grid-column: ${(props) => props.col};
  grid-row: ${(props) => props.row};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.15);
  z-index: 2;
`;
