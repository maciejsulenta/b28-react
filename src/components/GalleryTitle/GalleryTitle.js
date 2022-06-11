import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const Container = styled.div`
  position: absolute;
  margin: auto;
  width: 100vw;
  height: 100%;
  top: 0;
  bottom: 0;
  filter: url(#threshold) blur(0.6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;
export const Text = styled.span`
  position: absolute;
  width: 100%;
  display: inline-block;
  font-family: "Playfair Display";
  font-size: 5em;
  text-align: center;
  user-select: none;
  color: ${theme.colors.opinionFont};
`;
