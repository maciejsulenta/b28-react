import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import CursorImg from "../../assets/images/cursor.svg";

export const CustomCursor = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 2em;
    height: 2em;
    pointer-events: none;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    position: fixed;
    z-index: 999;
    mix-blend-mode: difference;
    border-radius: 50%;
    transition: background-color 0.3s linear;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${CursorImg});
  background-size: 70% 70%;
  background-position: center;
  background-repeat: no-repeat;
  transform-origin: center;
  transition: all 0.3s ease-in-out;
`;
