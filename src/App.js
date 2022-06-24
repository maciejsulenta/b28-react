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
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
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
      </ThemeProvider>
    </>
  );
}

export default App;
