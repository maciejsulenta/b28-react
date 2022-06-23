import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import { motion } from "framer-motion";

export const TitleWrap = styled(motion.div)`
  z-index: 2;
  padding-bottom: 0.5em;
  transition: all 0.5s ease;
  @media screen and (min-width: 768px) {
    padding-bottom: 0;
  }
`;
