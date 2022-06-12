import React from "react";
import { FooterWrap, Text, Button, StyledArrowUpwardRoundedIcon} from "./Footer";

const Footer = () => {
  return (
    <FooterWrap>
      <Text>to już koniec, umów się na wizytę</Text>
      <Button>
        <StyledArrowUpwardRoundedIcon />
      </Button>
    </FooterWrap>
  );
};

export default Footer;
