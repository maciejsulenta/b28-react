import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Facebook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import BurgerIcon from "../BurgerIcon";
import MobileMenu from "../MobileMenu";
import { animateScroll as scroll } from "react-scroll";
import gsap from "gsap";
import {
  NavbarContainer,
  LogoHeader,
  NavWrap,
  MenuLink,
  NavSocials,
  NavSocial,
  StyledLink,
  Image,
} from "./Navbar";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const setIsOpenHandler = () => {
    // console.log(`${isOpen}`);
    setisOpen(!isOpen);
  };


  return (
    <NavbarContainer name="top">
      <LogoHeader>B28</LogoHeader>
      <NavWrap>
        <MenuLink
          className="link"
          spy={true}
          offset={100}
          smooth={true}
          duration={500}
          activeClass="active"
          to="aboutUs"
        >
          O nas
        </MenuLink>
        <MenuLink
          className="link"
          spy={true}
          smooth={true}
          duration={1000}
          activeClass="active"
          to="gallery"
        >
          Galeria
        </MenuLink>
        <MenuLink
          className="link"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1500}
          activeClass="active"
          to="contact"
        >
          Kontakt
        </MenuLink>
      </NavWrap>
      <NavSocials>
        <NavSocial>
          <StyledLink href="https://www.facebook.com/B28Tattoo" target="_blank">
            <Image src={Facebook} />
          </StyledLink>
        </NavSocial>
        <NavSocial>
          <StyledLink
            href="https://www.instagram.com/b28tattoo/"
            target="_blank"
          >
            <Image src={Instagram} />
          </StyledLink>
        </NavSocial>
      </NavSocials>
      <BurgerIcon setIsOpenHandler={setIsOpenHandler} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && <MobileMenu setIsOpenHandler={setIsOpenHandler} />}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;
