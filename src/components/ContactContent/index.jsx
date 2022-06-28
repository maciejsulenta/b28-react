import React from "react";
import LogoB28 from "../../assets/images/logo.svg";

import {
  ContactWrap,
  ContactCone,
  ImageContainer,
  InfoContainer,
  InfoWrap,
  StyledLink,
  Text,
  Logo,
  StyledFacebookOutlined,
  StyledInstagramIcon,
} from "./ContactContent";

const ContactContent = () => {
  return (
    <>
      <ContactWrap>
        <InfoContainer
          left="true"
          className="contactInfo"
          // style={{ y: -50, opacity: 0 }}
          // whileInView={{
          //   y: 0,
          //   opacity: 1,
          // }}
          // viewport={{ once: true }}
        >
          <InfoWrap left="true">
            <Text>Adres</Text>
            <Text info>ul. Wieniawska 4/26, 20-400 Lublin</Text>
          </InfoWrap>
          <InfoWrap left="true">
            <Text>Godziny pracy</Text>
            <Text info>9-17</Text>
          </InfoWrap>
          <InfoWrap left="true">
            <Text>Telefon</Text>
            <Text info>797 098 991</Text>
          </InfoWrap>
        </InfoContainer>
        <ImageContainer
          id="contactImage"
          // style={{ y: -50, opacity: 0 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // viewport={{ once: true }}
        />
        <InfoContainer
          className="contactInfo"
          // style={{ y: -50, opacity: 0 }}
          // whileInView={{
          //   y: 0,
          //   opacity: 1,
          // }}
          // viewport={{ once: true }}
        >
          <InfoWrap>
            <StyledLink
              href="https://www.facebook.com/B28Tattoo"
              target="_blank"
            >
              <StyledFacebookOutlined />
              <Text>Facebook</Text>
            </StyledLink>
          </InfoWrap>
          <InfoWrap>
            <StyledLink
              href="https://www.instagram.com/b28tattoo/"
              target="_blank"
            >
              <StyledInstagramIcon />
              <Text>B28 studio</Text>
            </StyledLink>
          </InfoWrap>
          <InfoWrap>
            <StyledLink
              href="https://www.instagram.com/b28_damian/"
              target="_blank"
            >
              <StyledInstagramIcon />
              <Text>B28 Damian</Text>
            </StyledLink>
          </InfoWrap>
          <InfoWrap>
            <StyledLink
              href="https://www.instagram.com/demonology_ink/"
              target="_blank"
            >
              <StyledInstagramIcon />
              <Text>demonology_ink</Text>
            </StyledLink>
          </InfoWrap>
        </InfoContainer>
        <ContactCone
          id="contactCone"
          // style={{ clipPath: "polygon(0 40%, 5% 50%, 5% 50%, 0 60%)" }}
          // whileInView={{
          //   clipPath: "polygon(0 0, 100% 30%, 100% 70%, 0% 100%)",
          // }}
          // viewport={{ once: true }}
        />
      </ContactWrap>
      <Logo src={LogoB28} id="contactLogo" />
    </>
  );
};

export default ContactContent;
