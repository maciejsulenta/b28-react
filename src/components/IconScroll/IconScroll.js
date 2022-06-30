import styled from "styled-components";
import { keyframes } from "styled-components";
import { theme } from "../../assets/styles/theme";
import { motion } from "framer-motion";

const colorSlide = keyframes`
 0% { background-position: 0% 100%; }
  20% { background-position: 0% 0%; }
  21% { background-color: ${theme.colors.fontDark};}
  29% { 
    background-color:  ${theme.colors.fontWhite};
    background-position: 0% 0%;
  }
  30% { 
    background-color: ${theme.colors.fontDark};
    background-position: 0% 100%;
  }
  50% { background-position: 0% 0%; }
  51% { background-color: ${theme.colors.fontDark}; }
  59% { 
    background-color: ${theme.colors.fontWhite};
    background-position: 0% 0%;
  }
  60% { 
    background-color:${theme.colors.fontDark};
    background-position: 0% 100%;
  }
  80% { background-position: 0% 0%; }
  81% { background-color: ${theme.colors.fontDark}; }
  90%, 100% { background-color:  ${theme.colors.fontWhite}; }
`;

const trackBallSlide = keyframes`
0% {
    opacity: 1;
    transform: scale(1) translateY(-.5em);
  }
  6% { 
    opacity: 1;
    transform: scale(0.9) translateY(.125em);
  }
  14% {
    opacity: 0;
    transform: scale(0.4) translateY(1em);
  }
  15%, 19% {
    opacity: 0;
    transform: scale(0.4) translateY(-.5em);
  }
  28%, 29.99% {
    opacity: 1;
    transform: scale(1) translateY(-.5em);
  }
  30% {
    opacity: 1;
    transform: scale(1) translateY(-.5em);
  }
  36% { 
    opacity: 1;
    transform: scale(0.9) translateY(0.125em);
  }
  44% {
    opacity: 0;
    transform: scale(0.4) translateY(1em);
  }
  45%, 49% {
    opacity: 0;
    transform: scale(0.4) translateY(-.5em);
  }
  58%, 59% {
    opacity: 1;
    transform: scale(1) translateY(-.5em);
  }
  60% {
    opacity: 1;
    transform: scale(1) translateY(-.5em);
  }
  66% { 
    opacity: 1;
    transform: scale(0.9) translateY(0.125em);
  }
  74% {
    opacity: 0;
    transform: scale(0.4) translateY(1em);
  }
  75%, 79% {
    opacity: 0;
    transform: scale(0.4) translateY(-.5em);
  }
  88%, 100% {
    opacity: 1;
    transform: scale(1) translateY(-.5em);
  }
`;

const nudgeMouse = keyframes`
0% { transform: translateY(0); }
  20% { transform: translateY(8px); }
  30% { transform: translateY(0); }
  50% { transform: translateY(8px); }
  60% { transform: translateY(0); }
  80% { transform: translateY(8px); }
  90% { transform: translateY(0); }
`;
export const IconScrollContainer = styled(motion.div)`
  position: absolute;
  bottom: 5%;
`;
export const IconScrollContent = styled.div`
  background: transparent
    linear-gradient(transparent 0%, transparent 50%, #ddd 50%, #ddd 100%);
  width: 0.975em;
  height: 1.725em;
  border-radius: 2.5em;
  background-size: 100% 200%;
  animation: ${colorSlide} 7s linear infinite,
    ${nudgeMouse} 7s ease-out infinite;
  z-index: 995;
  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 768px) {
    top: 88%;
    font-size: 1em;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  &:before {
    width: 0.825em;
    height: 1.575em;
    background-color: ${theme.colors.bgcDark};
    border-radius: 2.5em;
  }
  &:after {
    background-color: ${theme.colors.buttonWhite};
    width: 0.2em;
    height: 0.2em;
    border-radius: 100%;
    animation: ${trackBallSlide} 7s linear infinite;
  }
`;
