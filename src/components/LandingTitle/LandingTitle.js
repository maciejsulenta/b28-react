import styled from "styled-components";
import { motion } from "framer-motion";

export const LandingTitleWrap = styled.div`
  height: 22.5em;
  width: 12em;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  /* background-color: brown; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    height: 20em;
    width: 90%;
    max-width: 1720px;
    top: 50%;
  }
`;
export const TitleWrap = styled(motion.div)`
  position: relative;
  /* background-color: cadetblue; */
  width: 100%;
  height: 100%;
`;
export const StyledLandingTitle = styled.h1`
  font-family: "Wolfgang";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.secondary ? "7.5em" : "22.5em")};
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(
    90deg,
    #fff 30%,
    rgba(255, 255, 255, 0.45) 45%,
    rgba(255, 255, 255, 0.45) 55%,
    #fff 70%
  );
  background-size: 300% 100%;
  animation: ${(props) => props.anim} 5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  position: absolute;
  top: ${(props) => (props.secondary ? "85%" : "45%")};
  left: ${(props) => (props.secondary ? "68%" : "50%")};
  transform: translate(-50%, -50%);
  cursor: default;
  @media screen and (max-width: 380px) {
    font-size: ${(props) => (props.secondary ? "6em" : "18.5em")};
    top: ${(props) => (props.secondary ? "77%" : "45%")};
    left: ${(props) => (props.secondary ? "64%" : "50%")};
  }
  @media screen and (min-width: 450px) {
    font-size: ${(props) => (props.secondary ? "7em" : "21em")};
    top: ${(props) => (props.secondary ? "79%" : "42%")};
  }
  @media screen and (min-width: 768px) {
    top: 55%;
    left: ${(props) => (props.secondary ? "65%" : "22%")};
    font-size: 12em;
  }
  @media screen and (min-width: 960px) {
    font-size: 14em;
  }
  @media screen and (min-width: 1280px) {
    font-size: 17em;
  }
  @media screen and (min-width: 1400px) {
    font-size: 19em;
  }
  @media screen and (min-width: 1600px) {
    font-size: 21.5em;
  }
  @media screen and (min-width: 1920px) {
    font-size: 24em;
  }
`;
