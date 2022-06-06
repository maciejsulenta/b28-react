import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: ${(props) => props.vh};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
