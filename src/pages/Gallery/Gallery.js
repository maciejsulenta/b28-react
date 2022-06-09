import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const Container = styled.div`
  display: flex;
  width: 500vw;
`;
export const Slide = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.bgc ? "brown" : "cadetblue")};
`;
