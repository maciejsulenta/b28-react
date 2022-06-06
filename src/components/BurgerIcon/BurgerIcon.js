import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
export const BurgerWrap = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const BurgerContainer = styled.div`
  width: 42px;
  height: 40px;
  position: fixed;
  top: 1em;
  right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  cursor: pointer;
  overflow: hidden;
  gap: 10px;
`;
export const BurgerLineTop = styled.div`
  width: 38px;
  height: 2px;
  position: relative;
  background-color: ${(props) =>
    props.isOpen == true ? theme.colors.fontDark : theme.colors.fontWhite};
  transition: all 0.5s ease-in-out;
  transform: translate(
      ${(props) => (props.isOpen === true ? "0px, 12px" : "0px, 0px")}
    )
    rotate(${(props) => (props.isOpen === true ? "-45deg" : "0deg")});
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: ${(props) =>
      props.isOpen == true ? theme.colors.fontDark : theme.colors.fontWhite};
    transform: rotate(45deg);
    transition: all 0.5s ease-in-out;
  }
  &:before {
    top: -100%;
    left: 0;
  }
  &:after {
    top: -100%;
    right: 0;
  }
`;
export const BurgerLineCenter = styled.div`
  width: 38px;
  height: 2px;
  position: relative;
  background-color: ${(props) =>
    props.isOpen == true ? theme.colors.fontDark : theme.colors.fontWhite};
  transform: translate(
    ${(props) => (props.isOpen === true ? "-50px, 0px" : "0px, 0px;")}
  );
  transition: all 0.5s ease-in-out;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: ${(props) =>
      props.isOpen == true ? "transparent" : theme.colors.fontWhite};
    transition: all 0.5s ease-in-out;
    transform: rotate(45deg);
  }
  &:before {
    top: -100%;
    left: 0;
  }
  &:after {
    top: -100%;
    right: 0;
  }
`;
export const BurgerLineBottom = styled.div`
  width: 38px;
  height: 2px;
  position: relative;
  background-color: ${(props) =>
    props.isOpen == true ? theme.colors.fontDark : theme.colors.fontWhite};
  transition: all 0.5s ease-in-out;
  transform: translate(
      ${(props) => (props.isOpen === true ? "0px, -12px" : "0px, 0px")}
    )
    rotate(${(props) => (props.isOpen === true ? "45deg" : "0deg")});
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: ${(props) =>
      props.isOpen == true ? theme.colors.fontDark : theme.colors.fontWhite};
    transform: rotate(45deg);
    transition: all 0.5s ease-in-out;
  }
  &:before {
    top: -100%;
    left: 0;
  }
  &:after {
    top: -100%;
    right: 0;
  }
`;
