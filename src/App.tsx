import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { GlobalStyle } from "./Styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
