import styled from "styled-components";
import { motion } from "framer-motion";

export const TitleWrap = styled(motion.div)`
  width: 15em;
  margin-bottom: 2em;
  opacity: 0;
  @media screen and (min-width: 768px) {
    width: 10em;
    transform: translateY(2em);
  }
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
