import { GlobalStyles } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { PagesContainer } from "./components/PagesContainer";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Logo from "./components/Logo";
import AboutUs from "./pages/AboutUs";
import Opinions from "./pages/Opinions";
import Gallery from "./pages/Gallery";
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
          <AboutUs />
          <Opinions />
          <Gallery />
          <Contact />
          <Footer />
        </PagesContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
