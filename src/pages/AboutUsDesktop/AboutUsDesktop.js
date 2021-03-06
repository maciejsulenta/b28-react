import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import { motion } from "framer-motion";

export const AboutUsContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    min-height: 29em;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 4em;
    font-size: 0.7em;
  }
  @media screen and (min-width: 960px) {
    font-size: 0.75em;
  }
  @media screen and (min-width: 1280px) {
    font-size: 0.85em;
  }
  @media screen and (min-width: 1600px) {
    font-size: 0.95em;
  }
  @media screen and (min-width: 1920px) {
    font-size: 1em;
  }
  @media screen and (min-width: 2200px) {
    font-size: 1.3em;
  }
`;

export const AboutUsWrap = styled.div`
  flex: ${(props) => (props.top ? "2" : "3")};
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.top ? "column" : "row")};
  justify-content: ${(props) => (props.top ? "flex-end" : "space-around")};
  align-items: center;
  z-index: 2;
`;
export const TextContainer = styled(motion.div)`
  width: 18em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  transform: translateY(5em);
  opacity: 0;
`;
export const Text = styled.span`
  font-size: ${(props) =>
    props.big ? theme.fontSizes.normal : theme.fontSizes.small};
  color: ${(props) =>
    props.big ? theme.colors.menuSecond : theme.colors.opinionFont};
  text-align: center;
  line-height: 1.2em;
`;
export const Image = styled(motion.div)`
  background-color: #333;
  width: 11em;
  aspect-ratio: 2.3/3;
  align-self: flex-start;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  /* transform: ${(props) =>
    props.left ? "translate(-3em, -3em)" : "translate(3em, -3em)"};
  opacity: 0; */
  clip-path: inset(0px 0px 100% 0px);
  transition: all 0.7s ease 0.5s;
`;
export const Logo = styled(motion.div)`
  width: 7em;
  aspect-ratio: 3.5/4.5;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  /* transform: translateY(2em); */
`;
export const Arrow = styled(motion.div)`
  width: 60vw;
  height: 10em;
  position: absolute;
  top: 4em;
  left: ${(props) => props.l};
  right: ${(props) => props.r};
  background-color: ${theme.colors.menuSecond};
  transform: ${(props) =>
    props.left === "true" ? "rotate(17deg)" : "rotate(-17deg)"};
  z-index: 0;
  /* transition: all 1.5s ease 0.2s; */
  &:after {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    left: 99.9%;
    top: 0;
    border: 5em solid transparent;
    border-left: 6em solid ${theme.colors.menuSecond};
  }

  &:before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    right: 99.9%;
    top: 0;
    border: 5em solid transparent;
    border-right: 6em solid ${theme.colors.menuSecond};
  }
`;
