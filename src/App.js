import React, { useEffect } from "react";
import { GlobalStyles } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { PagesContainer } from "./components/PagesContainer";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Logo from "./components/Logo";
import AboutUsMobile from "./pages/AboutUsMobile";
import AboutUsDesktop from "./pages/AboutUsDesktop";
import Opinions from "./pages/Opinions";
import GalleryDesktop from "./pages/GalleryDesktop";
import GalleryMobile from "./pages/GalleryMobile";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
      content: "#smooth-content",
      effects: true,
      smooth: 0.6,
      smoothTouch: 0.1,
    });
    smoother.effects("#logobg", {
      speed: 0.5,
    });

    gsap.to("#arrowleft", {
      scrollTrigger: {
        trigger: "#arrowleft",
      },
      left: "-6.2vw",
      top: "12em",
      duration: 1,
      delay: 0.5,
    });
    gsap.to("#arrowright", {
      scrollTrigger: {
        trigger: "#arrowright",
      },
      right: "-6.2vw",
      top: "12em",
      duration: 1,
      delay: 0.5,
    });
    gsap.to("#aboutLogo", {
      scrollTrigger: {
        trigger: "#aboutLogo",
      },
      opacity: 1,
      y: "2em",
      duration: 0.3,
      delay: 0.7,
    });
    gsap.to(".aboutImg", {
      scrollTrigger: {
        trigger: "#aboutLogo",
      },
      clipPath: "inset(0px 0px 0px 0px)",
    });
    gsap.to("#aboutText", {
      scrollTrigger: {
        trigger: "#aboutText",
      },
      opacity: 1,
      y: "3em",
      duration: 0.6,
      delay: 0.3,
    });
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div id="smooth-content">
          <Navbar />
          <PagesContainer>
            <Landing />
            <Logo />
            <AboutUsMobile />
            <AboutUsDesktop />
            <Opinions />
            <GalleryMobile />
            <GalleryDesktop />
            <Contact />
            <Footer />
          </PagesContainer>
        </div>
        <ScrollButton />
      </ThemeProvider>
    </>
  );
}

export default App;
