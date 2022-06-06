import React from "react";
import { Container } from "../../components/Container";
import { IconScroll } from "../../components/IconScroll";
import LandingButton from "../../components/LandingButton";
import LandingTitle from "../../components/LandingTitle";

const Landing = () => {
  return (
    <Container vh="100vh">
      <LandingTitle />
      <LandingButton />
      <IconScroll />
    </Container>
  );
};

export default Landing;
