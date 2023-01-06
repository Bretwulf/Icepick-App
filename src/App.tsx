import React from "react";
import "./App.css";
import LoginPage from "./components/login/login";
import { useModal } from "./contexts/modalContext/modalContext";
import DeletePage from "./components/delete/delete";
import Modal from "./components/modal/modal";
import { GlobalStyle } from "./styles/globalStyles";
import FilterFrases from "./components/filter/filter";
import { RoutesMain as Routes } from "./Routes";
import ModalProvider from "./contexts/modalContext/modalContext";
import UserProvider from "./contexts/userContext";
function App() {
  const { stateModal, showModal } = useModal();

  return (
    <div className="App">
      <UserProvider>
        <ModalProvider>
          <GlobalStyle />
          <Routes />
          {/* <LoginPage />
      <div></div>
      <RegisterPage/>
      <div>
        <EditPage/>
      </div>
      <DeletePage/>
      <GetPage/> */}
          {stateModal && <Modal />}
          <button onClick={() => showModal(<LoginPage />)}>
            Abrir Modal Login
          </button>
          <button onClick={() => showModal(<RegisterPage />)}>
            Abrir Modal Cadastro
          </button>
          <button onClick={() => showModal(<EditPage />)}>
            Abrir Modal de Editar
          </button>
          <FilterFrases />
        </ModalProvider>
      </UserProvider>
    </div>
  );
}

export default App;
