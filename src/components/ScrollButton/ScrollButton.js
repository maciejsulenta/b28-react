import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../assets/styles/theme";
import { Link } from "react-scroll";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
export const Container = styled(motion.div)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: fixed;
    left: -1em;
    bottom: 1em;
    width: 3em;
    height: 3em;
    border: 3px solid ${theme.colors.fontWhite};
    border-radius: 50%;
    background: transparent;
    z-index: 999;
    mix-blend-mode: difference;
    opacity: 0;
  }
`;
export const Wrap = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  border-radius: 50%;
  &:hover {
    transform: rotate(360deg) scale(1.1);
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
  }
`;
export const StyledArrowUpwardRoundedIcon = styled(ArrowUpwardRoundedIcon)`
  font-size: 2em !important;
  color: ${theme.colors.fontWhite};
`;
