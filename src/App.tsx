import React from "react";
import "./App.css";
import LoginPage from "./components/login/login";
import RegisterPage from "./components/register/Register";
import EditPage from "./components/edit/edit";
import DeletePage from './components/delete/delete';
import GetPage from "./components/get/getData";



function App() {
  return (
    <div className="App">
      <LoginPage />
      <div></div>
      <RegisterPage/>
      <div>
        <EditPage/>
      </div>
      <DeletePage/>
      <GetPage/>
    </div>
  );
}

export default App;
