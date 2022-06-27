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
