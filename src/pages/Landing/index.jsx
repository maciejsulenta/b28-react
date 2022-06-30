import React, { useEffect } from "react";
import { Container } from "../../components/Container";
import IconScroll from "../../components/IconScroll";
import LandingButton from "../../components/LandingButton";
import LandingTitle from "../../components/LandingTitle";
import Loader from "../../components/Loader";
const Landing = () => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    const timeout = setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container vh="100vh">
      <Loader />
      <LandingTitle />
      <LandingButton />
      <IconScroll />
    </Container>
  );
};

export default Landing;
