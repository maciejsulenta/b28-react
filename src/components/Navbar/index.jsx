// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { AnimatePresence } from "framer-motion";
// import { HeaderContainer } from "../../atoms/HeaderContainer";
// import { LogoHeader } from "../../atoms/LogoHeader";
// import NavWrap from "../../molecules/NavWrap/NavWrap";
// import { NavSocials, NavSocial } from "../../atoms/NavSocials";
// import BurgerIcon from "../../atoms/BurgerIcon/BurgerIcon.js";
// import MobileMenu from "../../molecules/MobileMenu/MobileMenu.js";
// import Facebook from "../../../assets/images/facebook.svg";
// import Instagram from "../../../assets/images/instagram.svg";

// const Header = () => {
//   const [isOpen, setisOpen] = useState(false);
//   const setIsOpenHandler = () => {
//     // console.log(`${isOpen}`);
//     setisOpen(!isOpen);
//   };
//   return (
//     <HeaderContainer>
//       <LogoHeader>B28</LogoHeader>
//       <NavWrap />
//       <NavSocials>
//         <NavSocial>
//           <Image src={Facebook} />
//         </NavSocial>
//         <NavSocial>
//           <Image src={Instagram} />
//         </NavSocial>
//       </NavSocials>
//       <BurgerIcon setIsOpenHandler={setIsOpenHandler} isOpen={isOpen} />
//       <AnimatePresence>
//         {isOpen && <MobileMenu setIsOpenHandler={setIsOpenHandler} />}
//       </AnimatePresence>
//     </HeaderContainer>
//   );
// };

// export default Header;
