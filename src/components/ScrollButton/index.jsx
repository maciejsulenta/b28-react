import React from "react";
import { Container, StyledArrowUpwardRoundedIcon } from "./ScrollButton";

const ScrollButton = () => {
  return (
    <Container
      to="top"
      className="link"
      spy={true}
      offset={0}
      smooth={true}
      duration={1500}
    >
      <StyledArrowUpwardRoundedIcon />
    </Container>
  );
};

export default ScrollButton;
