import styled from "styled-components";
import { motion } from "framer-motion";

export const LogoContainer = styled(motion.div)`
  width: 80%;
  z-index: 0;
  position: absolute;
  top: 78vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  @media screen and (min-width: 768px) {
    width: 60%;
    top: 137vh;
  }
`;
export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
