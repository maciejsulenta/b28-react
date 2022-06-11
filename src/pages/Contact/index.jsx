import React from "react";
import ContactContent from "../../components/ContactContent";
import ContactTitle from "../../components/ContactTitle";
import { Container } from "../../components/Container";
import Logo from "../../components/Logo";
const Contact = () => {
  return (
    <Container vh="fit-content" contact>
      <ContactTitle />
      <ContactContent />
    </Container>
  );
};

export default Contact;
