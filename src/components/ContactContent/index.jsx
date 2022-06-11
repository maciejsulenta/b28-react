import React from "react";
import Instagram from "../../assets/images/instagramDark.svg";
import Facebook from "../../assets/images/facebookDark.svg";
import LogoB28 from "../../assets/images/logo.svg";
import {
  ContactWrap,
  ContactCone,
  ImageContainer,
  InfoContainer,
  InfoWrap,
  StyledLink,
  SocialIcon,
  Text,
  Logo,
} from "./ContactContent";

const ContactContent = () => {
  return (
    <>
      <ContactWrap>
        <InfoContainer left>
          <InfoWrap left>
            <Text>Adres</Text>
            <Text info>ul. Wieniawska 4/26, 20-400 Lublin</Text>
          </InfoWrap>
          <InfoWrap left>
            <Text>Godziny pracy</Text>
            <Text info>9-17</Text>
          </InfoWrap>
          <InfoWrap left>
            <Text>Telefon</Text>
            <Text info>797 098 991</Text>
          </InfoWrap>
        </InfoContainer>
        <ImageContainer />
        <InfoContainer>
          <InfoWrap>
            <StyledLink
              href="https://www.facebook.com/B28Tattoo"
              target="_blank"
            >
              <SocialIcon src={Facebook} />
              <Text>Facebook</Text>
            </StyledLink>
          </InfoWrap>
          <InfoWrap>
            <StyledLink
              href="https://www.instagram.com/b28tattoo/"
              target="_blank"
            >
              <SocialIcon src={Instagram} />
              <Text>B28 studio</Text>
            </StyledLink>
          </InfoWrap>
          <InfoWrap>
            <StyledLink
              href="https://www.instagram.com/b28_damian/"
              target="_blank"
            >
              <SocialIcon src={Instagram} />
              <Text>B28 Damian</Text>
            </StyledLink>
          </InfoWrap>
          <InfoWrap>
            <StyledLink
              href="https://www.instagram.com/demonology_ink/"
              target="_blank"
            >
              <SocialIcon src={Instagram} />
              <Text>demonology_ink</Text>
            </StyledLink>
          </InfoWrap>
        </InfoContainer>
        <ContactCone />
      </ContactWrap>
      <Logo src={LogoB28} />
    </>
  );
};

export default ContactContent;
