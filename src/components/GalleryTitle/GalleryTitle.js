import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const Container = styled.div`
  position: absolute;
  margin: auto;
  width: 100vw;
  height: 100%;
  top: 0;
  bottom: 0;
  filter: url(#threshold) blur(0.5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;
export const Text = styled.span`
  position: absolute;
  width: 100%;
  display: inline-block;
  font-family: 'Playfair Display', serif;
  font-style: normal;
  /* letter-spacing: 0.015em; */
  font-size: 4em;
  text-align: center;
  user-select: none;
  color: #666;
`;
