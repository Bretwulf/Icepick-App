import React from "react";
import "./App.css";
import LoginPage from "./components/login/login";
import RegisterPage from "./components/register/Register";
import EditPage from "./components/edit/edit";
import DeletePage from './components/delete/delete';
import GetPage from "./components/get/getData";
import { useModal } from "./contexts/modalContext/modalContext";
import Modal from "./components/modal/modal";
import { GlobalStyle } from "./styles/globalStyles";

function App() {

  const {stateModal, showModal} = useModal()

  return (
    <div className="App">
      <GlobalStyle/>
      {/* <LoginPage />
      <div></div>
      <RegisterPage/>
      <div>
        <EditPage/>
      </div>
      <DeletePage/>
      <GetPage/> */}
      {stateModal && <Modal/>}
      <button onClick={() => showModal(<LoginPage/>)}>Abrir Modal Login</button>
      <button onClick={() => showModal(<RegisterPage/>)}>Abrir Modal Cadastro</button>
      <button onClick={() => showModal(<EditPage/>)}>Abrir Modal de Editar</button>
    </div>
  );
}

export default App;
