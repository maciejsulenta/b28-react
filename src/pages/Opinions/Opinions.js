import styled from "styled-components";
import { motion } from "framer-motion";

export const TitleWrap = styled(motion.div)`
  width: 15em;
  margin-bottom: 2em;
  transition: all 0.6s linear 0.1s;
`;

export const Wrap = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
  padding: 1em;
  /* background-color: brown; */
`;
