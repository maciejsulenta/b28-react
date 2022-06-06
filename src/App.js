import { GlobalStyles } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { PagesContainer } from "./components/PagesContainer";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Logo from "./components/Logo";
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <PagesContainer>
        <Landing />
        <Logo />
        <AboutUs />
      </PagesContainer>
    </ThemeProvider>
  );
}

export default App;
