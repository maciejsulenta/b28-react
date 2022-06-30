import React from "react";
import { Container, ProgressContainer, Progress, Logo } from "./Loader";

const Loader = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 0 },
    show: {
      top: ["0", "-2.2em", "-4.4em", "-6.4em", "-8.6em", "-11em"],

      transition: { duration: 2.5 },
    },
  };

  return (
    <Container>
      <ProgressContainer variants={container} initial="hidden" animate="show">
        <Progress variants={item}>0</Progress>
        <Progress variants={item}>23</Progress>
        <Progress variants={item}>44</Progress>
        <Progress variants={item}>68</Progress>
        <Progress variants={item}>99</Progress>
      </ProgressContainer>
      <Logo />
    </Container>
  );
};

export default Loader;
