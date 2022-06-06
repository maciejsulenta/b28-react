import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Facebook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import BurgerIcon from "../BurgerIcon";
import MobileMenu from "../MobileMenu";
import {
  NavbarContainer,
  LogoHeader,
  NavWrap,
  MenuLink,
  NavSocials,
  NavSocial,
  Image,
} from "./Navbar";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const setIsOpenHandler = () => {
    // console.log(`${isOpen}`);
    setisOpen(!isOpen);
  };
  return (
    <NavbarContainer>
      <LogoHeader>B28</LogoHeader>
      <NavWrap>
        <MenuLink>O nas</MenuLink>
        <MenuLink>Galeria</MenuLink>
        <MenuLink>Kontakt</MenuLink>
      </NavWrap>
      <NavSocials>
        <NavSocial>
          <Image src={Facebook} />
        </NavSocial>
        <NavSocial>
          <Image src={Instagram} />
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
