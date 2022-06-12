import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const ButtonContainer = styled.button`
  width: 10.8em;
  height: 2.793em;
  position: relative;
  top: 70%;
  font-family: "Helvetica";
  font-size: 1em;
  background: rgba(221, 221, 221, 0.1);
  font-weight: 600;
  color: ${theme.colors.buttonWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  outline: 0;
  border-style: none;
  border: 3px solid ${theme.colors.buttonWhite};
  &:active {
    background-color: ${theme.colors.menuFifth};
    border-color: ${theme.colors.fontDark};
  }
  @media screen and (max-width: 380px) {
    font-size: 0.9em;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Image = styled.img`
  width: 1.5em;
  height: 1.5em;
`;
