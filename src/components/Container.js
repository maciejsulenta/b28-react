import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: ${(props) => props.vh};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: ${(props) => (props.opinions ? "6em" : "0")};
  @media screen and (min-width: 768px) {
    margin: ${(props) => (props.opinions ? "6em 0" : "0 0")};
  }
  @media screen and (min-width: 960px) {
    padding-top: ${(props) => (props.contact ? "15em" : "0")};
  }
`;
