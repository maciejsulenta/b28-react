import { GlobalStyles } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { PagesContainer } from "./components/PagesContainer";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar/>
      <PagesContainer>
        <Landing />
      </PagesContainer>
    </ThemeProvider>
  );
}

export default App;
