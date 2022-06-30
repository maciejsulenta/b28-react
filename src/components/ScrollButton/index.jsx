import React from "react";
import { Container, Wrap, StyledArrowUpwardRoundedIcon } from "./ScrollButton";

const ScrollButton = () => {
  return (
    <Container
      whileInView={{
        left: "1em",
        opacity: 1,
        transition: { duration: 1, delay: 3.5, type: "spring" },
      }}
      viewport={{ once: true }}
    >
      <Wrap
        to="top"
        className="link"
        spy={true}
        offset={0}
        smooth={true}
        duration={1500}
      >
        <StyledArrowUpwardRoundedIcon />
      </Wrap>
    </Container>
  );
};

export default ScrollButton;
