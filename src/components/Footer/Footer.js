import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

export const FooterWrap = styled.div`
  position: relative;
  top: -2em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  gap: 2em;
  margin-top: 4em;

  @media screen and (min-width: 768px) {
    margin-top: 0em;
  }
`;
export const Text = styled.p`
  font-size: 2.2em;
  width: 8em;
  line-height: 1em;
  color: ${theme.colors.fontWhite};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 2em;
    width: 10.5em;
  }
  @media screen and (min-width: 1600px) {
    font-size: 2.6em;
  }
`;
export const Button = styled.button`
  width: 5em;
  height: 5em;
  border: 3px solid ${theme.colors.fontWhite};
  border-radius: 50%;
  background: transparent;
  transition: all 0.5s ease;
  &:hover {
    transform: rotate(360deg) scale(1.1);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 7em;
    height: 7em;
    border: 6px solid ${theme.colors.fontWhite};
  }
`;
export const StyledArrowUpwardRoundedIcon = styled(ArrowUpwardRoundedIcon)`
  font-size: 4em !important;
  color: ${theme.colors.fontWhite};
`;
