import React from "react";
import { Title } from "../Title";
import {
  FooterWrap,
  Text,
  Button,
  StyledArrowUpwardRoundedIcon,
} from "./Footer";

const Footer = () => {
  return (
    <FooterWrap
      style={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Title>to już koniec, umów się na wizytę</Title>
      <Button>
        <StyledArrowUpwardRoundedIcon />
      </Button>
    </FooterWrap>
  );
};

export default Footer;
