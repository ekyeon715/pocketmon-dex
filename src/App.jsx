import React from "react";
import Home from "./pages/Home";
import Router from "./shared/Router";
import Dex from "./pages/Dex";

function App() {
  return (
    <div>
      <Router>
        <Home />
        <Dex />
      </Router>
    </div>
  );
}

export default App;
