import { RouterProvider } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { Header } from "./components/Header";
import { router } from "./router";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <RouterProvider router={router} />
    </StyledEngineProvider>
  );
}

export default App;
