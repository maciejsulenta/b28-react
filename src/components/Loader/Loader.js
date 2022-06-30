import styled, { keyframes } from "styled-components";
import { theme } from "../../assets/styles/theme";
import { motion } from "framer-motion";
import LogoLoad from "../../assets/images/logoLoader.svg";

const LogoLoader = keyframes`
0%{
    opacity: 0;
}
20%{
    opacity: 1;
}
90%{
    opacity: 1;
    
}
100%{
    opacity: 0;
    
}
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Logo = styled(motion.div)`
  font-size: 0.7em;
  width: 8em;
  height: 10em;
  background-image: url(${LogoLoad});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 1em;
  right: 1em;
  animation: ${LogoLoader} 3s linear both;
  /* border: 2px solid red; */
`;
export const ProgressContainer = styled(motion.div)`
  width: 4em;
  height: 4em;
  position: absolute;
  bottom: 10.6em;
  right: 5em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
  overflow: hidden;
  /* border: 2px solid red; */
  font-size: 0.5em;
`;
export const Progress = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.fontWhite};
  font-size: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
