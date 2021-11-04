import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";

import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../theme/Fonts";

function App({ Component }) {
  return (
    <ChakraProvider theme={Theme}>
      <Component />
    </ChakraProvider>
  );
}

export default App;
