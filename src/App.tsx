import React from "react";
import "./App.css";
import Modal from "./components/modal/modal";
import { GlobalStyle } from "./styles/globalStyles";
import FilterFrases from "./components/filter/filter";
import { RoutesMain as Routes } from "./Routes";
import RegisterForm from './components/registerForm/registerForm';
import EditForm from './components/editForm/editForm';
import LoginForm from './components/loginForm/loginForm';
import { useModal } from './hooks/useModal';
import EditSentenceForm from './components/EditSentenceForm/EditSentenceForm';
import AddSentenceForm from './components/AddSentenceForm/AddSentenceForm';

const App = () => {
  const { stateModal, showModal } = useModal();
  return ( 
    <div className="App">
          <GlobalStyle />
          {stateModal && <Modal />}
          <button onClick={() => showModal(<LoginForm />)}>
            Abrir Modal Login
          </button>
          <button onClick={() => showModal(<RegisterForm />)}>
            Abrir Modal Cadastro
          </button>
          <button onClick={() => showModal(<EditForm />)}>
            Abrir Modal de Editar
          </button>
          <button onClick={() => showModal(<EditSentenceForm />)}>
            Abrir Modal de Editar Frase
          </button>
          <button onClick={() => showModal(<AddSentenceForm />)}>
            Abrir Modal de Adicionar frase
          </button>
          <FilterFrases />
    </div>
   );
}
 
export default App;
  

