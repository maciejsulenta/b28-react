import React from "react";
import ContactContent from "../../components/ContactContent";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";
import { TitleWrap } from "./Contact";

const Contact = () => {
  return (
    <Container vh="fit-content" contact  >
      <TitleWrap
        name="contact"
        id="contactTitle"
        // style={{ y: -50, opacity: 0 }}
        // whileInView={{
        //   y: 0,
        //   opacity: 1,
        // }}
        // viewport={{ once: true }}
      >
        <Title>Tu nas</Title>
        <Title>znajdziesz</Title>
      </TitleWrap>
      <ContactContent />
    </Container>
  );
};

export default Contact;
