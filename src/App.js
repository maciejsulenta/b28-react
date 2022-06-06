import { GlobalStyles } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { PagesContainer } from "./components/PagesContainer";
import Landing from "./pages/Landing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PagesContainer>
        <Landing />
      </PagesContainer>
    </ThemeProvider>
  );
}

export default App;
