import styled from "styled-components";

export const AboutUsImageWrap = styled.div`
  width: 70%;
  position: relative;
  top: ${(props) => props.topPos};
  z-index: ${(props) => (props.smaller ? "3" : "2")};

  @media screen and (min-width: 768px) {
    width: ${(props) => (props.smaller ? "30%" : "40%")};
    max-width: ${(props) => (props.smaller ? "454px" : "554px")};
    top: ${(props) => (props.smaller ? "6em" : "-13em")};
    left: ${(props) => (props.smaller ? "-2.5em" : "-7em")};
  }
  @media screen and (min-width: 960px) {
    top: ${(props) => (props.smaller ? "6em" : "-14em")};
    left: ${(props) => (props.smaller ? "-2.5em" : "-9em")};
  }
  @media screen and (min-width: 1280px) {
    top: ${(props) => (props.smaller ? "8em" : "-16em")};
    left: ${(props) => (props.smaller ? "-2em" : "-11em")};
  }
  @media screen and (min-width: 1600px) {
    left: ${(props) => (props.smaller ? "-5em" : "-14em")};
  }
  @media screen and (min-width: 1920px) {
    top: ${(props) => (props.smaller ? "9em" : "-11em")};
    left: ${(props) => (props.smaller ? "-8em" : "-16.5em")};
  }
`;
export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
