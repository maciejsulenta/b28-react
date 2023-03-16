import styled from "styled-components";
import { theme } from "../assets/styles/theme";
import { keyframes } from "styled-components";

const animateBg = keyframes`
  0%{background-position:0% 0%}
  25%{background-position:100% 0%}
  25%{background-position:100% 100%}
  50%{background-position:50% 100%}
  75%{background-position:50% 50%}
  100%{background-position:0% 0%}
`;

export const PagesContainer = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${theme.colors.bgcDark};
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.9),
      rgba(20, 20, 20, 0.9)
    ),
    url(https://png.pngtree.com/thumb_back/fh260/background/20210915/pngtree-noise-simple-fault-gray-noise-texture-background-image_887800.jpg);
  z-index: -10;
  animation: ${animateBg} 0.01s linear infinite alternate;
  overflow-x: hidden;
  @media screen and (min-width: 450px) {
    font-size: 22px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 960px) {
    font-size: 26px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 27px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 32px;
  }
`;
