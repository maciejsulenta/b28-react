import React, { useRef, useEffect } from "react";
import { Title } from "../Title";
import {
  FooterWrap,
  Text,
  Button,
  StyledArrowUpwardRoundedIcon,
} from "./Footer";

const Footer = () => {
  // useEffect(() => {
  //   let containerPosition = document
  //     .getElementById("siema")
  //     .getBoundingClientRect().top;
  //   console.log(containerPosition);
  // }, []);

  return (
    <FooterWrap
      // style={{ opacity: 0, y: 50 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      id="footer"
    >
      <Title>to już koniec, umów się na wizytę</Title>
      <Button
        to="top"
        className="link"
        spy={true}
        offset={0}
        smooth={true}
        duration={1500}
      >
        <StyledArrowUpwardRoundedIcon />
      </Button>
    </FooterWrap>
  );
};

export default Footer;
