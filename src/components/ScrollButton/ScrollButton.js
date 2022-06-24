import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import { Link } from "react-scroll";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

export const Container = styled(Link)`
display: none;
  @media screen and (min-width: 768px) {
    position: fixed;
    left: 1em;
    bottom: 1em;
    width: 3em;
    height: 3em;
    border: 3px solid ${theme.colors.fontWhite};
    border-radius: 50%;
    background: transparent;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    mix-blend-mode: difference;
    &:hover {
      transform: rotate(360deg) scale(1.1);
      cursor: pointer;
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;
export const StyledArrowUpwardRoundedIcon = styled(ArrowUpwardRoundedIcon)`
  font-size: 2em !important;
  color: ${theme.colors.fontWhite};
`;
