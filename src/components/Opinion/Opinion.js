import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import { motion } from "framer-motion";

export const OpinionContainer = styled(motion.div)`
  width: 10em;
  height: fit-content;
  color: ${theme.colors.opinionFont};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  transition: all 0.6s linear 0.1s;
  @media screen and (min-width: 340px) {
    width: 14em;
  }
  @media screen and (min-width: 550px) {
    width: ${(props) => (props.first ? "18em" : "17em")};
  }
  @media screen and (min-width: 768px) {
    transform: ${(props) =>
      props.first ? "translateX(-5em)" : "translateX(5em)"};
  }
  @media screen and (min-width: 1280px) {
    transform: ${(props) =>
      props.first ? "translateX(-10em)" : "translateX(10em)"};
  }
`;

export const OpinionQuote = styled.p`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  font-style: italic;
  font-weight: 400;
  font-size: ${theme.fontSizes.big};
  line-height: 0.8em;
  @media screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.huge};
  }
`;
export const OpinionText = styled.p`
  font-family: "Playfair Display";
  font-size: ${theme.fontSizes.normal};
  font-weight: 400;
  line-height: 1em;
  text-align: center;
  letter-spacing: 0.02em;
  padding-top: 1em;
  color: ${theme.colors.opinionFont};
`;
