import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import { Link } from "react-scroll";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { motion } from "framer-motion";
export const FooterWrap = styled(motion.div)`
  position: relative;
  top: -2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2em;
  gap: 2em;
  margin: 4em auto 0 auto;
  transition: all 0.5s ease;
  @media screen and (min-width: 550px) {
    width: 26em;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0em;
  }
`;
export const Button = styled(Link)`
  width: 5em;
  height: 5em;
  border: 3px solid ${theme.colors.fontWhite};
  border-radius: 50%;
  background: transparent;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: rotate(360deg) scale(1.1);
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
  }

  @media screen and (min-width: 768px) {
    width: 4em;
    height: 4em;
    border: 5px solid ${theme.colors.fontWhite};
  }
`;
export const StyledArrowUpwardRoundedIcon = styled(ArrowUpwardRoundedIcon)`
  font-size: 2em !important;
  color: ${theme.colors.fontWhite};
`;
