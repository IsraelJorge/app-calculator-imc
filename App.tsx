import { ThemeProvider } from "styled-components";
import { Home } from "./src/screens/Home";
import light from "./src/theme/light";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Home />
    </ThemeProvider>
  );
}
