import React from "react";
import "./App.css";
import { GlobalStyle } from "./styles/globalStyles";
import FilterFrases from "./components/filter/filter";


import { MainRoutes } from "./Routes/Routes";

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <MainRoutes/>
    </div>
  );
}

export default App;
