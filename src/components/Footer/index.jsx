import React from "react";
import { Title } from "../Title";
import {
  FooterWrap,
  Text,
  Button,
  Wrap,
  StyledArrowUpwardRoundedIcon,
} from "./Footer";

const Footer = () => {
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
        className="link hover"
        spy={true}
        offset={0}
        smooth={true}
        duration={1500}
      >
        <Wrap>
          <StyledArrowUpwardRoundedIcon />
          <StyledArrowUpwardRoundedIcon />
        </Wrap>
      </Button>
    </FooterWrap>
  );
};

export default Footer;
