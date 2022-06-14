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
    <FooterWrap>
      <Title>to już koniec, umów się na wizytę</Title>
      <Button>
        <StyledArrowUpwardRoundedIcon />
      </Button>
    </FooterWrap>
  );
};

export default Footer;
